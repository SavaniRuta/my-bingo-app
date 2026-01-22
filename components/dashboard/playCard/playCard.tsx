import { Button } from "@/components/ui/button";
import {
  EllipsisVertical,
  Globe,
  Megaphone,
  Printer,
  Share,
} from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Input } from "@/components/ui/input";

type PlayCardProps = {
  image: StaticImageData;
  title: string;
  variant?: string;
};

export default function PlayCard({ image, title, variant }: PlayCardProps) {
  return (
    <div className="flex flex-col gap-3 snap-start min-w-65 lg:min-w-0">
      <Link
        href="#"
        className="overflow-hidden h-64.5 flex flex-col gap-3 p-3 pb-0 border border-border rounded-xl bg-card shadow-sm transition-all"
      >
        
        <div className="flex justify-between">
          <Button
            variant="outline"
            size="icon-sm"
            className="text-muted-foreground"
          >
            <Share size={16} />
          </Button>

          <div className="flex gap-1.5">
            <Button
              variant="outline"
              size="icon-sm"
              className="text-muted-foreground"
            >
              <Megaphone size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="text-muted-foreground"
            >
              <Globe size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="text-muted-foreground"
            >
              <Printer size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="text-muted-foreground"
            >
              <EllipsisVertical size={16} />
            </Button>
          </div>
        </div>

        {/* Image */}
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
          <Input type="checkbox" className="w-auto h-auto" />
          <Link href="#" title={title} className="font-medium text-card-foreground">
            {title}
          </Link>
        </div>
      ) : (
        <Link href="#" title={title} className="font-medium text-card-foreground">
          {title}
        </Link>
      )}
    </div>
  );
}
