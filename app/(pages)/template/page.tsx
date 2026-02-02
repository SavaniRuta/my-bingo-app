import CategoryHero from "@/components/template/categoryHero/categoryHero";
import Faq from "@/components/template/faq/faq";
import NewBingoCards from "@/components/template/newBingoCards/newBingoCards";
import PopularTemplate from "@/components/template/PopularTemplateCard/popularTemplate";
import TrendingTemplate from "@/components/template/trendingTemplate/trendingTemplate";

export default function TemplatesPage() {
  return (
    <>
      <CategoryHero />
      <TrendingTemplate />
      <PopularTemplate />
      <NewBingoCards />
      <Faq />
    </>
  );
}
