// pages/api/generateMessage.js

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  // Store your API key in an environment variable
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    const prompt = `
      Write a short message to Emma explaining why Olivia Martinez would be a great co-founder match.

      Emma's expertise: AI and software engineering.
      Olivia's expertise: Sales, marketing, and operations.
      Both share a focus on innovative, tech-driven solutions.
    `;

    const response = await openai.createCompletion({
      model: "text-davinci-003",  // Or "gpt-4" if available
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    const message = response.data.choices[0].text.trim();

    return res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}
