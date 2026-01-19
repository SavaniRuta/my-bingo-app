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
import Link from "next/link";
import { SITE_URLS } from "@/lib/utils";
import { AuthPasswordInput } from "@/components/authPasswordInput/authPasswordInput";
import { ChevronLeft } from "lucide-react";

export default function ResetPassword() {
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
            <ChevronLeft width={16} height={16}/>
          </Link>
          Reset your password
        </AuthCardTitle>
        <AuthCardDescription>
          Please enter your new password below.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent>
        <div className="space-y-4">
          <AuthPasswordInput placeholder="Password" />
          <AuthPasswordInput placeholder="Confirm password" />
        </div>
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button type="button" className="w-full bg-link text-base h-10">
          <Link
            href={SITE_URLS.HOME}
            className="flex items-center gap-2 justify-center w-full"
          >
            Update password
          </Link>
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
