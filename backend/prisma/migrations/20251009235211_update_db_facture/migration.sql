/*
  Warnings:

  - Added the required column `unite` to the `itemsFactures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."itemsFactures" ADD COLUMN     "unite" TEXT NOT NULL;
