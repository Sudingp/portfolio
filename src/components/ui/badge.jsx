import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", children, ...props }) {
  const variantStyles = {
    default: "border-red-500/30 bg-red-500/10 text-red-300",
    secondary: "border-white/10 bg-zinc-900/80 text-zinc-300",
    success: "border-red-500/30 bg-red-500/10 text-red-200",
    cyan: "border-red-500/30 bg-red-500/10 text-red-300",
    red: "border-red-500/40 bg-red-600/20 text-red-200",
    outline: "border-white/15 text-zinc-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap gap-1.5 transition-colors",
        variantStyles[variant] || variantStyles.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
