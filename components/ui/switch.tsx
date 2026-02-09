"use client";
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

type Variant = "default" | "box" | "expanding";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default";
  variant?: Variant;
  label?: string;
  description?: string;
  position?: "left" | "right";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  content?: React.ReactNode;
};

function Switch({
  className,
  size = "default",
  variant = "default",
  label,
  description,
  position = "left",
  icon,
  children,
  content,
  ...props
}: SwitchProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const variants = {
    isDefault: variant === "default",
    isBox: variant === "box",
    isExpanding: variant === "expanding",
  };

  const { isDefault, isBox, isExpanding } = variants;

  const containerClasses = cn(
    "group/switch-item flex cursor-pointer transition-colors rounded-10",
    "gap-3",

    isBox &&
      "border border-border p-3 has-[button[data-state=checked]]:border-primary has-[button[data-state=checked]]:bg-primary/5 shadow-xs",

    isExpanding && "border border-border p-4 rounded-12 shadow-xs flex-col",

    position === "right" && "items-center justify-between",

    className,
  );

  const contentWrapperClasses = cn(
    "flex items-start gap-3",
    isExpanding && "items-center justify-between",
  );

  const iconClasses = cn(
    "flex items-center justify-center text-primary shrink-0",
    // "group-has-[button[data-state=checked]]/switch-item:text-foreground",
  );

  const switchClasses = cn(
    "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6",
  );

  const labelClasses = cn("text-sm text-foreground font-semibold");

  const descriptionClasses = cn("text-sm text-muted-foreground");

  const hasContent = Boolean(label || description);
  const showLabel = label && (isDefault || isBox || isExpanding);
  const showDescription = description && (isDefault || isBox || isExpanding);
  const showIcon = icon && isExpanding;
  const expandableContent = children || content;

  const handleSwitchChange = (checked: boolean) => {
    if (isExpanding) {
      setIsExpanded(checked);
    }
  };

  const switchElement = (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={switchClasses}
      onCheckedChange={handleSwitchChange}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 cursor-pointer",
        )}
      />
    </SwitchPrimitive.Root>
  );

  if (!hasContent && !isExpanding) {
    return switchElement;
  }

  if (isExpanding) {
    return (
      <div className={containerClasses}>
        <div className={contentWrapperClasses}>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-start gap-2">
              {showIcon && <div className={iconClasses}>{icon}</div>}
              {showLabel && <span className={labelClasses}>{label}</span>}
            </div>

            {showDescription && (
              <span className={descriptionClasses}>{description}</span>
            )}
          </div>

          {switchElement}
        </div>

        {expandableContent && isExpanded && <>{expandableContent}</>}
      </div>
    );
  }

  return (
    <label className={containerClasses}>
      {position === "left" && switchElement}

      {(showLabel || showDescription) && (
        <div className="flex flex-col gap-1">
          {showLabel && <span className={labelClasses}>{label}</span>}
          {showDescription && (
            <span className={descriptionClasses}>{description}</span>
          )}
        </div>
      )}

      {position === "right" && switchElement}
    </label>
  );
}

export { Switch };
