"use client";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import { buttonVariants } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { ChevronLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import BccLogo from "@/components/global/bccLogo/bccLogo";

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
        <BccLogo />
        <div>
          <AuthCardTitle className="flex items-center gap-4">
            <Link
              href={SITE_URLS.email}
              className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
            >
              <ChevronLeft width={16} height={16} />
            </Link>
            Check your email
          </AuthCardTitle>
          <AuthCardDescription>
            We've sent a 6-digit verification code to{" "}
            <span className="font-semibold">example@example.com</span>
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent className="space-y-2">
        <Label htmlFor="otp">Code</Label>
        <InputOTP maxLength={6} id="otp">
          <InputOTPGroup className="space-x-2">
            <InputOTPSlot index={0} className="rounded-md border-l" />
            <InputOTPSlot index={1} className="rounded-md border-l" />
            <InputOTPSlot index={2} className="rounded-md border-l" />
            <InputOTPSlot index={3} className="rounded-md border-l" />
            <InputOTPSlot index={4} className="rounded-md border-l" />
          </InputOTPGroup>
        </InputOTP>

        <p className="text-sm text-muted-foreground">
          {seconds > 0 ? (
            <span>Didn’t get the code? Resend in {seconds} seconds</span>
          ) : (
            <button
              type="button"
              className="text-link underline font-medium"
              onClick={() => {
                setSeconds(26);
              }}
            >
              Resend code
            </button>
          )}
        </p>
      </AuthCardContent>

      <AuthCardFooter>
        <Link
          href={SITE_URLS.success}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Continue
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
}
