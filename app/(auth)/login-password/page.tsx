"use client";
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
import { ChevronLeft, EyeIcon, EyeOffIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SingInWithPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
              href={SITE_URLS.auth.login}
              className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
            >
              <ChevronLeft width={16} height={16} />
            </Link>
            Sign in with password
          </AuthCardTitle>
          <AuthCardDescription>
            Enter your password to continue.
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent>
        <div className="space-y-4">
          <Input type="email" placeholder="sam@bingocardcreator.com" disabled />

          <InputGroup className="h-10">
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border-0 focus-visible:ring-0 shadow-none"
            />

            <InputGroupAddon align="inline-end">
              <InputGroupButton onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <EyeOffIcon className="size-4 text-muted-foreground" />
                ) : (
                  <EyeIcon className="size-4 text-muted-foreground" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Link
          href={SITE_URLS.login_password}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Sign in
        </Link>

        <div className="text-muted-foreground text-sm">
          <Link
            href={SITE_URLS.forgot_password}
            className="text-sm underline underline-offset-auto"
          >
            Forgot password?
          </Link>
        </div>
      </AuthCardFooter>
    </AuthCard>
  );
}
