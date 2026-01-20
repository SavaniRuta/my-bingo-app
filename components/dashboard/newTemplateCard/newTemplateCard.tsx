import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type TemplateCardProps = {
  image: StaticImageData;
  title: string;
};

export function NewTemplateCard({ image, title }: TemplateCardProps) {
  return (
    <>
      <div>
        <Link href="#">
          <div className="overflow-hidden rounded-xl border border-border cursor-pointer">
            <Image src={image} alt={title} priority={false} className="w-full"/>
          </div>
          <h2 className="mt-3 font-semibold">{title}</h2>
        </Link>
      </div>
    </>
  );
}
