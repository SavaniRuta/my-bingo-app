"use client";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Send } from "lucide-react";
import { Lock } from "lucide-react";
import { SITE_URLS } from "@/utils/const";
import { cn } from "@/lib/utils";
import BccLogo from "@/components/bccLogo";

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
        <BccLogo />
        <div>
          <AuthCardTitle className="flex items-center gap-4">
            <Link
              href={SITE_URLS.forgot_password}
              className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
            >
              <ChevronLeft width={16} height={16} />
            </Link>
            Check your email
          </AuthCardTitle>
          <AuthCardDescription>
            For a fast, secure login—no password required.
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent>
        <div className="border border-input rounded-2xl p-4 flex flex-col justify-center items-center mb-3">
          <p className="bg-blue-50 mb-3 w-11 h-11 rounded-xl border border-input flex items-center justify-center">
            <Send className="text-link" />
          </p>
          <p className="text-sm flex flex-col items-center gap-1 mb-1">
            <span className="text-card-title font-medium">
              Didn’t get it? Check your spam folder
            </span>
            {seconds > 0 ? (
              <span className="text-gray-500">Resend in {seconds} seconds</span>
            ) : (
              <button
                type="button"
                className="text-link underline font-medium"
                onClick={() => {
                  setSeconds(26);
                }}
              >
                Resend link
              </button>
            )}
          </p>
        </div>

        <Link
          href={SITE_URLS.login_password}
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "w-full",
          )}
        >
          <Lock /> Use a password instead
        </Link>
      </AuthCardContent>
    </AuthCard>
  );
}
