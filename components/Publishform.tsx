"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Plus } from 'lucide-react';

import { Button } from "@/components/ui/button";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodError, z } from "zod";
import FacebookApiService from "@/app/api/meta/route";

const postSchema = z.object({
  post: z.string().min(0, { message: "Post is required" }),
});

type PostForm = z.infer<typeof postSchema>;

interface FacebookPostFormProps {
    isDialogOpen: boolean;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FacebookPostForm = ({ isDialogOpen, setIsDialogOpen }: FacebookPostFormProps) => {

  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const { control, handleSubmit } = useForm<PostForm>();

  const handleCreatePost = async (data: string) => {
    try {
      setIsCreatingPost(true);
    const response = await fetch('@/api/meta/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: data }),
    });
    const post = await response.json();

    console.log("POST", post);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Error creating user:", error);
      }
    } finally {
      setIsCreatingPost(false);
    }

    setIsDialogOpen(false);
  };
  const [textareaValue, setTextareaValue] = useState<string>('');

  return (

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                          Create Post
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">

                    <div className="post-content">
                      <textarea id="post-text" placeholder="Start writing or use the AI Assistant" className='w-full' value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)}></textarea>
                      <div className="file-upload">
                        <label htmlFor="file-input">Drag & drop or select a file</label>
                        <input name="file" type="file" id="file-input"/>
                      </div>
                    </div>
                    </DialogDescription>
                    <DialogFooter>
                        <Button onClick={() => handleCreatePost(textareaValue)}  size="lg" variant="default" className="w-full">
                            Add Event
                            <Plus className="w-4 h-4 fill-white"  />
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    
  );
};

export default FacebookPostForm;