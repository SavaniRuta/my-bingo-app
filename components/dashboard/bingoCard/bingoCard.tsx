import { Button } from "@/components/ui/button";
import {
  Copy,
  EllipsisVertical,
  Globe,
  Megaphone,
  PencilLine,
  Printer,
  Share,
  Trash,
} from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { SITE_URLS } from "@/utils/const";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type PlayCardProps = {
  image: StaticImageData;
  title: string;
  variant?: string;
  id: string;
};

type DropdownItem = {
  label?: string;
  href?: (id: string) => string;
  icon?: React.ElementType;
  variant?: "default" | "destructive";
  separator?: boolean;
};

export const CARD_DROPDOWN_ITEMS: DropdownItem[] = [
  {
    label: "Edit Card",
    icon: PencilLine,
    href: (id) => `${SITE_URLS.dashboard}/${id}`,
  },
  {
    label: "Duplicate",
    icon: Copy,
    href: (id) => `${SITE_URLS.dashboard}/${id}`,
  },
  { separator: true },
  {
    label: "Share",
    icon: Share,
    href: (id) => `${SITE_URLS.dashboard}/${id}`,
  },
  { separator: true },
  {
    label: "Print cards",
    icon: Printer,
    href: (id) => `${SITE_URLS.dashboard}/${id}`,
  },
  {
    label: "Make Calls",
    icon: Megaphone,
    href: (id) => `${SITE_URLS.dashboard}/${id}`,
  },
  { separator: true },
  {
    label: "Delete",
    icon: Trash,
    href: (id) => `${SITE_URLS.dashboard}/${id}`,
    variant: "destructive",
  },
];

export default function PlayCard({ image, title, variant, id }: PlayCardProps) {
  return (
    <div className="flex flex-col gap-3 snap-start min-w-65 lg:min-w-0">
      <Link
        href={SITE_URLS.my_cards + `/${id}`}
        className="overflow-hidden h-64.5 flex flex-col gap-3 p-3 pb-0 border border-border rounded-xl bg-card shadow-sm transition-all"
      >
        <div className="flex justify-between">
          <Button
            variant="outline"
            size="icon-sm"
            className="text-muted-foreground"
          >
            <Share />
          </Button>

          <div className="flex gap-1.5">
            <Button
              variant="outline"
              size="icon-sm"
              className="text-muted-foreground"
            >
              <Megaphone />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="text-muted-foreground"
            >
              <Globe />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="text-muted-foreground"
            >
              <Printer />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="text-muted-foreground"
                >
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2" align="end">
                {CARD_DROPDOWN_ITEMS.map((item, index) => {
                  if (item.separator) {
                    return <DropdownMenuSeparator key={`sep-${index}`} />;
                  }

                  const Icon = item.icon!;
                  const href = item.href!(id);

                  return (
                    <DropdownMenuItem
                      key={item.label}
                      asChild
                      variant={item.variant}
                      className={cn(
                        item.variant === "destructive" && "text-destructive"
                      )}
                    >
                      <Link href={href} className="flex items-center gap-2">
                        <Icon className="size-4" />
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="rounded-lg lg:max-w-55 max-w-78 mx-auto">
          <Image
            src={image}
            alt={title}
            className="rounded-lg h-full w-full object-cover"
            priority={false}
          />
        </div>
      </Link>

      {/* Footer / Title section */}
      {variant === "my-cards" ? (
        <div className="flex items-center gap-3">
          <Checkbox
            id="terms-checkbox-invalid"
            name="terms-checkbox-invalid"
            aria-invalid
          />
          <Link
            href={SITE_URLS.my_cards + `/${id}`}
            title={title}
            className="font-medium text-card-foreground"
          >
            {title}
          </Link>
        </div>
      ) : (
        <Link
          href={SITE_URLS.my_cards + `/${id}`}
          title={title}
          className="font-medium text-card-foreground"
        >
          {title}
        </Link>
      )}
    </div>
  );
}
