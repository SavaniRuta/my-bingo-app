"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/global/text/text";
import { Eye, Image, Type } from "lucide-react";
import { ImageDropzone } from "../imageDropzone/imageDropzone";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type CardTitleType = "text" | "image";

interface CardTitleProps {
  onChange?: (data: CardTitleData) => void;
  initialData?: CardTitleData;
}

export interface CardTitleData {
  type: CardTitleType;
  text: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  onChange,
  initialData,
}) => {
  const [type, setType] = useState<CardTitleType>(initialData?.type || "text");
  const [text, setText] = useState(initialData?.text || "");

  const handleTypeChange = (newType: string) => {
    const selectedType = newType as CardTitleType;
    setType(selectedType);
    onChange?.({
      type: selectedType,
      text,
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-1.5">
        <Text variant="sm" weight="medium">
          Title
        </Text>

        <div className="flex items-center gap-3">
          <RadioGroup
            value={type}
            onValueChange={handleTypeChange}
            className="flex border border-border bg-card p-0.5 rounded-md gap-0"
          >
            <RadioGroupItem
              variant="icon"
              value="text"
              id="type-text"
              className="px-2 py-1"
              icon={<Type className="size-4" />}
            />
            <RadioGroupItem
              variant="icon"
              value="image"
              id="type-image"
              className="px-2 py-1"
              icon={<Image className="size-4" />}
            />
          </RadioGroup>

          <Separator
            orientation="vertical"
            className="bg-border data-[orientation=vertical]:h-5.5 block"
          />

          <Button
            variant="ghost"
            size="icon-small"
            className="text-muted-foreground"
          >
            <Eye className="size-4" />
          </Button>
        </div>
      </div>

      <Input type="text" placeholder="Enter card title" className="mb-4" />

      {type === "image" && (
        <ImageDropzone
          title="Click to upload or drag and drop"
          description="Upload a JPG, PNG, or WebP (400x400px, max 5MB)"
        />
      )}
    </>
  );
};
