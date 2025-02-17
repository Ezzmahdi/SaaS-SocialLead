import type { NextAuthOptions } from "next-auth";

import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
    providers: [
      LinkedInProvider({
          clientId: process.env.LINKEDIN_CLIENT_ID as string,
          clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
          authorization: {
            params: {
              scope: "openid profile email w_member_social", // Example scopes for LinkedIn
            },
          },
        }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      }),
      InstagramProvider({
        clientId: process.env.INSTAGRAM_CLIENT_ID as string,
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string,
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID as string,
        clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      }),
      GoogleProvider({
        clientId: process.env.YOUTUBE_CLIENT_ID as string,
        clientSecret: process.env.YOUTUBE_CLIENT_SECRET as string,
      }),
      // TiktokProvider({
      //   clientId: process.env.TIKTOK_CLIENT_ID as string,
      //   clientSecret: process.env.TIKTOK_CLIENT_SECRET as string,
      // }),
    ],
}