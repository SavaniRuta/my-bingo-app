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
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function RegisterEmailPage() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <Link href={SITE_URLS.home} className="w-max">
          <Image
            src="/images/bingo-logo.svg"
            alt="Bingo Logo Image"
            width={75}
            height={40}
          />
        </Link>
        <div>
          <AuthCardTitle className="flex items-center gap-4">
            <Link
              href={SITE_URLS.auth.register}
              className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
            >
              <ChevronLeft width={16} height={16} />
            </Link>
            Sign up with email
          </AuthCardTitle>
          <AuthCardDescription>
            Enter your name and email to create your account.
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent className="space-y-4">
        <Label htmlFor="name">Name</Label>
        <Input type="text" placeholder="Enter your full name" id="name" />

        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Enter your email address" id="email" />
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Link
          href={SITE_URLS.register_verify}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Continue
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
      </AuthCardFooter>
    </AuthCard>
  );
}
