// pages/api/image.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt,
          n: 1,
          size: '1024x1024',
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data && response.data.data && response.data.data[0] && response.data.data[0].url) {
        const imageUrl = response.data.data[0].url;
        res.status(200).json({ imageUrl });
      } else {
        console.error('Invalid response format:', response.data);
        res.status(500).json({ error: 'Invalid response format from OpenAI API' });
      }
    } catch (error) {
      console.error('Error generating image:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Failed to generate image' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
