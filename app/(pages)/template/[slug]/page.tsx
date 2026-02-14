"use client";

import { useState } from "react";
import { Text } from "@/components/global/text/text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { SITE_URLS } from "@/utils/const";
import {
  ChevronRight,
  PencilLine,
  PlusIcon,
  Printer,
  StarIcon,
  Truck,
  Users,
} from "lucide-react";
import SpotifyIcon from "@/public/images/spotify-icon.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TemplateGallery from "@/components/template/templateGallery/templateGallery";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  {
    label: "Templates",
    href: SITE_URLS.template,
  },
  {
    label: "Nature",
    href: SITE_URLS.template,
  },
  {
    label: "Outdoors",
    href: SITE_URLS.template,
  },
];

const items = [
  { id: 1, label: "Halloween" },
  { id: 2, label: "Ghost" },
  { id: 3, label: "Pumpkin" },
  { id: 4, label: "Werewolf" },
  { id: 5, label: "Halloween" },
  { id: 6, label: "Ghost" },
  { id: 7, label: "Pumpkin" },
  { id: 8, label: "Werewolf" },
  { id: 9, label: "Halloween" },
  { id: 10, label: "Ghost" },
  { id: 11, label: "Pumpkin" },
  { id: 12, label: "Werewolf" },
  { id: 13, label: "Halloween" },
  { id: 14, label: "Ghost" },
  { id: 15, label: "Pumpkin" },
  { id: 16, label: "Werewolf" },
];

const features = [
  {
    icon: PencilLine,
    title: "Fully editable:",
    description:
      "Grid size, free space, branding, human bingo, footer text & more",
  },
  {
    icon: Printer,
    title: "Print at home:",
    description: "Receive a randomized PDF with unique cards to print at home",
  },
  {
    icon: Truck,
    title: "Home delivery:",
    description: "We provide premium card printing and delivery.",
  },
  {
    icon: Users,
    title: "Play online:",
    description: "Share a link, play virtually with up to 2,000 friends",
  },
];

const tabItems = [
  {
    value: "edit-print",
    title: "Edit & print",
    description: "Edit, print at home, choose home delivery, or play online.",
    icon: PencilLine,
    actionLabel: "Edit & print",
  },
  {
    value: "home-delivery",
    title: "Home delivery",
    description: "Bingo cards delivered without any modifications.",
    icon: Truck,
    actionLabel: "Home delivery",
  },
];

const templateGalleryImages = [
  "/images/test-template-card.jpg.webp",
  "/images/test-template-card.jpg.webp",
  "/images/test-template-card.jpg.webp",
];

export default function TemplatePage() {
  const [activeTab, setActiveTab] = useState(tabItems[0].value);

  return (
    <>
      <div className="template-container">
        <Breadcrumb className="mt-2 mb-4">
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <div key={item.label} className="flex items-center space-x-1.5">
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>

                {index < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight />
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="lg:sticky lg:top-24">
              <TemplateGallery images={templateGalleryImages} />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="space-y-7 mb-8">
              <div>
                <Text
                  as="h1"
                  variant="5xl"
                  weight="bold"
                  color="title"
                  className="mb-3 font-recoleta"
                >
                  Spring bingo
                </Text>

                <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn("px-1.5 py-1 rounded-4xl")}
                  >
                    <Image
                      src={SpotifyIcon}
                      alt="Spotify"
                      width={20}
                      height={20}
                    />
                    Play with Spotify
                  </Button>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="size-5 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="size-5 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="size-5 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="size-5 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="size-5 text-yellow-400" />
                    </div>
                    <Text
                      as="span"
                      variant="sm"
                      weight="medium"
                      color="gray-500"
                    >
                      (23 reviews)
                    </Text>
                  </div>
                </div>
                <Text as="p" variant="base" color="gray-600">
                  Get your bingo players excited about spring weather with this
                  customizable bingo card template. Add or remove words and
                  images to make it unique every time. Perfect for nature-themed
                  games!
                </Text>
              </div>

              <div className="space-y-4">
                <Text as="h2" variant="lg" weight="semibold" color="gray-900">
                  Choose an option
                </Text>
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="gap-4"
                >
                  <TabsList className="flex justify-start gap-x-2 overflow-visible">
                    {tabItems.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.value;

                      return (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          variant="tab-border"
                          className={cn(
                            "h-auto items-start justify-start text-left p-3 rounded-lg whitespace-normal",
                            "border border-gray-200",
                            isActive && "border-primary-100",
                          )}
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5">
                              <Icon
                                className={cn(
                                  "size-5 text-gray-400",
                                  isActive && "text-primary-600",
                                )}
                              />

                              <Text
                                weight="semibold"
                                variant="base"
                                className={cn(
                                  "text-gray-700",
                                  isActive && "text-primary-800",
                                )}
                              >
                                {tab.title}
                              </Text>
                            </div>

                            <Text
                              as="p"
                              variant="sm"
                              className={cn(
                                "text-gray-600",
                                isActive && "text-primary-800",
                              )}
                            >
                              {tab.description}
                            </Text>
                          </div>
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>

                  {tabItems.map((tab) => {
                    return (
                      <TabsContent key={tab.value} value={tab.value}>
                        <Button className="w-full" size="xl">
                          {tab?.icon && <tab.icon className="size-5" />}
                          {tab?.actionLabel}
                        </Button>
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </div>

              <Separator className="my-7" />

              <div>
                <Text
                  as="h2"
                  variant="lg"
                  weight="semibold"
                  color="gray-900"
                  className="mb-4"
                >
                  Why choose us
                </Text>
                <div className="space-y-2">
                  {features.map((feature, index) => {
                    return (
                      <div
                        key={index}
                        className="flex gap-1.5 xl:gap-0 xl:items-center flex-col xl:flex-row"
                      >
                        <div className="flex items-center text-sm font-medium text-gray-700 gap-1.5">
                          {feature?.icon && <feature.icon className="size-5" />}
                          {feature?.title}
                        </div>

                        <Text
                          as="p"
                          variant="sm"
                          weight="medium"
                          color="gray-600"
                          className="ml-1"
                        >
                          {feature?.description}
                        </Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Text as="h2" variant="lg" weight="semibold" color="gray-900">
                    Items in this card
                  </Text>
                  <Badge variant="secondary" className="py-1.5">
                    33
                  </Badge>
                </div>
                <ul className="flex items-center gap-2 flex-wrap">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="py-2 px-3 capitalize bg-gray-50 font-medium rounded-lg text-sm"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
                <Button variant="outline">
                  <PlusIcon className="text-muted-foreground" />
                  26 more words
                </Button>
              </div>

              <div className="space-y-5">
                <Text as="h2" variant="2xl" weight="semibold" color="title">
                  More about this bingo card
                </Text>
                <Text as="p" variant="lg" color="gray-800">
                  The allure of bingo is universal, with its various adaptations
                  appealing to a wide audience. The 1-80 bingo card game offers
                  a richer experience, encompassing a broader spectrum of
                  numbers and patterns. If you're up for an extended match
                  packed with more twists and turns, here's your guide to
                  mastering the 1-80 bingo universe.
                </Text>
                <Text as="h2" variant="xl" weight="semibold" color="title">
                  Decoding the Dense Deck: Anatomy of the 1-80 Bingo Card
                </Text>
                <Text as="p" variant="lg" color="gray-800">
                  The 1-80 bingo card unveils a detailed 4x4 grid, offering a
                  perfect blend of challenge and excitement:
                </Text>
                <ul className="space-y-5">
                  <li className="list-disc list-inside">
                    <b>First Column</b> is reserved for numbers 1-20.
                  </li>
                  <li className="list-disc list-inside">
                    <b>Second Column</b> spans numbers 21-40.
                  </li>
                  <li className="list-disc list-inside">
                    <b>Third Column</b> captures the range of 41-60.
                  </li>
                  <li className="list-disc list-inside">
                    <b>Fourth Column</b> concludes with numbers 61-80.
                  </li>
                </ul>
                <Text as="p" variant="lg" color="gray-800">
                  This expansive layout promises a game that's longer, letting
                  players immerse themselves in the suspenseful world of bingo.s
                </Text>
              </div>

              <div>
                <Text as="h2" variant="2xl" weight="semibold" color="title">
                  Reviews
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
