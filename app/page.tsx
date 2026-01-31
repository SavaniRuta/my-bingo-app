import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { Switch } from "@/components/ui/switch";
import { CardTitle } from "@/components/generator/cardTitle/cardTitle";
import { AddImageWord } from "@/components/generator/addImageWord/addImageWord";
import { ADD_WORDS_TABS } from "@/utils/dummy-data";

export default function Home() {
  return (
    <>
      <div className="mx-auto container">
        <h1 className="text-gray-500">
          This is my Bingo SignUp and Sign in Flow
        </h1>
        <Link href={SITE_URLS.auth.register}>Register</Link>

      </div>

      <div>
        {/* <h1>Swicth</h1> */}
        <Switch label="Switch Text" description="This is a switch description." />
        <Switch label="Switch Text" description="This is a switch description." variant="box" />

        {/* <h1>Card title</h1> */}
        <CardTitle initialData={{ type: "text", text: "My Bingo Card Title" }} />

        {/* <h1>Add image word</h1> */}
        <AddImageWord tabs={ADD_WORDS_TABS} />
      </div>
    </>
  );
}
