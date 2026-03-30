"use client";

import { useMemo } from "react";

export function TagInputPanel({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const preview = useMemo(() => value.trim().toLowerCase() || "builder", [value]);

  return (
    <section
      className="card"
      style={{
        padding: 18,
        display: "grid",
        gap: 16,
        background:
          "linear-gradient(180deg, rgba(219,234,254,0.65) 0%, rgba(255,255,255,0.96) 46%, rgba(255,237,213,0.58) 100%)",
      }}
    >
      <div style={{ display: "grid", gap: 8 }}>
        <p className="section-title">Identity setup</p>
        <div className="hero-tag" style={{ background: "linear-gradient(135deg, #111827, #2563eb)" }}>
          {preview}
        </div>
      </div>
      <label style={{ display: "grid", gap: 10 }}>
        <span style={{ fontWeight: 800 }}>Public tag</span>
        <input
          className="field"
          value={value}
          maxLength={24}
          placeholder="builder"
          onChange={(event) => onChange(event.target.value.replace(/\s+/g, "-").toLowerCase())}
        />
      </label>
      <p className="muted" style={{ margin: 0, fontSize: 13 }}>
        Keep it short, clear, and public.
      </p>
    </section>
  );
}
