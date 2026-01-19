import {
  AuthCard,
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
import { ChevronLeft } from "lucide-react";

export default function AccountNotFound() {
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
          Account not found
        </AuthCardTitle>
        <AuthCardDescription>
          We couldn't find an existing Bingo Card Creator account associated
          with your [Google/Apple] profile ([janedoe@example.com]).
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button type="button" className="w-full bg-link text-base h-10">
          <Link
            href={SITE_URLS.AUTH.REGISTER}
            className="flex items-center gap-2 justify-center w-full"
          >
            Create a new account
          </Link>
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full text-base h-10"
        >
          <Link
            href={SITE_URLS.AUTH.LOGIN}
            className="flex items-center gap-2 justify-center w-full"
          >
            Log in with a different email
          </Link>
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
