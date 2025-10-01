-- CreateTable
CREATE TABLE "public"."client" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "logo" VARCHAR(255) NOT NULL DEFAULT 'No_Logo_Link',

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."devis" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "numDevis" VARCHAR(255) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "description" VARCHAR(1000) NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."facture" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "numFacture" VARCHAR(255) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "description" VARCHAR(1000) NOT NULL,
    "etat" VARCHAR(255) NOT NULL DEFAULT 'En Attente',
    "numDevis" VARCHAR(255) NOT NULL DEFAULT 'NA',
    "clientId" TEXT NOT NULL,

    CONSTRAINT "facture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."itemsFactures" (
    "itemId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitePrice" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "factureId" TEXT NOT NULL,

    CONSTRAINT "itemsFactures_pkey" PRIMARY KEY ("itemId")
);

-- CreateTable
CREATE TABLE "public"."itemDevis" (
    "itemId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitePrice" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "devisId" TEXT NOT NULL,

    CONSTRAINT "itemDevis_pkey" PRIMARY KEY ("itemId")
);

-- CreateTable
CREATE TABLE "public"."bonDeLivraison" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "numBon" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "etat" VARCHAR(255) NOT NULL DEFAULT 'En Attente',
    "clientId" TEXT NOT NULL,

    CONSTRAINT "bonDeLivraison_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."itemBl" (
    "itemId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "BlId" TEXT NOT NULL,

    CONSTRAINT "itemBl_pkey" PRIMARY KEY ("itemId")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_phone_key" ON "public"."client"("phone");

-- AddForeignKey
ALTER TABLE "public"."devis" ADD CONSTRAINT "devis_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."facture" ADD CONSTRAINT "facture_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."itemsFactures" ADD CONSTRAINT "itemsFactures_factureId_fkey" FOREIGN KEY ("factureId") REFERENCES "public"."facture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."itemDevis" ADD CONSTRAINT "itemDevis_devisId_fkey" FOREIGN KEY ("devisId") REFERENCES "public"."devis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bonDeLivraison" ADD CONSTRAINT "bonDeLivraison_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."itemBl" ADD CONSTRAINT "itemBl_BlId_fkey" FOREIGN KEY ("BlId") REFERENCES "public"."bonDeLivraison"("id") ON DELETE CASCADE ON UPDATE CASCADE;
