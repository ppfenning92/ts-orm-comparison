-- CreateEnum
CREATE TYPE "prisma_color_enum" AS ENUM ('green', 'blue', 'red', 'black', 'hotpink');

-- CreateTable
CREATE TABLE "prisma_humans" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "quote" TEXT NOT NULL,
    "color" "prisma_color_enum" NOT NULL,
    "ip" VARCHAR(15) NOT NULL,
    "age" INTEGER NOT NULL,
    "dob" DATE NOT NULL,

    CONSTRAINT "prisma_humans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prisma_humans_uuid_key" ON "prisma_humans"("uuid");
