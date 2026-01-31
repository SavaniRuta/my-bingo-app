"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type Variant =
  | "default"
  | "box"
  | "fancy-group"
  | "fancy-item"
  | "fancy-item-vertical"
  | "image"
  | "icon"

type Weight = "regular" | "medium";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

type RadioGroupItemProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> & {
  label?: string;
  description?: string;
  weight?: Weight;
  variant?: Variant;
  icon?: React.ReactNode;
  image?: string | StaticImageData;
};

function RadioGroupItem({
  className,
  label,
  description,
  weight = "regular",
  variant = "default",
  icon,
  image,
  ...props
}: RadioGroupItemProps) {
  const variants = {
    isDefault: variant === "default",
    isBox: variant === "box",
    isFancy: variant === "fancy-group",
    isFancyItem: variant === "fancy-item",
    isFancyItemVertical: variant === "fancy-item-vertical",
    isImage: variant === "image",
    isIconType: variant === "icon",
  };

  const {
    isDefault,
    isBox,
    isFancy,
    isFancyItem,
    isFancyItemVertical,
    isImage,
    isIconType,
  } = variants;

  // Container classes based on variant
  const containerClasses = cn(
    "group flex cursor-pointer transition-colors rounded-10",

    // Common styles
    "gap-3 items-start",

    // Weight
    weight === "regular" && "font-normal",
    weight === "medium" && "font-medium",

    // Variant specific container styles
    isBox &&
      "border border-input p-3 has-[button[data-state=checked]]:border-primary has-[button[data-state=checked]]:bg-primary/5",

    (isFancy || isFancyItem || isFancyItemVertical) &&
      "rounded-10 border border-border bg-background p-4 has-[button[data-state=checked]]:border-border has-[button[data-state=checked]]:bg-accent shadow-xs hover:opacity-80",

    isFancyItem && "py-3 px-4 items-center gap-4",
    isFancyItemVertical && "flex-col items-center justify-center gap-2",

    isImage &&
      "flex-col items-center justify-center p-0 gap-0 w-48 h-48 border border-input has-[button[data-state=checked]]:ring-ring/50 has-[button[data-state=checked]]:ring-[3px] has-[button[data-state=checked]]:ring-offset-0 overflow-hidden relative hover:ring-border hover:ring-[3px] hover:border-transparent hover:ring-offset-3 transition-all focus:ring-offset-0 focus:ring-ring/50 focus:ring-[3px]",

    isIconType &&
      "px-9 py-1 rounded has-[button[data-state=checked]]:bg-accent/80",

    className,
  );

  // Radio button classes based on variant
  const radioClasses = cn(
    // Base styles
    "size-4 shrink-0 rounded-full border border-input text-primary transition outline-none",
    "aspect-square",
    "data-[state=unchecked]:shadow-xs",
    "transition-[color,box-shadow]",

    // Focus and states
    "focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "dark:aria-invalid:ring-destructive/40 dark:bg-input/30",
    "disabled:cursor-not-allowed disabled:opacity-50",

    // Checked state
    "data-[state=checked]:border-primary",

    // Variant specific radio styles
    isBox && "mt-1 data-[state=checked]:bg-primary",

    // Hide radio for fancy variants (show custom indicator)
    (isFancy || isFancyItem || isFancyItemVertical || isIconType) &&
      "sr-only absolute",
  );

  // Indicator classes (checkmark circle)
  const indicatorClasses = cn(
    "relative flex items-center justify-center",
    (isFancy || isFancyItem || isFancyItemVertical || isImage || isIconType) &&
      "absolute inset-0",
  );

  // Icon classes
  const iconClasses = cn(
    "flex items-center justify-center text-muted-foreground",
    "group-has-[button[data-state=checked]]:text-card-foreground",
  );

  // Label classes
  const labelClasses = cn(
    "text-sm text-foreground",
    (isFancy || isFancyItem || isFancyItemVertical) &&
      "text-card-foreground group-has-[button[data-state=checked]]:text-accent-foreground",
  );

  // Description classes
  const descriptionClasses = cn(
    "text-sm text-muted-foreground",
    (isFancy || isFancyItem || isFancyItemVertical) &&
      "text-muted-foreground group-has-[button[data-state=checked]]:text-accent-foreground",
  );

  const hasContent = Boolean(label || description || icon);
  const showIcon =
    (isFancy || isFancyItem || isFancyItemVertical || isIconType) && icon;
  const showLabel =
    label && (isDefault || isBox || isFancyItem || isFancyItemVertical);
  const showDescription =
    description && (isDefault || isBox || isFancyItem || isFancyItemVertical);
  const showFancyLabel = isFancy && label;

  return (
    <label className={containerClasses}>
      <RadioGroupPrimitive.Item className={radioClasses} {...props}>
        <RadioGroupPrimitive.Indicator className={indicatorClasses}>
          {isImage ? (
            <div className="absolute bottom-2 left-auto flex items-center justify-center size-8 rounded-10 bg-primary-foreground border border-primary-border z-10">
              <Check className="size-4 text-primary" />
            </div>
          ) : (
            <CircleIcon
              className={cn(
                "size-2 fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                isBox && "fill-white",
              )}
            />
          )}
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      {image && isImage && (
        <div className="absolute inset-0 w-full h-full rounded-[10px] overflow-hidden">
          <Image
            src={image}
            alt={label || "image"}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Icon content for fancy variants */}
      {showIcon && (
        <div
          className={cn("flex flex-col justify-center gap-1.5 items-center")}
        >
          <div className={iconClasses}>{icon}</div>
          {isFancy && showFancyLabel && (
            <span className={labelClasses}>{label}</span>
          )}
        </div>
      )}

      {/* Text content for default and box variants */}
      {(showLabel || showDescription) && (
        <div
          className={cn("flex flex-col gap-1", {
            "items-center": isFancyItemVertical,
          })}
        >
          {showLabel && <span className={labelClasses}>{label}</span>}
          {showDescription && (
            <span className={descriptionClasses}>{description}</span>
          )}
        </div>
      )}
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
