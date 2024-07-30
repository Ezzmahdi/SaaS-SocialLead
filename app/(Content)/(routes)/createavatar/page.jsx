"use client";

import { useState } from 'react';
import axios from 'axios';

const CreateAvatar = () => {
  const [name, setName] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [avatarId, setAvatarId] = useState('');

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('video', videoFile);

    const response = await axios.post('/api/create-avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.data.avatarId) {
      setAvatarId(response.data.avatarId);
      alert('Avatar created successfully!');
    } else {
      alert('Failed to create avatar.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Avatar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter avatar name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          accept="video/*"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Create Avatar
        </button>
      </form>
      {avatarId && (
        <div className="mt-4">
          <p>Avatar created with ID: {avatarId}</p>
        </div>
      )}
    </div>
  );
}

export default CreateAvatar;
