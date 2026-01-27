import { cn } from "@/lib/utils";
import { SITE_URLS } from "@/utils/const";
import Image from "next/image";
import Link from "next/link";

type BccLogoProps = {
  height?: number;
  width?: number;
  src?: string;
  alt?: string;
  className?: string;
  link?: string;
};

export default function BccLogo({
  height = 40,
  width = 80,
  src = "/images/bingo-logo.svg",
  alt = "Bingo Logo",
  className,
  link = SITE_URLS.home,
}: BccLogoProps) {
  const Logo = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full"
    />
  );

  return link ? <Link href={link} className={cn("object-contain w-max block", className)}>{Logo}</Link> : Logo;
}