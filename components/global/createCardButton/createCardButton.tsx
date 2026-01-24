import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ReactNode } from "react";

type CreateCardButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export default function CreateCardButton({
  href,
  children,
  className,
  variant,
  size,
}: CreateCardButtonProps) {
  return (
    <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), className )}
    >
        {children}
    </Link>
  );
}
