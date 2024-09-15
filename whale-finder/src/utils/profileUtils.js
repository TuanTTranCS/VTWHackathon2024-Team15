"use client"
export async function getProfiles() {
  const response = await fetch('../public/profiles.json');
  const data = await response.json();
  return data.profiles;
}

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function profileToString(profile) {
  const {
    basic: {
      location,
      selfIntroduction,
      whatToKnow,
      education,
      employment,
      technical,
      gender,
      birthdate
    },
    idea: {
      overview,
      setOnIdea,
      coFounder,
      areasOfExpertise,
      interests,
      equityExpectation
    },
    coFounderPreferences
  } = profile;

  const age = calculateAge(birthdate);

  return `
    Location: ${location}
    Self Introduction: ${selfIntroduction}
    What to Know: ${whatToKnow}
    Education: ${education.school} ${education.major} (${education.years})
    Employment: ${employment.company} - ${employment.position} (${employment.time})
    Technical: ${technical}
    Gender: ${gender}
    Age: ${age}
    Idea Overview: ${overview}
    Set on Idea: ${setOnIdea}
    Has Co-Founder: ${coFounder.hasCoFounder}
    ${coFounder.hasCoFounder === 'Y' ? `Co-Founder Technical: ${coFounder.coFounderTechnical}` : ''}
    Areas of Expertise: ${areasOfExpertise.join(', ')}
    Interests: ${interests}
    Equity Expectation: ${equityExpectation}
    Co-Founder Preferences:
      Type: ${coFounderPreferences.type}
      Areas of Expertise: ${coFounderPreferences.areasOfExpertise.join(', ')}
      Age Preference: ${coFounderPreferences.agePreference}
  `.replace(/\s+/g, ' ').trim();
}

export function getProfileDisplayInfo(profile) {
  return {
    name: profile.basic.name,
    location: profile.basic.location,
    age: calculateAge(profile.basic.birthdate),
    education: `${profile.basic.education.school} - ${profile.basic.education.major}`,
    employment: `${profile.basic.employment.company} - ${profile.basic.employment.position}`,
    ideaOverview: profile.idea.overview
  };
}