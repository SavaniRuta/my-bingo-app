import { Text } from "@/components/global/text/text";
import { CardTitle } from "../cardTitle/cardTitle";
import { SetupCardType } from "../setupCardType/setupCardType";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GridSize } from "../gridSize/gridSize";
import { AdditionalOptions } from "../additionalOptions/additionalOptions";

export default function GeneratorCardSetup() {
  return (
    <div className="space-y-8">
      <CardTitle />
      <SetupCardType />

      <div className="flex items-center justify-between gap-2 xs:gap-7 flex-wrap">
        <div className="xl:flex-1">
          <Text variant="base" weight="semibold" className="flex gap-2">
            Add words & images
            <Badge variant="outline">15 items</Badge>
          </Text>
          <Text as="p" variant="sm" color="muted">
            We’ll randomize the words and images in your cards when printing.
          </Text>
        </div>
        <Button variant="secondary">
          Add items <ChevronRight />
        </Button>
      </div>

      <GridSize />

      <AdditionalOptions />
    </div>
  );
}
