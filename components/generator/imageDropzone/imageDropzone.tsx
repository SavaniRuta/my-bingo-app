"use client";
import React from "react";
import { ImagePlus, Images } from "lucide-react";
import { Text } from "@/components/global/text/text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ImageDropzoneProps {
  title?: string;
  description?: string;
  className?: string;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-5 rounded-10 border-2 border-dashed p-6 transition-all",
        "bg-accent border-border sm:flex-nowrap sm:justify-start flex-wrap justify-center",
        "hover:opacity-80 cursor-pointer",
        className,
      )}
    >
      <input type="file" accept="image/*" className="hidden" />

      <div className="bg-background p-2 rounded-14 shadow-xs">
        <ImagePlus className="size-6" />
      </div>

      <div className="text-center sm:text-left">
        <Text variant="sm" weight="semibold" color="card">
          {title}
        </Text>

        <Text variant="xs" color="muted">
          {description}
        </Text>
      </div>

      <Button
        variant="outline"
      >
        <Images />
        Gallery
      </Button>
    </div>
  );
};
