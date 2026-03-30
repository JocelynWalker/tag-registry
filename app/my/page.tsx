"use client";

import Link from "next/link";
import { EmptyState } from "@/components/EmptyState";
import { MosaicHeader } from "@/components/MosaicHeader";
import { TagStatusChip } from "@/components/TagStatusChip";
import { useCurrentTag } from "@/hooks/useTagRegistry";

function shorten(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function MyPage() {
  const { address, isConnected, tag, loading } = useCurrentTag();

  if (!isConnected || !address) {
    return (
      <div className="page-stack">
        <MosaicHeader
          eyebrow="My tag"
          title="Your identity slot."
          subtitle="Connect a wallet to load your current public label."
          compact
        />
        <EmptyState
          title="No wallet connected"
          text="Connect a wallet to see your current tag and identity summary."
          actionHref="/set"
          actionLabel="Go to set tag"
        />
      </div>
    );
  }

  return (
    <div className="page-stack">
      <MosaicHeader
        eyebrow="My tag"
        title="Your public role."
        subtitle="A focused summary for the wallet currently connected."
        compact
      />

      <section
        className="card"
        style={{
          padding: 18,
          display: "grid",
          gap: 16,
          background: "linear-gradient(135deg, rgba(255,237,213,0.44), rgba(255,255,255,0.98), rgba(196,181,253,0.26))",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <p className="section-title">Current identity</p>
            <h2 style={{ margin: "6px 0 0", fontSize: 26 }}>
              {loading ? "Loading..." : tag ? "Tag loaded" : "No tag yet"}
            </h2>
          </div>
          <TagStatusChip status={tag ? "public" : "ready"} />
        </div>

        <div
          className="card"
          style={{
            padding: 16,
            boxShadow: "none",
            display: "grid",
            gap: 10,
            background: tag ? "linear-gradient(135deg, #111827, #2563eb)" : "white",
            color: tag ? "white" : "inherit",
          }}
        >
          <span className="section-title" style={{ color: tag ? "rgba(255,255,255,0.72)" : undefined }}>
            Active tag
          </span>
          <div style={{ fontSize: 38, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.05em" }}>
            {tag || "unset"}
          </div>
          <span className="mono" style={{ fontSize: 13, opacity: 0.84 }}>
            {shorten(address)}
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Link href={tag ? `/tags/${tag}` : "/set"} className="button-primary" style={{ textAlign: "center" }}>
            {tag ? "Open detail" : "Set now"}
          </Link>
          <Link href="/explore" className="button-secondary" style={{ textAlign: "center" }}>
            Browse public tags
          </Link>
        </div>
      </section>
    </div>
  );
}
