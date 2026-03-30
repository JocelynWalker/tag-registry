"use client";

import { useState } from "react";
import { CopyIcon } from "@/components/icons";

export function CopyTagButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="button-ghost" type="button" onClick={handleCopy}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <CopyIcon width={15} height={15} />
        {copied ? "Copied" : "Copy tag"}
      </span>
    </button>
  );
}
