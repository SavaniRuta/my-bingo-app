"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list text-muted-foreground inline-flex w-full items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col relative overflow-x-auto remove-scroll flex justify-start pr-8 lg:gap-2",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  variant = "default",
  size,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  variant?: "default" | "tab-button" | "tab-border";
  size?: "default" | "medium" | "small";
}) {
  const isTabButton = variant === "tab-button";
  const isTabBorder = variant === "tab-border";

  const baseClasses =
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer rounded-10 text-sm disabled:opacity-50 hover:bg-accent";

  const defaultClasses =
    "text-muted-foreground/70 hover:text-muted-foreground dark:text-muted-foreground dark:hover:text-foreground px-3 lg:px-6 py-2 font-semibold data-[state=active]:text-primary";

  const tabButtonBaseClasses =
    "border border-border bg-background data-[state=active]:bg-primary-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-xs";

  const isTabBorderClasses =
    "py-1.5 px-2 text-foreground data-[state=active]:text-secondary-foreground rounded-sm data-[state=active]:bg-secondary w-full border border-transparent data-[state=active]:border-primary-border data-[state=active]:shadow-xs";

  const sizeClasses = isTabButton
    ? size === "medium"
      ? "h-9 px-3"
      : size === "small"
        ? "h-8 px-3"
        : "h-9 px-3"
    : "";

  const variantClasses = isTabButton
    ? tabButtonBaseClasses
    : isTabBorder
      ? isTabBorderClasses
      : defaultClasses;

  const trigger = (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      data-variant={variant}
      data-size={size}
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      {...props}
    />
  );

  if (isTabButton || isTabBorder) {
    return trigger;
  }

  return (
    <div className="py-1.5 border-transparent border-b-2 has-data-[state=active]:border-primary">
      {trigger}
    </div>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
