"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

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
  weight?: "regular" | "medium";
  variant?:
    | "default"
    | "box"
    | "fancy-group"
    | "fancy-item"
    | "fancy-item-vertical"
    | "image"
    | "icon"
    | "icon-group";
  icon?: React.ReactNode;
  // iconSize?: "sm" | "md" | "lg";
};

function RadioGroupItem({
  className,
  label,
  description,
  weight = "regular",
  variant = "default",
  icon,
  // iconSize = "md",
  ...props
}: RadioGroupItemProps) {
  const isBox = variant === "box";
  const isFancy = variant === "fancy-group";
  const isFancyItem = variant === "fancy-item";

  return (
    <label
      className={cn(
        "group flex cursor-pointer items-start gap-3 rounded-10 transition-colors",
        weight === "regular" && "font-normal",
        weight === "medium" && "font-medium",

        isBox &&
          "border border-input p-3 has-[button[data-state=checked]]:border-primary has-[button[data-state=checked]]:bg-primary/5",

        isFancy ||
          (isFancyItem &&
            "items-start rounded-10 border border-border bg-background p-4 has-[button[data-state=checked]]:border-border has-[button[data-state=checked]]:bg-accent shadow-xs"),

        isFancyItem && "py-3 px-4 shadow-xs items-center gap-4",

        className,
      )}
    >
      <RadioGroupPrimitive.Item
        className={cn(
          "mt-1 size-4 shrink-0 rounded-full border border-input",
          "text-primary transition",
          "focus-visible:border-primary focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border data-[state=unchecked]:shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:border-primary",
          isBox && "data-[state=checked]:bg-primary",
          isFancy || (isFancyItem && "sr-only absolute"),
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
          <CircleIcon
            className={cn(
              "size-2 fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              isBox && "fill-white",
            )}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      {isFancy ||
        (isFancyItem && icon && (
          <div className="flex flex-col justify-center gap-1.5 items-center">
            <div
              className={cn(
                "flex items-center justify-center text-muted-foreground group-has-[button[data-state=checked]]:text-card-foreground",
                // iconSize === "sm" && "size-9",
                // iconSize === "md" && "size-10",
                // iconSize === "lg" && "size-12",
              )}
            >
              {icon}
            </div>

            {label && (
              <span
                className={cn(
                  "text-sm text-card-foreground group-has-[button[data-state=checked]]:text-accent-foreground",
                  isFancyItem && "hidden",
                )}
              >
                {label}
              </span>
            )}
          </div>
        ))}

      {(label || description) && (
        <div className={cn("flex flex-col gap-1", isFancy && "hidden")}>
          {label && (
            <span className="text-sm text-foreground group-has-[button[data-state=checked]]:text-accent-foreground">
              {label}
            </span>
          )}
          {description && (
            <span className="text-sm text-muted-foreground group-has-[button[data-state=checked]]:text-accent-foreground">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
