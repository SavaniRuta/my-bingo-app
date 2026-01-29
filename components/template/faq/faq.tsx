import { Text } from "@/components/global/text/text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_URLS } from "@/utils/const";
import Link from "next/link";
import { FAQ_DATA } from "@/utils/dummy-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="py-6 lg:py-10">
      <div className="template-container flex gap-10 flex-col lg:gap-12 lg:flex-row">
        <div className="w-full text-center lg:text-left lg:max-w-md">
          <div className="space-y-5 mb-8">
            <Text as="span" variant="lg" className="block">
              FAQs
            </Text>
            <Text
              as="h2"
              variant="5xl"
              weight="bold"
              className="font-recoleta mb-5"
              color="gray_900"
            >
              Got questions? We have answers!
            </Text>
            <Text variant="lg" className="block" color="gray_600">
              Explore our FAQs and let's solve those bingo puzzles together!
            </Text>
          </div>
          <Link
            href={SITE_URLS.template}
            className={cn(buttonVariants({ size: "xl" }))}
          >
            Support area
          </Link>
        </div>

        <div className="flex-1">
          <Accordion
            className="my-4 space-y-3"
            collapsible
            type="single"
          >
            {FAQ_DATA.map(({ question, answer }, index) => (
              <AccordionItem
                className="rounded-xl border-none bg-gray-50 px-6"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
