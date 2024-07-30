"use client";

import VideoForm from '@/components/VideoForm';
import { Video } from 'lucide-react';
import { Heading } from "@/components/heading";

const GenerateVideo = () => {
  const avatarId  = '1';

  return (
    <div className="p-4">
      <header className="tt-top-fixed bg-light-subtle mb-4">
        <Heading 
            title="Generate Video" 
            description="Get Eyes on your contnet with our model" 
            icon={Video} 
            iconColor="text-violet-500" 
            bgColor="bg-violet-500/10"
        />
    </header>
      {avatarId ? (
        <VideoForm avatarId={avatarId} />
      ) : (
        <p>No avatar selected. Please create an avatar first.</p>
      )}
    </div>
  );
}

export default GenerateVideo