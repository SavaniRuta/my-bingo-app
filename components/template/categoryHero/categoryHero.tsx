import { SITE_URLS } from "@/utils/const";
import CreateCardButton from "../../global/createCardButton/createCardButton";
import { Text } from "../../global/text/text";
import { NotepadText, Pencil } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";
import Image from "next/image";

export default function CategoryHero() {
  return (
    <>
      <section className="bg-blue-50 p-6 pb-16 relative overflow-hidden z-10">
        <Image
          src="/images/template-hero.svg"
          alt="Template banner background image"
          width={1440}
          height={936}
          className="w-full h-full inset-0 object-cover object-center absolute hidden lg:block -z-10"
        />
        <div className="template-container">
          <div className="max-w-3xl mx-auto text-center">
            <Text
              variant="sm"
              weight="semibold"
              color="primary-900"
              className="mb-4"
            >
              Bingo card templates
            </Text>
            <Text as="h1" weight="bold" className="title-mark title-large mb-5">
              1,600+ printable bingo <span>templates</span>
            </Text>
            <Text
              variant="lg"
              weight="medium"
              color="gray-600"
              className="mb-6"
            >
              Who says bingo is only for halls? Explore customizable, printable
              bingo card templates for any occasion—from birthday parties to
              classroom fun! Ready to play?
            </Text>

            <div className="flex gap-4 justify-center flex-wrap">
              <CreateCardButton href={SITE_URLS.template} size="2xl">
                <Pencil />
                Create bingo cards
              </CreateCardButton>

              <Link
                href={SITE_URLS.template}
                className={cn(
                  buttonVariants({ variant: "outline", size: "2xl" }),
                )}
              >
                <NotepadText />
                Choose a template
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
