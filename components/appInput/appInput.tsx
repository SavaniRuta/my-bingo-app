"use client";

import { useState } from "react";
import { Eye, EyeOff, Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type AuthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "password" | "search";
};

export function AppInput({
  variant = "default",
  className,
  ...props
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = variant === "password";
  const isSearch = variant === "search";

  return (
    <div className="relative w-full">
      {/* Left icon (Search) */}
      {isSearch && (
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      )}

      <Input
        type={
          isPassword
            ? showPassword
              ? "text"
              : "password"
            : props.type ?? "text"
        }
        className={cn(
          isSearch && "pl-9",
          isPassword && "pr-10",
          className
        )}
        {...props}
      />

      {/* Right icon (Password toggle) */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}
