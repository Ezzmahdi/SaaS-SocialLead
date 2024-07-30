import axios from 'axios';
import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' });
    return;
  }

  const { name } = req.body;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('video', req.body.video, req.body.video.name);

  try {
    const response = await axios.post('https://app.deepbrain.io/api/odin/v3/avatar', formData, {
      headers: {
        'Authorization': `Bearer ${process.env.DEEP_BRAIN_API_KEY}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    const avatarData = response.data;
    const photoUrl = avatarData.photoUrl; // Adjust according to the API response structure

    res.status(200).json({ name, photoUrl });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create avatar', error: error.message });
  }
};
