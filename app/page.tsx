import Link from "next/link";
import { SITE_URLS } from "@/utils/const";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Grid3x3, Mail, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto container">
      <h1 className="text-gray-500">
        This is my Bingo SignUp and Sign in Flow
      </h1>
      <Link href={SITE_URLS.auth.register}>Register</Link>


      {/* <RadioGroup defaultValue="one" className="mt-10">
        <RadioGroupItem
          value="one"
          label="Radio Button Text"
          description="This is a radio description."
        />
        <RadioGroupItem
          value="two"
          weight="medium"
          label="Radio Button Text"
          description="This is a radio description."
        />

        <RadioGroupItem
          value="three"
          variant="box"
          weight="medium"
          label="Radio Button Text"
          description="This is a radio description."
        />
        <RadioGroupItem
          value="four"
          variant="box"
          label="Radio Button Text"
          description="This is a radio description."
        />
      </RadioGroup>


      <RadioGroup defaultValue="email">
        <RadioGroupItem
          value="email"
          label="email"
          variant="fancy-group"
          icon={<Grid3x3 />}
          iconSize="sm"
          weight="medium"
        />

        <RadioGroupItem
          value="security"
          label="security"
          variant="fancy-group"
          icon={<Shield  />}
          iconSize="sm"
        />
      </RadioGroup> */}

      <RadioGroup defaultValue="email12">
        <RadioGroupItem
          value="email12"
          label="email"
          variant="fancy-item"
          icon={<Grid3x3 className="size-6"/>}
          // iconSize="sm"
          weight="medium"
          description="This is a"
        />

        {/* <RadioGroupItem
          value="security12"
          label="security"
          variant="fancy-item-vertical"
          icon={<Shield className="size-6" />}
          // iconSize="sm"
          description="This is a"
        /> */}
      </RadioGroup>

    </div>
  );
}
