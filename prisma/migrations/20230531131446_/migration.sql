/*
  Warnings:

  - The `uuid` column on the `prisma_humans` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "prisma_humans_uuid_key";

-- AlterTable
ALTER TABLE "prisma_humans" DROP COLUMN "uuid",
ADD COLUMN     "uuid" UUID NOT NULL DEFAULT gen_random_uuid();
