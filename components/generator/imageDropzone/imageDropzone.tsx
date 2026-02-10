"use client";
import React, { useRef, useState } from "react";
import { Delete, ImagePlus, Images, Replace } from "lucide-react";
import { Text } from "@/components/global/text/text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GalleryDialog } from "../galleryDialog/galleryDialog";

interface ImageDropzoneProps {
  title?: string;
  description?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "primary";
  uploaded?: boolean;
  showGallery?: boolean;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  title,
  description,
  className,
  orientation = "horizontal",
  variant = "default",
  uploaded = false,
  showGallery = true,
}) => {
  const isVertical = orientation === "vertical";
  const isPrimary = variant === "primary";

  const [openGallery, setOpenGallery] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // console.log("Selected file", file);
  };

  return (
    <>
      <label
        className={cn(
          "group relative rounded-10 border-2 border-dashed transition-all cursor-pointer hover:opacity-80 justify-between",
          isVertical
            ? "flex flex-col items-center text-center gap-4 p-6"
            : "flex items-center gap-5 p-6 flex-wrap sm:flex-nowrap sm:justify-between justify-center",
          isPrimary
            ? "bg-primary-foreground border-primary/40 text-primary"
            : "bg-accent border-border",
          uploaded && "border-none p-0",
          className,
        )}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 z-10 cursor-pointer opacity-0"
        />

        {!uploaded && (
          <>
            <div
              className={cn(
                "p-2 rounded-14 shadow-xs",
                isPrimary ? "bg-background/80" : "bg-background",
              )}
            >
              <ImagePlus className="size-6.5" />
            </div>

            <div
              className={cn(
                isVertical ? "text-center" : "lg:text-left text-center",
              )}
            >
              {title && (
                <Text
                  variant="sm"
                  weight="semibold"
                  color={isPrimary ? "primary" : "card"}
                  className="mb-1.5"
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

            {showGallery && !uploaded && (
              <Button
                className="z-10"
                variant="outline"
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenGallery(true);
                }}
              >
                <Images />
                Gallery
              </Button>
            )}
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

            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-white/70 opacity-0 group-hover:opacity-100 transition-all z-20">
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
      </label>

      {showGallery && (
        <GalleryDialog open={openGallery} onOpenChange={setOpenGallery} />
      )}
    </>
  );
};
