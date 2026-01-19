import { Button } from "@/components/ui/button";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import Image from "next/image";
import bingoLogo from "@/public/images/bingo-logo.svg";
import googleIcon from "@/public/images/google-icon.svg";
import appleIcon from "@/public/images/apple-icon.svg";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { SITE_URLS } from "@/lib/utils";

export default function LoginPage() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <Link href={SITE_URLS.HOME}>
          <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5" />
        </Link>
        <AuthCardTitle>Login</AuthCardTitle>
        <AuthCardDescription>
          Log in to design, play, and print your perfect bingo cards.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full text-base h-10">
            <Image src={googleIcon} alt="Google social icon" />
            Sign up with Google
          </Button>
          <Button className="w-full text-base h-10">
            <Image src={appleIcon} alt="Google social icon" />
            Sign up with Apple
          </Button>
        </div>

        {/* <FieldSeparator>OR</FieldSeparator> */}

        {/* <Separator>OR</Separator> */}
        <div className="relative flex items-center justify-center my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="text-sm font-medium text-foreground font-inter bg-background border border-border rounded-md px-2 py-1 leading-none">
              OR
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Label htmlFor="password">Email</Label>
            <a
              href={SITE_URLS.LOGIN.FORGOT_PASSWORD}
              className="ml-auto text-sm underline text-muted-foreground"
            >
              Forgot password?
            </a>
          </div>

          <Input
            id="email"
            type="email"
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <Button type="button" className="w-full text-base bg-link h-10">
            <Link
              href={SITE_URLS.LOGIN.VERIFY}
              className="flex items-center gap-2 justify-center w-full"
            >
              Sign in
            </Link>
          </Button>

          <Button variant="ghost" className="w-full">
            <Link
              href={SITE_URLS.LOGIN.LOGIN_PASSWORD}
              className="flex items-center gap-2 justify-center w-full"
            >
              <Lock /> Use a password instead
            </Link>
          </Button>
        </div>
      </AuthCardContent>

      <AuthCardFooter className="justify-center">
        <div className="text-muted-foreground text-sm">
          Don’t have an account?{" "}
          <Link
            href={SITE_URLS.AUTH.REGISTER}
            className="text-sm text-link underline underline-offset-auto font-medium"
          >
            Sign up
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
