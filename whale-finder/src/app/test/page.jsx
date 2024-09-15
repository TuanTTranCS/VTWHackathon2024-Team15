import React from 'react';
import { OpenAI } from 'openai';
import ProfileMatcher from '../../components/ProfileMatcher';

const Home = () => {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile Matcher</h1>
      <ProfileMatcher openai={openai} />
    </div>
  );
};

export default Home;