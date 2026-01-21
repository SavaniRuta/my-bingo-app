import { Button, buttonVariants } from "@/components/ui/button";
import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
} from "@/components/authCard/authCard";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { SITE_URLS } from "@/utils/const";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function LoginPage() {
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
          <AuthCardTitle>Login</AuthCardTitle>
          <AuthCardDescription>
            Log in to design, play, and print your perfect bingo cards.
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full" size="lg">
            <Image
              src="/images/google-icon.svg"
              alt="Google social icon"
              width={16}
              height={16}
            />
            Sign up with Google
          </Button>
          <Button
            size="lg"
            className="w-full bg-black text-white hover:text-white hover:bg-black"
          >
            <Image
              src="/images/apple-icon.svg"
              alt="Apple icon"
              width={16}
              height={16}
            />
            Sign up with Apple
          </Button>
        </div>

        <div className="relative my-3 flex items-center justify-center overflow-hidden">
          <Separator />
          <div className="py-1 px-2 border rounded text-center bg-card text-sm mx-1 text-card-foreground shadow-xs font-medium ">
            OR
          </div>
          <Separator />
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Label htmlFor="email">Email</Label>
            <a
              href={SITE_URLS.forgot_password}
              className="text-sm underline text-muted-foreground"
            >
              Forgot password?
            </a>
          </div>

          <Input
            id="email"
            type="email"
            required
            placeholder="john@example.com"
            // className="border-destructive focus-visible:ring-destructive mb-1"
          />
          <p className="text-[0.8rem] text-destructive-foreground">This email is invalid.</p>
        </div>

        <div className="space-y-2">
          <Link
            href={SITE_URLS.login_verify}
            className={cn(buttonVariants({ size: "lg" }), "w-full")}
          >
            Sign in
          </Link>

          <Link
            href={SITE_URLS.login_password}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "w-full",
            )}
          >
            <Lock /> Use a password instead
          </Link>
        </div>
      </AuthCardContent>

      <AuthCardFooter className="justify-center">
        <div className="text-muted-foreground text-sm">
          Don’t have an account?{" "}
          <Link
            href={SITE_URLS.auth.register}
            className="text-sm text-link underline underline-offset-auto font-medium"
          >
            Sign up
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
