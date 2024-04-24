import { auth } from "@clerk/nextjs";


export const GetuserId = () => {
    const { userId } = auth();
    return userId
}