import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const textVariants = cva("text-foreground", {
    variants: {
        variant: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
            "3xl": "text-3xl",
            "4xl": "text-4xl",
        },
        weight: {
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold"
        },
        color: {
            default: "text-foreground",
            muted: "text-muted-foreground",
            primary: "text-primary",
            secondary: "text-secondary-foreground",
            accent: "text-accent-foreground",
            destructive: "text-destructive-foreground",
            warning: "text-warning-foreground",
            success: "text-success-foreground",
            card: "text-card-foreground",
            popover: "text-popover-foreground",
            gray_500: "text-gray-500",
            gray_600: "text-gray-600",
            gray_800: "text-gray-800",
            gray_900: "text-gray-900",
            primary_900: "text-indigo-900",
        }
    },
    defaultVariants: {
        // variant: "base",
        weight: "normal",
        color: "default"
    }
});

type TextProps = {
    as?: React.ElementType;
    children?: React.ReactNode;
} & VariantProps<typeof textVariants> & React.ComponentPropsWithoutRef<"div">;

const TextComponent = React.forwardRef<HTMLElement, TextProps>(
    ({ as: Component = "p", className, variant, weight, color, children, ...props }, ref) => {
        return (
            <Component
                ref={ref as any}
                className={cn(textVariants({ variant, weight, color }), className)}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

TextComponent.displayName = "Text";

export const Text = TextComponent;