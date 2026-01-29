import CategoryHero from "@/components/template/categoryHero/categoryHero";
import Faq from "@/components/template/faq/faq";
import NewBingoCards from "@/components/template/newBingoCards/newBingoCards";
import PopularCatTemplate from "@/components/template/popularCatTemplate/popularCatTemplate";
import TrendingTemplate from "@/components/template/trendingTemplate/trendingTemplate";

export default function TemplatesPage() {
  return (
    <>
      <CategoryHero />
      <TrendingTemplate />
      <PopularCatTemplate />
      <NewBingoCards />
      <Faq />
    </>
  );
}
