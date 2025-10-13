/*
  Warnings:

  - You are about to drop the column `BlId` on the `itemsBl` table. All the data in the column will be lost.
  - Added the required column `BonLivId` to the `itemsBl` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."itemsBl" DROP CONSTRAINT "itemsBl_BlId_fkey";

-- AlterTable
ALTER TABLE "public"."itemsBl" DROP COLUMN "BlId",
ADD COLUMN     "BonLivId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."itemsBl" ADD CONSTRAINT "itemsBl_BonLivId_fkey" FOREIGN KEY ("BonLivId") REFERENCES "public"."bonDeLivraison"("id") ON DELETE CASCADE ON UPDATE CASCADE;
