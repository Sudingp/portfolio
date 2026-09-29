import React, { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

export function CopyButton({ code, className }) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (!hasCopied) return;
    const timeout = setTimeout(() => {
      setHasCopied(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [hasCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
    });
  };

  return (
    <button
      className={cn(
        "relative z-10 flex h-8 px-3 items-center justify-center gap-1.5 rounded-xl border bg-red-600 hover:bg-red-500 border-red-500/40 text-white text-xs font-semibold shadow-md shadow-red-950/30 transition-all active:scale-95",
        className
      )}
      onClick={handleCopy}
      type="button"
    >
      {hasCopied ? (
        <>
          <Check className="h-3.5 w-3.5 text-white" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
}

export default CopyButton;
