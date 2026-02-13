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
import { ChevronRight, StarIcon } from "lucide-react";
import SpotifyIcon from "@/public/images/spotify-icon.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TemplateGallery from "@/components/template/templateGallery/templateGallery";

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

export default function TemplatePage() {
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
              <TemplateGallery />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="space-y-7">
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

                <div className="flex items-center gap-2.5 mb-4">
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
            </div>
            <div className="space-y-7">
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

                <div className="flex items-center gap-2.5 mb-4">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
