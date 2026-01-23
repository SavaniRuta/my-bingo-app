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
import BccLogo from "@/components/bccLogo";

export default function AccountExits() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
            Account exists
          </AuthCardTitle>
          <AuthCardDescription>
            <div className="space-y-4">
              <p>
                We found an existing account under <b>janedoe@example.com</b>{" "}
                that isn’t linked to [Google/Apple].
              </p>
              <p>
                To link your Google profile, please confirm your password below.
              </p>
            </div>
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent className="space-y-4">
        <div className="space-y-4">
          <Input type="email" placeholder="janedoe@example.com" disabled />

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
          href={SITE_URLS.home}
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Link account & sign in
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
