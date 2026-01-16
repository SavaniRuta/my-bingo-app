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
import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import chevronLeft from "@/public/images/chevron-left.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Lock } from "lucide-react";
import { SITE_URLS } from "@/lib/utils";

export default function VerifyLoginPage() {
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
            href={SITE_URLS.LOGIN.FORGOT_PASSWORD}
            className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
          >
            <Image src={chevronLeft} alt="Back Link Icon" />
          </Link>
          Check your email
        </AuthCardTitle>
        <AuthCardDescription>
          For a fast, secure login—no password required.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="space-y-2">
        <div className="border border-input rounded-2xl p-4 flex flex-col justify-center items-center">
          <p className="bg-blue-50 mb-3 w-11 h-11 rounded-xl border border-input flex items-center justify-center">
            <Send className="text-link" />
          </p>
          <p className="text-sm flex flex-col items-center gap-1 mb-1">
            <span className="text-card-title font-medium">
              Didn’t get it? Check your spam folder
            </span>
            {seconds > 0 ? (
              <span>Resend in {seconds} seconds</span>
            ) : (
              <button
                type="button"
                className="text-link underline font-medium"
                onClick={() => {
                  // UI only for now.
                  setSeconds(26); // restart on resend click
                }}
              >
                Resend link
              </button>
            )}
          </p>
        </div>
      </AuthCardContent>

      <AuthCardFooter>
        <Button type="button" variant="ghost" className="w-full">
          <Link
            href={SITE_URLS.LOGIN.LOGIN_PASSWORD}
            className="flex items-center gap-2 justify-center w-full"
          >
            <Lock /> Use a password instead
          </Link>
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
