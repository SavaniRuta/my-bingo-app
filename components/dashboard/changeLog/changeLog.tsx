import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { SITE_URLS } from "@/utils/const";

type ChangeLogProps = {
  image: StaticImageData;
  title: string;
  id: string;
};

export function ChangeLog({ image, title, id }: ChangeLogProps) {
  return (
    <>
      <Link href={SITE_URLS.changelog + `/${id}`} title={title}>
        <div className="bg-card border border-border rounded-xl p-2.5 pb-4 shadow-sm transition-all">
          <div>
            <Image
              src={image}
              alt={title}
              className="rounded-lg h-full w-full object-cover aspect-video object-center border border-border"
              priority={false}
            />
            <p className="px-2 pt-4 text-card-foreground">{title}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
