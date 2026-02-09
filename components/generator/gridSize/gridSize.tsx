import { Text } from "@/components/global/text/text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import GridX3Icon from "@/public/images/3x3-grid-icon.svg";
import GridX4Icon from "@/public/images/4x4-grid-icon.svg";
import GridX5Icon from "@/public/images/5x5-grid-icon.svg";

export function GridSize() {
  const cardTypeRadios = [
    {
      id: "3x3",
      label: "3 x 3",
      value: "3x3",
      icon: (
        <Image
          src={GridX3Icon}
          alt="3X3 Grid"
          width={36}
          height={36}
          className="size-9"
        />
      ),
    },
    {
      id: "4x4",
      label: "4 x 4",
      value: "4x4",
      icon: (
        <Image
          src={GridX4Icon}
          alt="4X4 Grid"
          width={36}
          height={36}
          className="size-9"
        />
      ),
    },
    {
      id: "5x5",
      label: "5 x 5",
      value: "5x5",
      icon: (
        <Image
          src={GridX5Icon}
          alt="5X5 Grid"
          width={36}
          height={36}
          className="size-9"
        />
      ),
    },
  ];

  return (
    <div>
      <Text variant="base" weight="semibold" className="mb-0.5">
        GridSize
      </Text>
      <Text as="p" variant="sm" color="muted">
        Select smaller grids for shorter games; use 5x5 for a classic 75-ball
        experience.
      </Text>
      <div className="overflow-x-auto remove-scroll mt-4">
        <RadioGroup defaultValue="custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {cardTypeRadios.map((item) => {
              return (
                <RadioGroupItem
                  key={item.id}
                  variant="fancy-group"
                  value={item.value}
                  label={item.label}
                  icon={item.icon}
                  className="font-semibold"
                />
              );
            })}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
