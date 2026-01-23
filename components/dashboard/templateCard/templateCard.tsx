import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { SITE_URLS } from "@/utils/const";

type TemplateCardProps = {
  image: StaticImageData;
  title: string;
  id: string;
  className?: string;
};

export function NewTemplateCard({ image, title, id, className }: TemplateCardProps) {
  return (
    <>
      <div>
        <Link href={SITE_URLS.template + `/${id}`}>
          <Image src={image} alt={title} priority={false} className="w-full overflow-hidden rounded-xl border border-border cursor-pointer"/>
          <h2 className="mt-3 font-semibold">{title}</h2>
        </Link>
      </div>
    </>
  );
}
