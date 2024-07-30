import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/prismadb";
import { date } from "zod";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
    const { userId } = auth()

    if (!userId) {
        return false;
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
        where: {
            userId,
        },
        select: {
            stripeSubscriptionId: true,
            stripeCurrentPeriodEnd: true,
            stripeCostumerId: true,
            stripePricedId: true,

        }
    });

    if (!userSubscription) {
        return false;
    }

    const isvalid =
        userSubscription.stripePricedId &&
        userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

    return !!isvalid;
}