import Link from "next/link";
import { WalletButton } from "@/components/WalletButton";
import { SparkIcon, TagIcon } from "@/components/icons";

export function MosaicHeader({
  eyebrow,
  title,
  subtitle,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  compact?: boolean;
}) {
  return (
    <header className="card" style={{ padding: compact ? 18 : 22, overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 10 }}>
          <span className="chip" style={{ background: "var(--surface-soft)", color: "var(--blue)" }}>
            <SparkIcon width={14} height={14} />
            {eyebrow}
          </span>
          <div style={{ display: "grid", gap: 8 }}>
            <h1 style={{ margin: 0, fontSize: compact ? 30 : 38, lineHeight: 0.95, letterSpacing: "-0.05em" }}>
              {title}
            </h1>
            <p style={{ margin: 0, maxWidth: 360, color: "var(--muted)", fontSize: 14 }}>{subtitle}</p>
          </div>
        </div>
        <WalletButton />
      </div>
      {!compact && (
        <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
          <Link href="/set" className="button-primary">
            Set my tag
          </Link>
          <Link href="/explore" className="button-secondary">
            Explore tags
          </Link>
          <span className="chip" style={{ background: "var(--peach)", color: "var(--orange)", borderColor: "rgba(249,115,22,0.18)" }}>
            <TagIcon width={14} height={14} />
            Public identity
          </span>
        </div>
      )}
    </header>
  );
}
