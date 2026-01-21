"use client";
import { CardSlider } from "@/components/dashboard/cardSlider/cardSlider";
import { ScreenHeader } from "@/components/dashboard/header/screenHeader";
import { NewTemplateCard } from "@/components/dashboard/newTemplateCard/newTemplateCard";
import { DUMMY_TEMPLATE_CARDS } from "@/utils/dummy-data";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Image from "next/image";
import createBingoCard from "@/public/images/create-bingo-card.png";

export default function EmptyDashboard() {
  return (
    <>
      <ScreenHeader
        title="Dashboard"
        description="An overview of your recent account activity."
      />

      {/* Bottom content */}
      <div className="py-8">
        <div className="space-y-4 lg:space-y-12">
          <div>
            <div className="dashboard-container">
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
                <Link
                  href={SITE_URLS.dashboard.dashboard}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-max mx-auto",
                  )}
                >
                  <Pencil />
                  Create card
                </Link>
              </div>
            </div>
          </div>

          <CardSlider
            title="New templates"
            viewAllHref="#"
            items={DUMMY_TEMPLATE_CARDS}
          >
            {(card) => (
              <NewTemplateCard image={card.image} title={card.title} />
            )}
          </CardSlider>
        </div>
      </div>
    </>
  );
}
