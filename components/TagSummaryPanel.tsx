import Link from "next/link";
import { TagStatusChip } from "@/components/TagStatusChip";

export function TagSummaryPanel({
  title,
  tag,
  owner,
  status,
  href,
}: {
  title: string;
  tag: string;
  owner: string;
  status: "ready" | "set" | "latest" | "public";
  href: string;
}) {
  return (
    <section className="card" style={{ padding: 18, display: "grid", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <p className="section-title">{title}</p>
        <TagStatusChip status={status} quiet />
      </div>
      <div className="hero-tag">{tag}</div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <span className="mono muted" style={{ fontSize: 13 }}>
          {owner}
        </span>
        <Link href={href} className="button-ghost">
          View detail
        </Link>
      </div>
    </section>
  );
}
