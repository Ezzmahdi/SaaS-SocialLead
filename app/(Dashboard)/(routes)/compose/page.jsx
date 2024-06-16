"use client";

import React, { useEffect, useState } from 'react'

import { checkSocialPlatform } from "@/lib/check-socials";
import { cn } from '@/lib/utils';
import { BarChartBig, CircleFadingPlus, EllipsisVertical, Hash, LayoutTemplate, Lightbulb, MessageSquareText, SmilePlus, Text } from 'lucide-react';


export default function ContentManagementPage() {
  const [socialacc, setSocialacc] = useState([]);

  useEffect(() => {
    const fetchSocialAccounts = async () => {
      const accounts = await checkSocialPlatform();
      if (accounts) {
        setSocialacc(accounts);
      }
    };

    fetchSocialAccounts();
  }, []);

    return (
      <div>
        <div class="lg:space-y-0 lg:space-x-4">

          <div class="flex-1 space-y-2 py-4 pl-4" style={{"margin-right":"350px"}}>
            <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2">
              <div className="p-2 w-fit rounded-md bg-slate-400">
                    <MessageSquareText className="w-7 h-7 bg-cyan-900"/>
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Create a post</h2>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">Create a high-performing post to get your message across.</p>
                </div>
              </div>
              <textarea class="w-full mt-4 p-2 border rounded-lg dark:bg-zinc-700 dark:text-zinc-100" rows="4" placeholder="What would you like to share?"></textarea>
              <div class="flex justify-between items-center mt-2">
                <div class="flex space-x-2">
                  <button class="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <EllipsisVertical className='w-5 h-5'/>
                  </button>
                  <button class="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <SmilePlus className='w-5 h-5'/>
                  </button>
                </div>
                <button class="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                  <CircleFadingPlus className='w-5 h-5'/>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-200" style={{'grid-template-columns': 'repeat(2, minmax(0, 1fr))'}}>

              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex justify-between items-center">
                  <div class="p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <Hash className="w-7 h-7 bg-cyan-900"/>
                  </div>
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Generate hashtags</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Use AI to generate relevant hashtags.</p>
                <div class="border border-dashed border-zinc-300 dark:border-zinc-600 p-4 mt-2 rounded-lg text-center text-zinc-500 dark:text-zinc-400">
                  No results generated
                </div>
                <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Generate</button>
              </div>


              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex justify-between items-center">
                  <button class="p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <BarChartBig className="w-7 h-7 bg-cyan-500"/>
                  </button>
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Performance prediction</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Use AI to predict how well your post will do.</p>
                <div class="flex justify-center items-center mt-4">
                  <div class="text-4xl text-zinc-900 dark:text-zinc-100">0</div>
                </div>
                <div class="text-center text-zinc-500 dark:text-zinc-400 mt-2">No results generated</div>
                <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Generate result</button>
              </div>


              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex justify-between items-center">
                  <button class="p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <LayoutTemplate className="w-7 h-7 bg-cyan-900"/>
                  </button>
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">User templates</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Pick from your saved templates.</p>
                <div class="border border-dashed border-zinc-300 dark:border-zinc-600 p-4 mt-2 rounded-lg text-zinc-900 dark:text-zinc-100">
                  <p class="text-sm">Added • Sep 26</p>
                  <p class="mt-2">#contentcreation #contentcreator #contenthacks #socialmediatips #socialmediamanager #socialmediahacks</p>
                </div>
                <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Use template</button>
              </div>


              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex justify-between items-center">
                  <button class="p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <Lightbulb className="w-7 h-7 bg-cyan-900"/>
                  </button>
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Get inspiration</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">Get started with an AI-generated idea template.</p>
                <div class="border border-dashed border-zinc-300 dark:border-zinc-600 p-4 mt-2 rounded-lg text-center text-zinc-500 dark:text-zinc-400">
                  Say something mind-blowing.
                </div>
                <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Use inspiration</button>
              </div>
            </div>
          </div>


        <div class="fixed top-0 right-0 h-full bg-[var(--sidebar-color)] p-[10px_14px] transition-[var(--tran-05)] overflow-hidden overflow-y-scroll" style={{"width":"350px"}}>
          <div class="bg-white dark:bg-zinc-800 p-4 shadow">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Schedule</h3>
              <button class="p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                <img src="https://placehold.co/24x24" alt="close icon" class="w-4 h-4"/>
              </button>
            </div>
            <div class="flex space-x-2 mt-4">
              <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">Pick time</button>
              <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">Post now</button>
              <button class="bg-orange-500 text-white py-2 px-4 rounded-lg">Plan</button>
            </div>
            <div class="mt-4">
              <h4 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Choose socials</h4>
              <div className="flex items-center space-x-2">
              {socialacc && socialacc.includes("Tiktok") && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXBKIqMm461mJBGE_s2BHXqx7pQRF8nkhPSaU3jVBMw&s" alt="Profile" className="rounded-full w-12 h-12" />}
              {socialacc && socialacc.includes("Instagram") && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Profile" className="rounded-full w-12 h-12" />}
              {socialacc && socialacc.includes("Facebook") && <img src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt="Profile" className="rounded-full w-12 h-12" />}
              {socialacc && socialacc.includes("LinkedIn") && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="Profile" className="rounded-full w-12 h-12" />}
              {socialacc && socialacc.includes("Facebook") && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowJjFW22_21ogdZ9nauAIrOeNsODULE319wj_6iFeQA&s" alt="Profile" className="rounded-full w-12 h-12" />}
            </div>
              <button class="mt-2 bg-zinc-200 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 py-2 px-4 rounded-lg">Not scheduled</button>
            </div>
            <div class="mt-4">
              <h4 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Organize</h4>
              <div class="flex items-center space-x-2 mt-2">
                <input type="text" class="w-full p-2 border rounded-lg dark:bg-zinc-700 dark:text-zinc-100" placeholder="Add labels"/>
                <button class="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                  <img src="https://placehold.co/24x24" alt="edit icon" class="w-6 h-6"/>
                </button>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Twitter controls</h4>
              <div class="flex items-center space-x-2 mt-2">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/>
                  <span class="text-zinc-900 dark:text-zinc-100">48 hours</span>
                </label>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Share draft</h4>
              <div class="flex items-center space-x-2 mt-2">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/>
                  <span class="text-zinc-900 dark:text-zinc-100">Create link</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        </div>  
      </div>
  );
}
