import { Button } from "@/components/ui/button";
import { Circle, EllipsisVertical, Play } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";

type PlayCardProps = {
  image: StaticImageData;
  title: string;
  status: string;
};

export function GameCard({ image, title, status }: PlayCardProps) {
  return (
    <>
      {/* Card */}
      <Link
        href="#"
        className="flex gap-4 p-3 border border-border rounded-xl bg-card shadow-sm transition-all flex-wrap min-w-65"
      >
        <div className="lg:w-26 lg:shrink-0">
          <Image
            src={image}
            alt={title}
            className="rounded-lg h-full w-full object-cover"
            priority={false}
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="space-y-1.5 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <Badge
                  variant={status === "Active" ? "secondary" : "outline"}
                  className={
                    status === "Expiring"
                      ? "bg-warning border border-warning-border text-warning-foreground"
                      : status === "Paused"
                        ? "bg-accent border border-light text-accent-foreground"
                        : undefined
                  }
                >
                  {status}
                </Badge>
              </div>
              <Button variant="outline" size="icon-sm">
                <EllipsisVertical />
              </Button>
            </div>
            <h3 className="font-medium text-card-foreground">{title}</h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">14 calls</p>
              <Circle className="text-muted-foreground w-1.25 h-1.25" />
              <p className="text-sm text-muted-foreground">43 players</p>
            </div>
          </div>

          <Button variant="outline" size="sm">
            <Play />
            Join
          </Button>
        </div>
      </Link>
    </>
  );
}
