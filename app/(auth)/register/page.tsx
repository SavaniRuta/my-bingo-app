"use client";
import { Button } from "@/components/ui/button";
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
import bingoLogo from "@/public/images/bingo-logo.svg";
import googleIcon from "@/public/images/google-icon.svg";
import appleIcon from "@/public/images/apple-icon.svg";
import Link from "next/link";
import { SITE_URLS } from "@/lib/utils";

export default function SignUpPage() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <Link href={SITE_URLS.HOME}>
          <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5" />
        </Link>
        <AuthCardTitle>Create an account</AuthCardTitle>
        <AuthCardDescription>
          For a fast, secure login—no password required.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="flex flex-col gap-3">
        <Button variant="outline" className="w-full text-base h-10">
          <Image src={googleIcon} alt="Google social icon" />
          Sign up with Google
        </Button>
        <Button className="w-full text-base h-10">
          <Image src={appleIcon} alt="Apple icon" />
          Sign up with Apple
        </Button>

        <Button variant="outline" className="w-full text-base h-10">
          <Link
            href={SITE_URLS.REGISTER.EMAIL}
            className="flex items-center gap-2 justify-center w-full"
          >
            <Mail /> Sign up with email
          </Link>
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
      </AuthCardContent>

      <AuthCardFooter className="justify-center">
        <div className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href={SITE_URLS.AUTH.LOGIN}
            className="text-xs text-link underline underline-offset-auto"
          >
            Sign in
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
