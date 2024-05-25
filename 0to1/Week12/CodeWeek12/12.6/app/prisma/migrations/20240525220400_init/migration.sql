-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "mesage" TEXT NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
