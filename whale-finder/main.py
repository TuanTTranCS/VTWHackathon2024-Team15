import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
import openai
import os
from dotenv import load_dotenv
import numpy as np

load_dotenv()  # Load environment variables from .env file

app = FastAPI()

# Set up OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Load profiles from JSON file
def load_profiles():
    with open("./src/public/profiles.json", "r") as f:
        data = json.load(f)
    return data["profiles"]

profiles = load_profiles()

# Convert profile to string for embedding
def profile_to_string(profile):
    basic = profile["basic"]
    idea = profile["idea"]
    cofounder_prefs = profile["coFounderPreferences"]
    
    return f"""
    Location: {basic['location']}
    Self Introduction: {basic['selfIntroduction']}
    What to Know: {basic['whatToKnow']}
    Education: {basic['education']['school']} {basic['education']['major']} ({basic['education']['years']})
    Employment: {basic['employment']['company']} - {basic['employment']['position']} ({basic['employment']['time']})
    Technical: {basic['technical']}
    Gender: {basic['gender']}
    Birthdate: {basic['birthdate']}
    Idea Overview: {idea['overview']}
    Set on Idea: {idea['setOnIdea']}
    Has Co-Founder: {idea['coFounder']['hasCoFounder']}
    Areas of Expertise: {', '.join(idea['areasOfExpertise'])}
    Interests: {idea['interests']}
    Equity Expectation: {idea['equityExpectation']}
    Co-Founder Preferences:
      Type: {cofounder_prefs['type']}
      Areas of Expertise: {', '.join(cofounder_prefs['areasOfExpertise'])}
      Age Preference: {cofounder_prefs['agePreference']}
    """

# Create embeddings for all profiles
def create_embeddings(profiles):
    embeddings = []
    for profile in profiles:
        response = openai.embeddings.create(
            model="text-embedding-3-small",
            input=profile_to_string(profile)
        )
        # print(response)
        embeddings.append(response.data[0].embedding)
    return embeddings

profile_embeddings = create_embeddings(profiles)

# Calculate cosine similarity
def cosine_similarity(vec1, vec2):
    return np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))

# Rank profiles based on similarity to a given profile
def rank_profiles(profile_index):
    target_embedding = profile_embeddings[profile_index]
    similarities = [cosine_similarity(target_embedding, emb) for emb in profile_embeddings]
    
    ranked_indices = sorted(range(len(similarities)), key=lambda i: similarities[i], reverse=True)
    ranked_profiles = [
        {
            **profiles[i],
            "similarity": similarities[i]
        }
        for i in ranked_indices if i != profile_index
    ]
    
    return ranked_profiles

class ProfileMatchRequest(BaseModel):
    profile_index: int

@app.post("/match-profiles")
async def match_profiles(request: ProfileMatchRequest):
    if request.profile_index < 0 or request.profile_index >= len(profiles):
        raise HTTPException(status_code=400, detail="Invalid profile index")
    
    ranked_profiles = rank_profiles(request.profile_index)
    return {"ranked_profiles": ranked_profiles}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)