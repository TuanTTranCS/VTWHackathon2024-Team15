"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getProfiles, profileToString, getProfileDisplayInfo } from '../utils/profileUtils';

const ProfileMatcher = ({ openai }) => {
  const [profiles, setProfiles] = useState([]);
  const [embeddings, setEmbeddings] = useState([]);
  const [rankedProfiles, setRankedProfiles] = useState([]);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfilesAndEmbeddings = async () => {
      try {
        setIsLoading(true);
        const fetchedProfiles = await getProfiles();
        setProfiles(fetchedProfiles);

        const embeddingPromises = fetchedProfiles.map(profile =>
          openai.embeddings.create({
            model: "text-embedding-3-small",
            input: profileToString(profile),
          })
        );

        const embeddings = await Promise.all(embeddingPromises);
        setEmbeddings(embeddings.map(e => e.data[0].embedding));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching profiles or creating embeddings:", error);
        setIsLoading(false);
      }
    };

    fetchProfilesAndEmbeddings();
  }, [openai]);

  const cosineSimilarity = (vecA, vecB) => {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  };

  const rankProfiles = (selectedIndex) => {
    const selectedEmbedding = embeddings[selectedIndex];
    const rankedProfiles = profiles.map((profile, index) => ({
      ...profile,
      similarity: cosineSimilarity(selectedEmbedding, embeddings[index]),
    }));

    rankedProfiles.sort((a, b) => b.similarity - a.similarity);
    setRankedProfiles(rankedProfiles);
  };

  const handleProfileSelect = (index) => {
    setSelectedProfileIndex(index);
    rankProfiles(index);
  };

  if (isLoading) {
    return <div>Loading profiles and creating embeddings...</div>;
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold mb-2">Select a profile:</h2>
        {profiles.map((profile, index) => (
          <Button
            key={index}
            onClick={() => handleProfileSelect(index)}
            className="mr-2 mb-2"
          >
            {profile.basic.name}
          </Button>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold">Ranked Profiles</h2>
        {rankedProfiles.map((profile, index) => {
          const displayInfo = getProfileDisplayInfo(profile);
          return (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{displayInfo.name} - Similarity: {(profile.similarity * 100).toFixed(2)}%</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Location:</strong> {displayInfo.location}</p>
                <p><strong>Age:</strong> {displayInfo.age}</p>
                <p><strong>Education:</strong> {displayInfo.education}</p>
                <p><strong>Employment:</strong> {displayInfo.employment}</p>
                <p><strong>Idea Overview:</strong> {displayInfo.ideaOverview.substring(0, 100)}...</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileMatcher;