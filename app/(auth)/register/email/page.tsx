"use client";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import { Button } from "@/components/ui/button";
import { AuthInput } from "@/components/authInput/authInput";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function RegisterEmailPage() {
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
          Sign up with email
        </AuthCardTitle>
        <AuthCardDescription>
          Enter your name and email to create your account.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <AuthInput placeholder="Enter your full name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <AuthInput type="email" placeholder="Enter your email address" />
        </div>
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button
          type="button"
          className="w-full bg-link text-base"
          onClick={() => router.push("/register/verify")}
        >
          Continue
        </Button>

        <div className="text-muted-foreground text-sm">
          By signing up, you agree to the{" "}
          <Link
            href="#"
            className="text-xs text-link underline underline-offset-auto"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="text-xs text-link underline underline-offset-auto"
          >
            Privacy Policy
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
