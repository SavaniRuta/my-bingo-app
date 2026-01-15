"use client";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { AuthInput } from "@/components/authInput/authInput";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  return (
    <AuthCard>
      <AuthCardHeader>
        <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-8" />
        <AuthCardTitle>Login</AuthCardTitle>
        <AuthCardDescription>
          Log in to design, play, and print your perfect bingo cards.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="flex flex-col gap-3">
        <Button variant="outline" className="w-full text-base">
          Sign up with Google
        </Button>
        <Button className="w-full text-base">Sign up with Apple</Button>

        {/* <FieldSeparator>OR</FieldSeparator> */}

        <div className="flex items-center">
          <Label htmlFor="password">Email</Label>
          <a
            href="/login/forgot-password"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        <AuthInput
          id="password"
          type="password"
          required
          placeholder="john@example.com"
        />

        <Button
          className="w-full text-base bg-link"
          onClick={() => router.push("/login/verify")}
        >
          Sign in
        </Button>
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => router.push("/login/login-password")}
        >
          <Lock />
          Use a password instead
        </Button>
      </AuthCardContent>

      <AuthCardFooter className="justify-center">
        <div className="text-muted-foreground text-sm">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-xs text-link underline underline-offset-auto"
          >
            Sign up
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
