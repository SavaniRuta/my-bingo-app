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
import Image from "next/image";
import Link from "next/link";
import { SITE_URLS } from "@/utils/const";
import { ChevronLeft, EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              href={SITE_URLS.forgot_password}
              className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs"
            >
              <ChevronLeft width={16} height={16} />
            </Link>
            Reset your password
          </AuthCardTitle>
          <AuthCardDescription>
            Please enter your new password below.
          </AuthCardDescription>
        </div>
      </AuthCardHeader>

      <AuthCardContent>
        <div className="space-y-4">
          <InputGroup className="h-10">
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border-0 focus-visible:ring-0 shadow-none"
            />

            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOffIcon className="size-4 text-muted-foreground" />
                ) : (
                  <EyeIcon className="size-4 text-muted-foreground" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup className="h-10">
            <InputGroupInput
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="border-0 focus-visible:ring-0 shadow-none"
            />

            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
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
          Update password
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
}
