import Link from "next/link";
import type { TagRecord } from "@/types/tag";
import { TagStatusChip } from "@/components/TagStatusChip";

const colorMap = {
  blue: "linear-gradient(135deg, #2563eb, #60a5fa)",
  orange: "linear-gradient(135deg, #f97316, #fb923c)",
  green: "linear-gradient(135deg, #10b981, #34d399)",
  lilac: "linear-gradient(135deg, #8b5cf6, #c4b5fd)",
};

export function IdentityTagCard({ record, featured = false }: { record: TagRecord; featured?: boolean }) {
  return (
    <Link
      href={`/tags/${record.id}`}
      className="card"
      style={{
        padding: featured ? 18 : 16,
        display: "grid",
        gap: 14,
        background: featured ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.9)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start" }}>
        <TagStatusChip status={record.status} quiet />
        <span className="muted mono" style={{ fontSize: 12 }}>
          {record.owner}
        </span>
      </div>
      <div
        style={{
          borderRadius: 24,
          minHeight: featured ? 110 : 88,
          padding: "18px 18px",
          display: "flex",
          alignItems: "end",
          background: colorMap[record.color],
          color: "white",
        }}
      >
        <div style={{ fontSize: featured ? 40 : 28, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.05em" }}>
          {record.tag}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
        <span style={{ fontWeight: 800 }}>Open tag panel</span>
        <span className="muted" style={{ fontSize: 12 }}>
          {record.createdAt}
        </span>
      </div>
    </Link>
  );
}
