import { Text } from "@/components/global/text/text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileQuestionMark, Music, TextAlignStart } from "lucide-react";
import Image from "next/image";
import TraditionalCardType from "@/public/images/traditional-card-type.svg";

export function SetupCardType() {
  const cardTypeRadios = [
    {
      id: "custom",
      label: "Custom",
      value: "custom",
      icon: <TextAlignStart className="size-6" />,
    },
    {
      id: "traditional",
      label: "Traditional",
      value: "traditional",
      icon: (
        <Image
          src={TraditionalCardType}
          alt="Traditional card"
          width={24}
          height={24}
        />
      ),
    },
    {
      id: "music",
      label: "Music",
      value: "music",
      icon: <Music className="size-6" />,
    },
    {
      id: "trivia",
      label: "Trivia",
      value: "trivia",
      icon: <FileQuestionMark className="size-6" />,
    },
  ];

  return (
    <div>
      <Text variant="base" weight="semibold" className="mb-0.5">
        Card type
      </Text>
      <Text as="p" variant="sm" color="muted">
        Add custom text and images, play regular bingo, connect your favorite
        playlist or play a trivia game.
      </Text>
      <div className="overflow-x-auto remove-scroll mt-4">
        <RadioGroup defaultValue="custom">
          <div className="flex gap-3">
            {cardTypeRadios.map((item) => {
              return (
                <RadioGroupItem
                  key={item?.id}
                  variant="fancy-group"
                  value={item?.value}
                  label={item?.label}
                  icon={item?.icon}
                  className="font-semibold w-full"
                />
              );
            })}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
