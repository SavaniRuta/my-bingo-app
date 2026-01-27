import {
  AuthCard,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import BccLogo from "@/components/global/bccLogo/bccLogo";

export default function AccountNotFound() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <BccLogo />
        <div>
          <AuthCardTitle className="flex items-center gap-4">
            <Link
              href={SITE_URLS.auth.login}
              className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
            >
              <ChevronLeft width={16} height={16} />
            </Link>
            Account not found
          </AuthCardTitle>
          <AuthCardDescription>
            We couldn't find an existing Bingo Card Creator account associated
            with your [Google/Apple] profile ([janedoe@example.com]).
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardFooter className="flex flex-col gap-3">
        <Link
          href={SITE_URLS.auth.register}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Create a new account
        </Link>

        <Link
          href={SITE_URLS.auth.login}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "w-full",
          )}
        >
          Log in with a different email
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
}
