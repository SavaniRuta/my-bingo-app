"use client";
import { useRef } from "react";
import TrendingTemplateCard from "./TrendingTemplateCard";
import { TRENDING_TEMPLATES } from "@/utils/dummy-data";
import SliderButton from "../sliderButton/sliderButton";

export default function TrendingTemplate() {
  const sliderRef = useRef<HTMLUListElement>(null);

  return (
    <section className="py-6 lg:py-10">
      <div className="template-container">
        <SliderButton
          title="Popular templates by category"
          sliderRef={sliderRef}
        />
      </div>

      <div className="mx-auto md:px-6 md:max-w-7xl">
        <ul
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory px-2 xl:px-0 xl:-mx-4 remove-scroll md:-mx-4 md:px-2"
        >
          {TRENDING_TEMPLATES.map((item) => (
            <li
              key={item.id}
              className="snap-start shrink-0 px-4 w-[85%] md:w-[60%] lg:w-1/2"
            >
              <TrendingTemplateCard
                category={item.category}
                title={item.title}
                description={item.description}
                icon={item.icon}
                image={item.image}
                href={item.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
