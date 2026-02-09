import GeneratorCardTabs from "@/components/generator/generatorCardTabs/generatorCardTabs";
import { Button } from "@/components/ui/button";
import { Globe, Printer } from "lucide-react";

export default function Generater() {
  return (
    <div className="flex flex-auto min-h-0">
      <div className="lg:border lg:border-border lg:rounded-lg lg:w-112.5 xl:w-137.5 2xl:w-150 relative bg-card shadow-sm overflow-hidden flex flex-col w-full min-h-0 lg:my-3 lg:ml-3">
        <GeneratorCardTabs />

        <div className="bg-card flex items-center gap-3 flex-none px-7 py-3 border-t border-border w-full">
          <Button variant="outline" size="lg" className="w-1/2">
            <Globe />
            Play online
          </Button>
          <Button size="lg" className="w-1/2">
            <Printer />
            Print cards
          </Button>
        </div>
      </div>

      <div className="flex-1 hidden flex-col my-3 relative lg:flex">
        Right pannel
      </div>
    </div>
  );
}
