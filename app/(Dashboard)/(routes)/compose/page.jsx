"use client";

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { checkSocialPlatform } from "@/lib/check-socials";
import { MessageSquareText, EllipsisVertical, SmilePlus, CircleFadingPlus, Hash, BarChartBig, LayoutTemplate, Lightbulb, CalendarRangeIcon, Layers, Send } from 'lucide-react';

// const postToSocialMedia = async (platform, content) => {
//   let url = '';
//   let headers = {};
//   let body = {};

//   switch (platform) {
//     case 'Twitter':
//       url = 'https://api.twitter.com/2/tweets';
//       headers = {
//         'Authorization': `Bearer ${process.env.TWITTER_CLIENT_KEY}:${process.env.TWITTER_CLIENT_SECRET}`,
//         'Content-Type': 'application/json'
//       };
//       body = { text: content };
//       break;
//     case 'TikTok':
//       url = 'https://open-api.tiktok.com/v2/post/publish/video/init/';
//       headers = {
//         'Authorization': `Bearer ${process.env.TIKTOK_CLIENT_KEY}:${process.env.TIKTOK_CLIENT_SECRET}`,
//         'Content-Type': 'application/json'
//       };
//       body = {
//         post_info: {
//           privacy_level: 'PUBLIC_TO_EVERYONE',
//           title: content,
//           source_info: {
//             source: 'FILE_UPLOAD',
//             video_url: 'URL_TO_YOUR_VIDEO'
//           }
//         }
//       };
//       break;
//     case 'YouTube':
//       url = 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=media';
//       headers = {
//         'Authorization': `Bearer ${process.env.YOUTUBE_CLIENT_KEY}:${process.env.YOUTUBE_CLIENT_SECRET}`,
//         'Content-Type': 'application/json'
//       };
//       body = {
//         snippet: { title: content, description: content, tags: [], categoryId: '22' },
//         status: { privacyStatus: 'public' }
//       };
//       break;
//     case 'Facebook':
//       url = `https://graph.facebook.com/v12.0/me/feed`;
//       headers = {
//         'Authorization': `Bearer ${process.env.FACEBOOK_CLIENT_KEY}:${process.env.FACEBOOK_CLIENT_SECRET}`,
//         'Content-Type': 'application/json'
//       };
//       body = { message: content };
//       break;
//     case 'LinkedIn':
//       url = 'https://api.linkedin.com/v2/ugcPosts';
//       headers = {
//         'Authorization': `Bearer ${process.env.LINKEDIN_CLIENT_KEY}:${process.env.LINKEDIN_CLIENT_SECRET}`,
//         'Content-Type': 'application/json'
//       };
//       body = {
//         author: 'urn:li:person:YOUR_PERSON_URN',
//         lifecycleState: 'PUBLISHED',
//         specificContent: {
//           'com.linkedin.ugc.ShareContent': {
//             shareCommentary: { text: content },
//             shareMediaCategory: 'NONE'
//           }
//         },
//         visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' }
//       };
//       break;
//     default:
//       break;
//   }

//   try {
//     const response = await axios.post(url, body, { headers });
//     console.log(`${platform} response:`, response.data);
//   } catch (error) {
//     console.error(`Error posting to ${platform}:`, error);
//   }
// };

export default function ContentManagementPage() {
  const [socialacc, setSocialacc] = useState([]);
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  // useEffect(() => {
  //   const fetchSocialAccounts = async () => {
  //     const accounts = await checkSocialPlatform();
  //     if (accounts) {
  //       setSocialacc(accounts);
  //     }
  //   };

  //   fetchSocialAccounts();
  // }, []);

  const handleSelectionChange = (platform) => {
    setSelectedPlatforms(prevSelected => {
      if (prevSelected.includes(platform)) {
        return prevSelected.filter(item => item !== platform);
      } else {
        return [...prevSelected, platform];
      }
    });
  };

  // const handlePost = () => {
  //   selectedPlatforms.forEach(platform => {
  //     postToSocialMedia(platform, content);
  //   });
  // };

    return (
      <div>
        <div className="lg:space-y-0 lg:space-x-4">
          <div className="flex-1 space-y-2 p-4" style={{ marginRight: '350px' }}>
            <div className="bg-white dark:bg-zinc-800 p-4 mb-4 rounded-lg shadow">
              <div className="flex items-center space-x-2">
                <div className="p-2 w-fit rounded-md bg-slate-400 mr-3" style={{ backgroundColor: 'rgb(167 243 208)' }}>
                  <MessageSquareText className="w-7 h-7" style={{ color: 'rgb(16 185 129)' }} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100" style={{ margin: '0' }}>Create a post</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Create a high-performing post to get your message across.</p>
                </div>
              </div>
              <textarea
                className="w-full mt-4 p-3 border rounded-lg dark:bg-zinc-700 dark:text-zinc-100"
                rows="4"
                placeholder="What would you like to share?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <EllipsisVertical className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <SmilePlus className="w-5 h-5" />
                  </button>
                </div>
                <button className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600">
                  <CircleFadingPlus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-200" style={{'grid-template-columns': 'repeat(2, minmax(0, 1fr))'}}>

              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex items-center">
                  <div class="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-600 mr-3" style={{'background-color': 'rgb(94 234 212)'}}>
                    <Hash className="w-7 h-7" style={{'color': 'rgb(15 118 110)'}}/>
                  </div>
                  <h3 class="p-2 m-0 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Generate hashtags</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">Use AI to generate relevant hashtags.</p>
                <div class="border border-dashed border-zinc-300 dark:border-zinc-600 p-4 mt-2 rounded-lg text-center text-zinc-500 dark:text-zinc-400">
                  No results generated
                </div>
                <button class="mt-4 w-full py-2 text-white bg-[#6469ff] font-medium opacity-50 rounded-lg">Generate</button>
              </div>


              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex items-center">
                  <div class="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-600 mr-3" style={{'background-color': 'rgb(94 234 212)'}}>
                    <BarChartBig className="w-7 h-7" style={{'color': 'rgb(15 118 110)'}}/>
                  </div>
                  <h3 class="p-2 m-0 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Performance prediction</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">Use AI to predict how well your post will do.</p>
                <div class="flex justify-center items-center mt-4">
                  <div class="text-4xl text-zinc-900 dark:text-zinc-100">0</div>
                </div>
                <div class="text-center text-zinc-500 dark:text-zinc-400 mt-2">No results generated</div>
                <button class="mt-4 w-full py-2 rounded-lg text-white bg-[#6469ff] font-medium opacity-50">Generate result</button>
              </div>


              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex items-center">
                  <button class="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-600 mr-3" style={{'background-color': 'rgb(94 234 212)'}}>
                    <LayoutTemplate className="w-7 h-7" style={{'color': 'rgb(15 118 110)'}}/>
                  </button>
                  <h3 class="p-2 m-0 text-lg font-semibold text-zinc-900 dark:text-zinc-100">User templates</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">Pick from your saved templates.</p>
                <div class="border border-dashed border-zinc-300 dark:border-zinc-600 p-4 mt-2 rounded-lg text-zinc-900 dark:text-zinc-100">
                  <p class=""></p>
                  <p class="m-0">Add something</p>
                </div>
                <button class="mt-4 w-full py-2 rounded-lg text-white bg-[#6469ff] font-medium opacity-50">Use template</button>
              </div>


              <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
                <div class="flex items-center">
                  <button class="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-600 mr-3" style={{'background-color': 'rgb(94 234 212)'}}>
                    <Lightbulb className="w-7 h-7" style={{'color': 'rgb(15 118 110)'}}/>
                  </button>
                  <h3 class="p-2 m-0 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Magic Go</h3>
                </div>
                <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">Get started with an AI-generated piece of content.</p>
                <div class="border border-dashed border-zinc-300 dark:border-zinc-600 p-4 mt-2 rounded-lg text-center text-zinc-500 dark:text-zinc-400">
                  Say something mind-blowing.
                </div>
                <button class="mt-4 w-full py-2 rounded-lg text-white bg-[#6469ff] font-medium opacity-50">Use inspiration</button>
              </div>
            </div>
          </div>


          <div className="fixed top-0 right-0 h-full bg-[var(--sidebar-color)] p-[10px_14px] transition-[var(--tran-05)] overflow-hidden overflow-y-scroll" style={{ width: '350px' }}>
          <div className="bg-white dark:bg-zinc-800 p-4 shadow">
            <div className="flex items-center">
              <i> <CalendarRangeIcon /> </i>
              <h3 className="p-2 m-0 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Schedule</h3>
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="flex py-2 px-4 rounded-md" style={{ border: '2px solid #6469ff' }}><Layers className='px-1' /> Pick time</button>
              <button className="flex py-2 px-4 rounded-md text-white" style={{ backgroundColor: '#6469ff' }}><Send className='px-1' /> Schedule</button>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Choose socials</h4>
              <div className="flex flex-col space-y-2">
                {socialacc.includes('Tiktok') && (
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedPlatforms.includes('TikTok')}
                      onChange={() => handleSelectionChange('TikTok')}
                    />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXBKIqMm461mJBGE_s2BHXqx7pQRF8nkhPSaU3jVBMw&s" alt="TikTok" className="rounded-full w-12 h-12" />
                  </label>
                )}
                {socialacc.includes('Instagram') && (
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedPlatforms.includes('Instagram')}
                      onChange={() => handleSelectionChange('Instagram')}
                    />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="rounded-full w-12 h-12" />
                  </label>
                )}
                {socialacc.includes('Facebook') && (
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedPlatforms.includes('Facebook')}
                      onChange={() => handleSelectionChange('Facebook')}
                    />
                    <img src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt="Facebook" className="rounded-full w-12 h-12" />
                  </label>
                )}
                {socialacc.includes('LinkedIn') && (
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedPlatforms.includes('LinkedIn')}
                      onChange={() => handleSelectionChange('LinkedIn')}
                    />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="LinkedIn" className="rounded-full w-12 h-12" />
                  </label>
                )}
              </div>
              <a href="/addsocials"><p className='m-0'>No social is connected</p></a>
              <hr />
              <button
                className="mt-2 dark:bg-zinc-600 dark:text-zinc-100 py-2 px-4 rounded-lg"
                style={{ marginTop: '0.5rem', backgroundColor: '#e4e4e7', color: '#18181b', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
                // onClick={handlePost}
              >
                Post to Selected
              </button>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Organize</h4>
              <div className="flex items-center space-x-2 mt-2">
                <select className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-700 dark:text-zinc-100">
                  <option value="label1">Label 1</option>
                  <option value="label2">Label 2</option>
                  <option value="label3">Label 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}