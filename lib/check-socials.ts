import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export const addSocialPlatforms = async (social: string) => {
    const { userId } = auth();

    if (!userId) {
        return;
    };

    const userPlatform = await prismadb.SocialPlatforms.findUnique({
        where: {
            userId
        }
    });

    if (userPlatform) {
        if (social === 'Facebook') {
            await prismadb.SocialPlatforms.update({
                where: {userId:userId},
                data: {Facebook: true},
            });
        } else if (social === 'Instagram') {
            await prismadb.SocialPlatforms.update({
                where: {userId:userId},
                data: {Instagram: true},
            });
        } else if (social === '') {
            await prismadb.SocialPlatforms.update({
                where: {userId:userId},
                data: {LinkedIn: true},
            });
        } else if (social === 'Tiktok') {
            await prismadb.SocialPlatforms.update({
                where: {userId:userId},
                data: {Tiktok: true},
            });
        } else if (social === 'Youtube') {
            await prismadb.SocialPlatforms.update({
                where: {userId:userId},
                data: {Youtube: true},
            });
        }
    } else {
        if (social === 'Facebook') {
            await prismadb.SocialPlatforms.create({
                data: {userId:userId, Facebook: true}
            });
        } else if (social === 'Instagram') {
            await prismadb.SocialPlatforms.create({
                data: {userId:userId, Instagram: true}
            });
        } else if (social === 'LinkedIn') {
            await prismadb.SocialPlatforms.create({
                data: {userId:userId, LinkedIn: true}
            });
        } else if (social === 'Tiktok') {
            await prismadb.SocialPlatforms.create({
                data: {userId:userId, Tiktok: true}
            });
        } else if (social === 'Youtube') {
            await prismadb.SocialPlatforms.create({
                data: {userId:userId, Youtube: true}
            });
        };
    };
};

export const checkSocialPlatform = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    };

    const userPlatform = await prismadb.SocialPlatforms.findUnique({
        where: {
            userId: userId
        }
    });

    let socials: string[] = [];

    if (!userPlatform || userPlatform.Facebook) {
        socials.push('Facebook');
    } 
    
    if (!userPlatform || userPlatform.Instagram) {
        socials.push("Instagram");
    } 
    
    if (!userPlatform || userPlatform.Tiktok) {
        socials.push("Tiktok");
    } 
    
    if (!userPlatform || userPlatform.LinkedIn) {
        socials.push("LinkedIn");
    } 
    
    if (!userPlatform || userPlatform.Youtube) {
        socials.push("Youtube");
    } 
    
    return socials
};
