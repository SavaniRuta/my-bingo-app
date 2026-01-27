"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { cn } from "@/lib/utils";
import BccLogo from "@/components/global/bccLogo/bccLogo";

export default function SignUpPage() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <BccLogo />
        <div>
          <AuthCardTitle>Create an account</AuthCardTitle>
          <AuthCardDescription>
            For a fast, secure login—no password required.
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent className="flex flex-col gap-3">
        <Button variant="outline" size="lg">
          <Image
            src="/images/google-icon.svg"
            alt="Google social icon"
            width={16}
            height={16}
          />
          Sign up with Google
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="bg-black text-white hover:text-white hover:bg-black"
        >
          <Image
            src="/images/apple-icon.svg"
            alt="Apple icon"
            width={16}
            height={16}
          />
          Sign up with Apple
        </Button>

        <Link
          href={SITE_URLS.email}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "w-full",
          )}
        >
          <Mail /> Sign up with email
        </Link>

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
      </AuthCardContent>

      <AuthCardFooter className="justify-center">
        <div className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href={SITE_URLS.auth.login}
            className="text-xs text-link underline underline-offset-auto"
          >
            Sign in
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
