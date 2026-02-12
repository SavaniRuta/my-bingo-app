import { Text } from "@/components/global/text/text";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Shuffle, Star } from "lucide-react";
import { ImageDropzone } from "../imageDropzone/imageDropzone";
import ColumnHeaderIcon from "@/public/images/coulmn-header-icon.svg";
import ColumnFooterIcon from "@/public/images/column-footer-icon.svg";
import Image from "next/image";

export function AdditionalOptions() {
  return (
    <>
      <Text variant="base" weight="semibold" className="mb-0.5">
        Additional Options
      </Text>
      <Text as="p" variant="sm" color="muted" className="mb-4">
        Personalize your card and headers! Want human bingo? Activate it when
        printing.
      </Text>
      <div className="space-y-3">
        <Switch
          label="Add a free space"
          description="Add a pre-marked central space on the card."
          variant="expanding"
          icon={<Star className="size-4" />}
        >
          <div className="mt-3 lg:mt-4 space-y-4 lg:space-y-5">
            <Input type="text" placeholder="Free space text" />
            <div className="relative mb-5 flex items-center justify-center overflow-hidden">
              <Separator />
              <div className="py-1 px-2 border rounded text-center bg-card text-sm mx-1 text-card-foreground shadow-xs font-medium whitespace-nowrap">
                Or upload an image
              </div>
              <Separator />
            </div>

            <ImageDropzone
              title="Click to upload or drag and drop"
              description="Upload a JPG, PNG, or WebP (400x400px, max 5MB)"
            />
          </div>
        </Switch>

        <Switch
          label="Include column headers"
          description="Label each column on your card."
          variant="expanding"
          icon={
            <Image
              src={ColumnHeaderIcon}
              alt="Column Header title"
              width={14}
              height={14}
            />
          }
        >
          <Text as="p" variant="sm" color="muted">
            Include column headers
          </Text>
        </Switch>

        <Switch
          label="Include footer text"
          description="Add custom text to your card for more information."
          variant="expanding"
          icon={
            <Image
              src={ColumnFooterIcon}
              alt="Column Footer title"
              width={14}
              height={14}
            />
          }
        >
          <Text as="p" variant="sm" color="muted">
            Include footer text
          </Text>
        </Switch>

        <Switch
          label="Randomization method"
          description="Choose how items are distributed across your bingo card."
          variant="expanding"
          icon={<Shuffle className="size-5" />}
        >
          <Text as="p" variant="sm" color="muted">
            Randomization method
          </Text>
        </Switch>
      </div>
    </>
  );
}
