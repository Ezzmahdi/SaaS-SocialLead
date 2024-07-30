import { auth } from "@clerk/nextjs/server";

export default async function handler(req: any, res: any) {
    const { userId } = auth();
    if (userId) {
      res.status(200).json({ userId });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  }