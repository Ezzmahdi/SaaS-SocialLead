/*
  Warnings:

  - You are about to drop the column `key` on the `SocialPlatforms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `SocialPlatforms` DROP COLUMN `key`,
    ADD COLUMN `LinkedInToken` VARCHAR(191) NULL;
