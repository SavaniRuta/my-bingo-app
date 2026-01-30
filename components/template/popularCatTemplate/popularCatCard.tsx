import { Text } from "@/components/global/text/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

type PopularCatCard = {
  category: string;
  title: string;
  image: string;
  href: string;
};

export default function PopularCatCard({
  category,
  title,
  image,
  href,
}: PopularCatCard) {
  return (
    <div>
      <Link href={href}>
        <Image
          src={image}
          alt={title}
          width={284}
          height={284}
          className="rounded-xl mb-3"
        />
      </Link>
      <div className="flex gap-2 items-center">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <Text as="span" variant="sm" color="gray-400" className="block">
            {category}
          </Text>
          <Link href={href} className="font-semibold">
            <Text as="h4" variant="base" weight="semibold" color="gray-800">
              {title}
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}
