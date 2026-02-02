"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Text } from "../global/text/text";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b last:border-b-0 has-[button[data-variant=icon]]:border has-[button[data-variant=icon]]:rounded-10",
        "has-[button[data-variant=icon]]:p-4 has-[button[data-variant=icon]]:flex has-[button[data-variant=icon]]:flex-col has-[button[data-variant=icon]]:gap-5",
        className,
      )}
      {...props}
    />
  );
}

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  variant?: "default" | "icon";
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};

function AccordionTrigger({
  className,
  children,
  variant = "default",
  icon,
  title,
  description,
  ...props
}: AccordionTriggerProps) {
  const isIconVariant = variant === "icon";

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        data-variant={variant}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer",
          isIconVariant && "no-underline p-0",
          className,
        )}
        {...props}
      >
        {isIconVariant ? (
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex gap-1">
              {icon}
              {title && (
                <Text as="span" variant="base" color="card" weight="semibold">
                  {title}
                </Text>
              )}
            </div>
            {description && (
              <Text as="span" variant="sm" color="muted">
                {description}
              </Text>
            )}
          </div>
        ) : (
          children
        )}

        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-black"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
