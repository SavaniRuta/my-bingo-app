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
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function VerifyLoginPage() {
  const router = useRouter();

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
        <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-8" />
        <AuthCardTitle className="flex items-center gap-4 mb-3">
          <Link
            href="/register/email"
            className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
          >
            <ChevronLeft className="" />
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
            <Send />
          </p>
          <p className="text-sm flex flex-col items-center gap-1 mb-1">
            <span>Didn’t get it? Check your spam folder</span>
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
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => router.push("/login/login-password")}
        >
          <Lock />
          Use a password instead
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
