import { useState } from 'react';
import axios from 'axios';

function VideoForm({ avatarId }) {
  const [script, setScript] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('/api/create-video', {
      avatarId,
      script,
    });

    if (response.data.video_url) {
      setVideoUrl(response.data.video_url);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-zinc-900 text-white p-2">
        <textarea
          className="w-full bg-zinc-800 p-4 rounded text-sm mb-4 text-black"
          style={{ height: "250px" }}
          placeholder="Type your script here..."
          value={script}
          onChange={(e) => setScript(e.target.value)}
        ></textarea>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md m-2"
          onClick={handleSubmit}
        >
          Generate Video
        </button>
        <button
          className="border border-purple-500 text-black px-4 py-2 rounded-md m-2"
          style={{ border: '10px solid rgb(168 85 247)' }}
        >
          Post Video
        </button>
      </div>
      <div className="flex-1 flex flex-col bg-zinc-100 rounded-md" style={{ backgroundColor: 'rgb(24, 24, 27)', color: "white" }}>
        <div className="flex justify-center items-center h-1/2 p-2">
          {videoUrl ? (
            <video src={videoUrl} controls className="h-full p-3" />
          ) : (
            <img src="https://cdn.dribbble.com/users/17914/screenshots/4902225/media/0d6d47739dae97adc81ca7076ee56cc9.png" alt="Video Preview" className="rounded-md" style={{ height: "300px" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoForm;
