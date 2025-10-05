/*
  Warnings:

  - You are about to alter the column `phone` on the `client` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `VarChar(10)`.
  - Added the required column `codeClient` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."client" ADD COLUMN     "codeClient" VARCHAR(10) NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(10);
