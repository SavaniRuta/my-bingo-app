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
import Link from "next/link";
import { SITE_URLS } from "@/lib/utils";
import { AuthPasswordInput } from "@/components/authPasswordInput/authPasswordInput";
import { ChevronLeft } from "lucide-react";

export default function AccountExits() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <Link href={SITE_URLS.HOME}>
          <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5" />
        </Link>
        <AuthCardTitle className="flex items-center gap-4">
          <Link
            href={SITE_URLS.AUTH.LOGIN}
            className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
          >
            <ChevronLeft width={16} height={16}/>
          </Link>
          Account exists
        </AuthCardTitle>
        <AuthCardDescription>
          <div className="space-y-4">
            <p>
              We found an existing account under <b>janedoe@example.com</b> that
              isn’t linked to [Google/Apple].
            </p>
            <p>
              To link your Google profile, please confirm your password below.
            </p>
          </div>
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="space-y-4">
        <div className="space-y-4">
          <Input type="email" placeholder="janedoe@example.com" disabled />
          <AuthPasswordInput placeholder="Password" />
        </div>
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button type="button" className="w-full bg-link text-base h-10">
          <Link
            href={SITE_URLS.HOME}
            className="flex items-center gap-2 justify-center w-full"
          >
            Link account & sign in
          </Link>
        </Button>

        <div className="text-muted-foreground text-sm">
          <Link
            href={SITE_URLS.LOGIN.FORGOT_PASSWORD}
            className="text-sm underline underline-offset-auto"
          >
            Forgot password?
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
