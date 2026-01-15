"use client";
import { AuthCard, AuthCardContent, AuthCardDescription, AuthCardFooter, AuthCardHeader, AuthCardTitle } from "@/components/authCard/authCard";
import { Button } from "@/components/ui/button";
import { AuthInput } from "@/components/authInput/authInput";
import { useRouter } from "next/navigation";
import Image from "next/image"
import bingoLogo from "@/public/images/bingo-logo.svg"
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ResetPassword() {
  const router = useRouter();

  return (
    <AuthCard>
      <AuthCardHeader>
        <Image src={bingoLogo} alt="Bingo Logo Image" className="mb-5"/>
        <AuthCardTitle className="flex items-center gap-4 mb-3">
          <Link href="/register" className="rounded-lg w-7 h-7 flex items-center justify-center border border-input shadow-xs">
          <ChevronLeft className=""/></Link>
          Reset your password
          </AuthCardTitle>
        <AuthCardDescription>
          Please enter your new password below.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent>
        <div className="space-y-4">
          <AuthInput type="password" placeholder="Password"/>
          <AuthInput type="password" placeholder="Confirm password"/>
        </div>
      </AuthCardContent>

      <AuthCardFooter className="flex flex-col gap-3">
        <Button
          type="button"
          className="w-full bg-link text-base h-10"
          onClick={() => router.push("/login/verify")}
        >
          Update password
        </Button>
      </AuthCardFooter>
    </AuthCard>
  );
}
