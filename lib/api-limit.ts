import { auth } from '@clerk/nextjs/server';
import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    try {
        const userApiLimit = await prismadb.userApiLimit.findUnique({
            where: { userId }
        });

        if (userApiLimit) {
            await prismadb.userApiLimit.update({
                where: { userId },
                data: { count: userApiLimit.count + 1 },
            });
        } else {
            await prismadb.userApiLimit.create({
                data: { userId, count: 1 }
            });
        }
    } catch (error) {
        console.error("Error increasing API limit:", error);
    }
};

export const checkApiLimit = async (): Promise<boolean> => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    try {
        const userApiLimit = await prismadb.userApiLimit.findUnique({
            where: { userId }
        });

        return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS;
    } catch (error) {
        console.error("Error checking API limit:", error);
        return false;
    }
};

export const getApiLimitCount = async (): Promise<number> => {
    const { userId } = auth();

    if (!userId) {
        return 0;
    }

    try {
        const userApiLimit = await prismadb.userApiLimit.findUnique({
            where: { userId }
        });

        return userApiLimit ? userApiLimit.count : 0;
    } catch (error) {
        console.error("Error getting API limit count:", error);
        return 0;
    }
};