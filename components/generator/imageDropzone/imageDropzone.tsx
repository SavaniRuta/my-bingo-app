"use client";
import React from "react";
import { Delete, ImagePlus, Images, Replace } from "lucide-react";
import { Text } from "@/components/global/text/text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ImageDropzoneProps {
  title?: string;
  description?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "primary";
  uploaded?: boolean;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  title,
  description,
  className,
  orientation = "horizontal",
  variant = "default",
  uploaded = false,
}) => {
  const isVertical = orientation === "vertical";
  const isPrimary = variant === "primary";
  const isUploaded = uploaded === true;

  return (
    <div
      className={cn(
        "group relative rounded-10 border-2 border-dashed transition-all cursor-pointer hover:opacity-80",

        isVertical
          ? "flex flex-col items-center text-center gap-4 p-6"
          : "flex items-center gap-5 p-6 flex-wrap sm:flex-nowrap sm:justify-start justify-center",

        isPrimary
          ? "bg-primary-foreground border-primary/40 text-primary"
          : "bg-accent border-border",

        isUploaded ? "border-none p-0" : "",

        className,
      )}
    >
      {!uploaded && (
        <>
          <div
            className={cn(
              "p-2 rounded-14 shadow-xs",
              isPrimary ? "bg-background/80" : "bg-background",
            )}
          >
            <ImagePlus className="size-6" />
          </div>

          <div className={cn(isVertical ? "text-center" : "text-left")}>
            {title && (
              <Text
                variant="sm"
                weight="semibold"
                color={isPrimary ? "primary" : "card"}
              >
                {title}
              </Text>
            )}

            {description && (
              <Text variant="xs" color={isPrimary ? "primary" : "muted"}>
                {description}
              </Text>
            )}
          </div>

          <Button variant="outline">
            <Images />
            Gallery
          </Button>
        </>
      )}

      {uploaded && (
        <div className="relative h-52 w-full overflow-hidden rounded-10">
          <Image
            src="/images/sharing-smater-changelog.png"
            alt="Uploaded"
            className="w-full object-cover aspect-video"
            width={475}
            height={300}
          />

          <div
            className={cn(
              "flex items-center justify-center gap-3 hover:opacity-100 absolute opacity-0 inset-0 hover:bg-white/70 transition-all ease-in-out",
            )}
          >
            <Button variant="outline">
              <Replace />
              Replace
            </Button>

            <Button variant="destructive">
              <Delete />
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
