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
import chevronLeft from "@/public/images/chevron-left.svg";
import Link from "next/link";
import { SITE_URLS } from "@/lib/utils";

export default function ForgotPassword() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <Link href={SITE_URLS.HOME}>
          <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5" />
        </Link>
        <AuthCardTitle className="flex items-center gap-4">
          <Link
            href={SITE_URLS.LOGIN.LOGIN_PASSWORD}
            className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
          >
            <Image src={chevronLeft} alt="Back Link Icon" />
          </Link>
          Reset your password
        </AuthCardTitle>
        <AuthCardDescription>
          Enter your email to receive a password reset link.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent>
        <AuthInput type="email" placeholder="sam@bingocardcreator.com" />
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button type="button" className="w-full bg-link text-base h-10">
          <Link
            href={SITE_URLS.LOGIN.RESET_PASSWORD}
            className="flex items-center gap-2 justify-center w-full"
          >
            Continue
          </Link>
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
