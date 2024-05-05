import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.YOUR_CLIENT_ID,
      clientSecret: process.env.YOUR_CLIENT_SECRET,
    }),
    // Add other providers as needed
  ],
});