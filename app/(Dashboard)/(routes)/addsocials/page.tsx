"use client";

import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import Facebook from "@/components/facebookbtn";

export default function ContentSchedulingPage() {

  // useEffect(() => {
  //   const initFB = () => {
  //     window.fbAsyncInit = function() {
  //       window.FB.init({
  //         appId: '1467609453871669',
  //         cookie: true,
  //         xfbml: true,
  //         version: 'v19.0'
  //       });

  //       window.FB.getLoginStatus(function(response:any) {
  //         statusChangeCallback(response);
  //       })
  //     };
  
  //     // Load the Facebook SDK asynchronously
  //     (function(d, s, id){
  //       var js: HTMLScriptElement, fjs = d.getElementsByTagName(s)[0];
  //       if (d.getElementById(id)) {return;}
  //       js = d.createElement(s) as HTMLScriptElement;
  //       js.id = id;
  //       js.src = "https://connect.facebook.net/en_US/sdk.js";
  //       if (fjs && fjs.parentNode) { // Null check before accessing parentNode
  //         fjs.parentNode.insertBefore(js, fjs);
  //       }
  //     }(document, 'script', 'facebook-jssdk'));
  //   };


  //   // Call the initialization function
  //   initFB();

    
  //   function statusChangeCallback(response:any) {
  //     if (response.status === 'connected') {
  //       console.log('Logged in and authenticated');
  //     } else {
  //       console.log('Not authenticated');
  //     }
  //   }
    
  //   const checkLoginState = function () {
  //     window.FB.getLoginStatus(function(response:any) {
  //       statusChangeCallback(response)
  //     });
  //   }
    
  //   // Clean up function to remove FB initialization script
  //   return () => {
  //     const fbScript = document.getElementById('facebook-jssdk');
  //     if (fbScript) {
  //       fbScript.remove();
  //     }
  //   };

  // })
    return (
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add Socials</h2>
          <p className="text-zinc-600 mb-6">Add a social account to FeedHive to start posting</p>
          <ul className="m-10 ml-0">
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="mr-3 w-12 h-12 m-3" />
                <div>
                  <h3 className="font-semibold m-0">Instagram Business</h3>
                  <p className="text-sm text-zinc-500">Connect a new Instagram Business profile</p>
                </div>
              </div>
              <span><ExternalLink/></span>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <img src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt="Facebook" className="mr-3 w-12 h-12 m-3" />
                <div>
                  <h3 className="font-semibold m-0">Facebook Page</h3>
                  <p className="text-sm text-zinc-500">Connect a new Facebook Page</p>
                </div>
              </div>
              <span><ExternalLink/></span>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="LinkedIn" className="mr-3 w-12 h-12 m-3" />
                <div>
                  <h3 className="font-semibold m-0">LinkedIn</h3>
                  <p className="text-sm text-zinc-500">Connect a new LinkedIn profile</p>
                </div>
              </div>
              <span><ExternalLink/></span>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowJjFW22_21ogdZ9nauAIrOeNsODULE319wj_6iFeQA&s" alt="YouTube" className="mr-3 w-12 h-12 m-3" />
                <div>
                  <h3 className="font-semibold m-0">YouTube</h3>
                  <p className="text-sm text-zinc-500">Connect a new YouTube profile</p>
                </div>
              </div>
              <span><ExternalLink/></span>
            </li>
            <li className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXBKIqMm461mJBGE_s2BHXqx7pQRF8nkhPSaU3jVBMw&s" alt="TikTok" className="mr-3 w-12 h-12 m-3" />
                <div>
                  <h3 className="font-semibold m-0">TikTok</h3>
                  <p className="text-sm text-zinc-500">Connect a new TikTok profile</p>
                </div>
              </div>
              <span><ExternalLink/></span>
            </li>
          </ul>

          <Facebook />
        </div>
    )}