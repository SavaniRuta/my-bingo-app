import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { CardTitle } from "@/components/generator/cardTitle/cardTitle";

export default function Home() {
  return (
    <div className="mx-auto container">
      <h1 className="text-gray-500">
        This is my Bingo SignUp and Sign in Flow
      </h1>
      <Link href={SITE_URLS.auth.register}>Register</Link>
    </div>
  );
}
