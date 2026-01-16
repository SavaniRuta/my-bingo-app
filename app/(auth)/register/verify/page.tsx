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
import { Input } from "@/components/ui/input";
import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import chevronLeft from "@/public/images/chevron-left.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE_URLS } from "@/lib/utils";

export default function VerifyPage() {
  const [seconds, setSeconds] = useState(26);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <AuthCard>
      <AuthCardHeader>
        <Link href={SITE_URLS.HOME}>
          <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5" />
        </Link>
        <AuthCardTitle className="flex items-center gap-4">
          <Link
            href={SITE_URLS.REGISTER.EMAIL}
            className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
          >
            <Image src={chevronLeft} alt="Back Link Icon" />
          </Link>
          Check your email
        </AuthCardTitle>
        <AuthCardDescription>
          We've sent a 6-digit verification code to{" "}
          <span className="font-semibold">example@example.com</span>
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="space-y-2">
        <label className="text-sm font-medium block mb-2">Code</label>
        <div className="flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              maxLength={1}
              className="h-9 w-9 text-center text-lg"
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          {seconds > 0 ? (
            <span>Didn’t get the code? Resend in {seconds} seconds</span>
          ) : (
            <button
              type="button"
              className="text-link underline font-medium"
              onClick={() => {
                // UI only for now.
                setSeconds(26); // restart on resend click
              }}
            >
              Resend code
            </button>
          )}
        </p>
      </AuthCardContent>

      <AuthCardFooter>
        <Button className="w-full bg-link text-base h-10">
          <Link
            href={SITE_URLS.REGISTER.SUCCESS}
            className="flex items-center gap-2 justify-center w-full"
          >
            Continue
          </Link>
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
