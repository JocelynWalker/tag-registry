"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccount } from "wagmi";
import { MosaicHeader } from "@/components/MosaicHeader";
import { TagInputPanel } from "@/components/TagInputPanel";
import { SetTagButton } from "@/components/SetTagButton";
import { TagStatusChip } from "@/components/TagStatusChip";
import { submitTag } from "@/lib/tag-registry";
import { trackTransaction } from "@/utils/track";

export default function SetPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [tag, setTag] = useState("");
  const [state, setState] = useState<"ready" | "set">("ready");
  const [latestHash, setLatestHash] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSetTag() {
    if (!tag.trim() || !isConnected || !address) return;
    try {
      setLoading(true);
      const hash = await submitTag(tag.trim());
      setLatestHash(hash);
      setState("set");
      await trackTransaction("app-021", "tag-registry", address, hash);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-stack">
      <MosaicHeader
        eyebrow="Set tag"
        title="Publish your label."
        subtitle="Your tag becomes a quick public read for anyone on Base."
        compact
      />

      <section className="mosaic-grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
        <TagInputPanel value={tag} onChange={setTag} />

        <section className="card" style={{ padding: 18, display: "grid", gap: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div>
              <p className="section-title">Submission state</p>
              <h2 style={{ margin: "6px 0 0", fontSize: 24 }}>Ready to write</h2>
            </div>
            <TagStatusChip status={state} />
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            <SetTagButton disabled={!tag.trim() || !isConnected} loading={loading} onClick={handleSetTag} />
            <p className="muted" style={{ margin: 0, fontSize: 13 }}>
              {isConnected ? "Connected on Base." : "Connect a wallet to continue."}
            </p>
          </div>

          <div
            style={{
              borderRadius: 22,
              padding: 16,
              background: "linear-gradient(135deg, rgba(196,181,253,0.24), rgba(219,234,254,0.62))",
              border: "1px solid var(--line)",
              display: "grid",
              gap: 8,
            }}
          >
            <p className="section-title">Latest result</p>
            <strong style={{ fontSize: 18 }}>{latestHash ? "Tag submitted" : "No recent transaction"}</strong>
            <span className="mono muted" style={{ fontSize: 12, wordBreak: "break-all" }}>
              {latestHash || "Your next successful write will appear here."}
            </span>
          </div>
        </section>
      </section>
    </div>
  );
}
