/*
  Warnings:

  - Added the required column `unite` to the `itemDevis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."itemDevis" ADD COLUMN     "unite" TEXT NOT NULL;
