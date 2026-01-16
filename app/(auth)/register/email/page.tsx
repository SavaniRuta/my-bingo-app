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
import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import Link from "next/link";
import chevronLeft from "@/public/images/chevron-left.svg";
import { SITE_URLS } from "@/lib/utils";

export default function RegisterEmailPage() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <Link href={SITE_URLS.HOME}>
          <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5" />
        </Link>
        <AuthCardTitle className="flex items-center gap-4">
          <Link
            href={SITE_URLS.AUTH.REGISTER}
            className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
          >
            <Image src={chevronLeft} alt="Back Link Icon" />
          </Link>
          Sign up with email
        </AuthCardTitle>
        <AuthCardDescription>
          Enter your name and email to create your account.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="space-y-4">
        <label className="text-sm font-medium mb-2 block ">Name</label>
        <AuthInput placeholder="Enter your full name" />

        <label className="text-sm font-medium mb-2 block">Email</label>
        <AuthInput type="email" placeholder="Enter your email address" />
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button type="button" className="w-full bg-link text-base h-10">
          <Link
            href={SITE_URLS.REGISTER.VERIFY}
            className="flex items-center gap-2 justify-center w-full"
          >
            Continue
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
      </AuthCardFooter>
    </AuthCard>
  );
}
