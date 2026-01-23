import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import BccLogo from "@/components/bccLogo";

export default function ForgotPassword() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <BccLogo />
        <div>
          <AuthCardTitle className="flex items-center gap-4">
            <Link
              href={SITE_URLS.login_password}
              className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
            >
              <ChevronLeft width={16} height={16} />
            </Link>
            Reset your password
          </AuthCardTitle>
          <AuthCardDescription>
            Enter your email to receive a password reset link.
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent>
        <Input type="email" placeholder="sam@bingocardcreator.com" />
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Link
          href={SITE_URLS.reset_password}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Continue
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
}
