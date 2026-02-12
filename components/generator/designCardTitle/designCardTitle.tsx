import { Text } from "@/components/global/text/text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { AlignCenter, AlignLeft, AlignRight, Bold } from "lucide-react";

const FONT_WEIGHT_OPTIONS = [
  { id: "thin", value: "thin", strokeWidth: 1.25 },
  { id: "light", value: "light", strokeWidth: 1.5 },
  { id: "regular", value: "regular", strokeWidth: 2 },
  { id: "semibold", value: "semibold", strokeWidth: 2.5 },
  { id: "bold", value: "bold", strokeWidth: 3 },
] as const;

const TITLE_ALIGNMENT_OPTIONS = [
  { id: "left", value: "left", icon: <AlignLeft className="size-6" /> },
  { id: "center", value: "center", icon: <AlignCenter className="size-6" /> },
  { id: "right", value: "right", icon: <AlignRight className="size-6" /> },
] as const;

export default function DesignCardTitle() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="w-full flex flex-col gap-2">
          <Text as="p" variant="sm" weight="semibold">
            Font
          </Text>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Font 1</SelectItem>
              <SelectItem value="2">Font 2</SelectItem>
              <SelectItem value="3">Font 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Text as="p" variant="sm" weight="semibold">
            Font weight
          </Text>
          <RadioGroup
            defaultValue="regular"
            className="flex h-10 p-1 border border-border rounded-lg gap-0"
          >
            {FONT_WEIGHT_OPTIONS.map((item) => (
              <RadioGroupItem
                key={item.id}
                id={item.id}
                value={item.value}
                variant="icon"
                className={cn("px-1.5 py-1 w-full justify-center")}
                icon={
                  <Bold className="size-6" strokeWidth={item.strokeWidth} />
                }
              />
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="w-full flex flex-col gap-2">
          <Text as="p" variant="sm" weight="semibold">
            Text color
          </Text>
          <div className="border rounded-lg border-border p-2 flex items-center gap-2">
            <div className="bg-black size-5.5 rounded border border-black"></div>
            #5E2A2A
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Text as="p" variant="sm" weight="semibold">
            Title alignment
          </Text>
          <RadioGroup
            defaultValue="regular"
            className="flex h-10 p-1 border border-border rounded-lg gap-0"
          >
            {TITLE_ALIGNMENT_OPTIONS.map((item) => (
              <RadioGroupItem
                key={item.id}
                id={item.id}
                value={item.value}
                variant="icon"
                className={cn("px-1.5 py-1 w-full justify-center")}
                icon={item.icon}
              />
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
