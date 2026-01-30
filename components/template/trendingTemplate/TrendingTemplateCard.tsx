import { Text } from "@/components/global/text/text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_URLS } from "@/utils/const";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TrendingTemplateCardProps = {
  category: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  href: string;
};

export default function TrendingTemplateCard({
  category,
  title,
  description,
  icon,
  image,
  href,
}: TrendingTemplateCardProps) {
  return (
    <div className="p-6 flex gap-4 lg:gap-2.5 bg-gray-50 border border-gray-200 overflow-hidden transition-all hover:bg-gray-100 flex-col lg:flex-row rounded-xl relative">
      <div className="max-w-70 w-full relative z-10">
        <div className="mb-2 flex gap-2.5 items-center">
          <Image src={icon} alt="Bingo icon" width={20} height={20} />
          <Text
            as="span"
            variant="sm"
            color="gray-400"
            weight="semibold"
            className="block"
          >
            {category}
          </Text>
        </div>

        <Link href={href} className="lg:mb-2 block">
          <Text as="h3" variant="lg" color="gray-800" weight="semibold">
            {title}
          </Text>
        </Link>
        <Text
          variant="base"
          color="gray-600"
          className="mb-6 hidden lg:-webkit-inline-box lg:line-clamp-3"
        >
          {description}
        </Text>

        <Link
          href={SITE_URLS.template}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "text-gray-700 hidden lg:inline-flex",
          )}
        >
          <Pencil /> Edit & print
        </Link>
      </div>

      <div className="rounded-t-md flex-1 overflow-hidden -mb-28 lg:-mb-48">
        <Image
          src={image}
          alt={title}
          width={257}
          height={313}
          className="rounded-t-md w-full transition-transform hover:scale-105 object-top object-cover"
        />
      </div>

      <Link
        href={SITE_URLS.template}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "text-gray-700 lg:hidden inline-flex absolute bottom-3 inset-x-9",
        )}
      >
        <Pencil /> Edit & print
      </Link>
    </div>
  );
}
