"use client";
import {
  AuthCard,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AccountNotFound() {
  const router = useRouter();

  return (
    <AuthCard>
      <AuthCardHeader>
        <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5" />
        <AuthCardTitle className="flex items-center gap-4 mb-3">
          <Link
            href="/register"
            className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
          >
            <ChevronLeft className="" />
          </Link>
          Account not found
        </AuthCardTitle>
        <AuthCardDescription>
          We couldn't find an existing Bingo Card Creator account associated
          with your [Google/Apple] profile ([janedoe@example.com]).
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button
          type="button"
          className="w-full bg-link text-base h-10"
          onClick={() => router.push("/register")}
        >
          Create a new account
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full text-base h-10"
          onClick={() => router.push("/login")}
        >
          Log in with a different email
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
