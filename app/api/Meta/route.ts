// const API_BASE_URL = "https://graph.facebook.com";

// const HEADERS = {
//   "Content-Type": "application/json",
// };

// const ApiMethods = {
//   GET: "GET",
//   POST: "POST",
//   PUT: "PUT",
//   DELETE: "DELETE",
// };

// const FacebookApiService = {
//   createPost: async (message: string) => {
//     const url = `${API_BASE_URL}/v18.0/${process.env.NEXT_PUBLIC_APP_ID}/feed?message=${message}&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
//     const options = {
//       method: ApiMethods.POST,
//       headers: HEADERS,
//       body: JSON.stringify({ message }),
//     };

//     const response = await fetch(url, options);

//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   },
// };

// export default FacebookApiService;

// pages/api/postToFacebook.js
// pages/api/postToFacebook.js
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
// import { SchedulePost } from '@/types';

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const { message, scheduledDate, scheduledTime } = req.body;

  const { YOUR_CLIENT_ID, YOUR_CLIENT_SECRET } = process.env;

    try {

        // const newSchedulePost: SchedulePost = {
        //   message,
        //   scheduledDate,
        //   scheduledTime,
        // };

        // Get access token from Facebook
        
        const { data } = await axios.get(`https://graph.facebook.com/oauth/access_token?client_id=${YOUR_CLIENT_ID}&client_secret=${YOUR_CLIENT_SECRET}&grant_type=client_credentials`);
        const accessToken = data.access_token;

        // Post to Facebook
        const response = await axios.post(`https://graph.facebook.com/me/feed`, {
            message,
            access_token: accessToken
        });

        res.status(200).json({ success: true, response: response.data });
    } catch (error: any) { // Explicitly typing error as 'any'
        console.error('Error posting to Facebook:', error.response?.data || error.message); // Log error message or response data
        res.status(error.response?.status || 500).json({ success: false, error: error.response?.data || error.message });
    }
}
