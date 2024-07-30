"use client";

import { ExternalLink } from "lucide-react";
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function AddSocialsPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add Socials</h2>
      <p className="text-zinc-600 mb-6">Add a social account to SocialLead to start posting</p>
      <ul className="m-10 ml-0">
        <li className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="mr-3 w-12 h-12 m-3" />
            <div>
              <h3 className="font-semibold m-0">Instagram Business</h3>
              <p className="text-sm text-zinc-500">Connect a new Instagram Business profile</p>
            </div>
          </div>
          <ExternalLink/>
        </li>
        <li className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <img src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt="Facebook" className="mr-3 w-12 h-12 m-3" />
            <div>
              <h3 className="font-semibold m-0">Facebook Page</h3>
              <p className="text-sm text-zinc-500">Connect a new Facebook Page</p>
            </div>
          </div>
          <ExternalLink/>
        </li>
        <li className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="LinkedIn" className="mr-3 w-12 h-12 m-3" />
            <div>
              <h3 className="font-semibold m-0">LinkedIn</h3>
              <p className="text-sm text-zinc-500">Connect a new LinkedIn profile</p>
            </div>
          </div>
          <button onClick={() => signIn('linkedin')} className="text-blue-500">Connect</button>
        </li>
        <li className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowJjFW22_21ogdZ9nauAIrOeNsODULE319wj_6iFeQA&s" alt="YouTube" className="mr-3 w-12 h-12 m-3" />
            <div>
              <h3 className="font-semibold m-0">YouTube</h3>
              <p className="text-sm text-zinc-500">Connect a new YouTube profile</p>
            </div>
          </div>
          <ExternalLink/>
        </li>
        <li className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXBKIqMm461mJBGE_s2BHXqx7pQRF8nkhPSaU3jVBMw&s" alt="TikTok" className="mr-3 w-12 h-12 m-3" />
            <div>
              <h3 className="font-semibold m-0">TikTok</h3>
              <p className="text-sm text-zinc-500">Connect a new TikTok profile</p>
            </div>
          </div>
          <Link href="">
            Connect
          </Link>
        </li>
      </ul>
    </div>
  );
}
