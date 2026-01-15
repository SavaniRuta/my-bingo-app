import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-gray-500">This is my Bingo SignUp and Sign in Flow</h1>
      <Link href="/register">Register</Link>
    </div>
  );
}
