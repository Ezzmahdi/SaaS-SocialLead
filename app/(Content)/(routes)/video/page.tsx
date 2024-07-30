"use client";

import { Plus } from 'lucide-react';

import { useState, useEffect } from 'react';
import axios from 'axios';

type Avatar = {
  name: string;
  photoUrl: string;
};

export default function MainPage() {
  
  const [avatars, setAvatars] = useState<Avatar[]>([]);

  useEffect(() => {
    // Fetch existing avatars
    axios.get('/api/get-avatars').then(response => {
      setAvatars(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Video Avatar</h1>
        <div className="flex items-center space-x-2">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center">
            <span className="mr-2"><Plus /></span>
            New Video Avatar
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <span className="text-purple-600 text-2xl">👤</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Instant Avatar</h2>
            <p>Your digital twin in minutes</p>
          </div>
        </div>
        <img src="https://placehold.co/100x100" alt="Avatar" className="ml-auto rounded-lg"/>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Instant Avatar <span className="bg-zinc-200 text-zinc-600 px-2 py-1 rounded-full text-sm">1</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-dashed border-purple-300 p-4 rounded-lg flex items-center justify-center relative">
          <div className="text-center">
            <div className="bg-purple-100 p-8 rounded-full mb-4">
              <span className="text-purple-600 text-4xl">👤</span>
            </div>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Create Instant Avatar</button>
          </div>
        </div>
        {avatars.map((avatar, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center mb-4">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-4 rounded-full">
              <span className="text-purple-600 text-2xl">👤</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{avatar.name}</h2>
              <p>Your digital twin in minutes</p>
            </div>
          </div>
          <img src={avatar.photoUrl} alt="Avatar" className="ml-auto rounded-lg"/>
        </div>
      ))}
      </div>
    </div>
  );
}
