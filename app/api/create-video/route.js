import axios from 'axios';

export default async (req, res) => {
  const { avatarId, script } = req.body;

  const response = await axios.post('https://app.deepbrain.io/api/odin/v3/simple/video', {
    avatarId,
    script,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.DEEP_BRAIN_API_KEY}`,
    },
  });

  res.status(200).json(response.data);
};
