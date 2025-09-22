-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP NOT NULL,
    "verifCode" VARCHAR(6) NOT NULL,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "lastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "passUpdateAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."session" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" VARCHAR(255),
    "expiresAt" TIMESTAMP NOT NULL,
    "refreshToken" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- AddForeignKey
ALTER TABLE "public"."session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
