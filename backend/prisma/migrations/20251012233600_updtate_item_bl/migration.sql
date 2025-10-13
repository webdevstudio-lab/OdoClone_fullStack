/*
  Warnings:

  - You are about to drop the `itemBl` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."itemBl" DROP CONSTRAINT "itemBl_BlId_fkey";

-- DropTable
DROP TABLE "public"."itemBl";

-- CreateTable
CREATE TABLE "public"."itemsBl" (
    "itemId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "BlId" TEXT NOT NULL,

    CONSTRAINT "itemsBl_pkey" PRIMARY KEY ("itemId")
);

-- AddForeignKey
ALTER TABLE "public"."itemsBl" ADD CONSTRAINT "itemsBl_BlId_fkey" FOREIGN KEY ("BlId") REFERENCES "public"."bonDeLivraison"("id") ON DELETE CASCADE ON UPDATE CASCADE;
