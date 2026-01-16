import Link from "next/link";
import { SITE_URLS } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <h1 className="text-gray-500">This is my Bingo SignUp and Sign in Flow</h1>
      <Link href={SITE_URLS.AUTH.REGISTER}>Register</Link>
    </div>
  );
}
