"use client";
import { CardSlider } from "@/components/dashboard/cardSlider/cardSlider";
import { NewTemplateCard } from "@/components/dashboard/templateCard/templateCard";
import { DUMMY_TEMPLATE_CARDS } from "@/utils/dummy-data";
import { SITE_URLS } from "@/utils/const";
import { Pencil } from "lucide-react";
import Image from "next/image";
import createBingoCard from "@/public/images/create-bingo-card.png";
import { DashboardHeader } from "@/components/dashboard/header/dashboardHeader";
import CreateCardButton from "@/components/global/createCardButton/createCardButton";

export default function EmptyDashboard() {
  return (
    <>
      <DashboardHeader pathName={SITE_URLS.empty_dashboard}>
        <div className="space-y-4 lg:space-y-12">
          <div className="shadow-xs rounded-3xl border border-border bg-card py-8 flex flex-col gap-4 text-center">
            <div>
              <Image
                src={createBingoCard}
                alt="Create bingo card"
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold">
              Let's create your first bingo card!
            </h2>

            <CreateCardButton
              href={SITE_URLS.dashboard}
              className="w-max mx-auto"
            >
              <Pencil />
              Create Card
            </CreateCardButton>
          </div>

          <CardSlider
            title="New templates"
            viewAllHref={SITE_URLS.my_cards}
            items={DUMMY_TEMPLATE_CARDS}
          >
            {(card) => (
              <NewTemplateCard
                image={card.image}
                title={card.title}
                id={card.id}
              />
            )}
          </CardSlider>
        </div>
      </DashboardHeader>
    </>
  );
}
