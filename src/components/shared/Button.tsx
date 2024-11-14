"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}

export default function DynamicButton({
  children,
  className,
  disabled,
  isLoading,
  loadingText = "Loading...",
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn("relative", className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center bg-primary">
          <Loader2 className="h-5 w-5 animate-spin text-primary-foreground" />
        </span>
      )}
      <span
        className={cn(
          "flex items-center justify-center",
          isLoading && "invisible",
        )}
      >
        {children}
      </span>
      <span className="sr-only">{isLoading ? loadingText : children}</span>
    </Button>
  );
}
