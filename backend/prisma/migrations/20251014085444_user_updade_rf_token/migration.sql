/*
  Warnings:

  - You are about to drop the column `isForgetyPw` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "isForgetyPw",
ADD COLUMN     "refresToken" VARCHAR(200) NOT NULL DEFAULT 'value';
