import { auth } from "@clerk/nextjs/server";


export const GetuserId = () => {
    const { userId } = auth();
    return userId
}