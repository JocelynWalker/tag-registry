import Link from "next/link";
import { CopyTagButton } from "@/components/CopyTagButton";
import { MosaicHeader } from "@/components/MosaicHeader";
import { TagStatusChip } from "@/components/TagStatusChip";
import { getTagDetailRecord } from "@/lib/tag-registry";

export default async function TagDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const record = getTagDetailRecord(id);

  return (
    <div className="page-stack">
      <MosaicHeader
        eyebrow="Tag detail"
        title="Public label panel."
        subtitle="A single tag with owner, state, and share-ready details."
        compact
      />

      <section
        className="card"
        style={{
          padding: 20,
          display: "grid",
          gap: 18,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(219,234,254,0.54) 56%, rgba(209,250,229,0.42) 100%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <TagStatusChip status={record.status} />
          <CopyTagButton value={record.tag} />
        </div>
        <div className="hero-tag" style={{ minHeight: 132, justifyContent: "flex-start", paddingLeft: 22 }}>
          {record.tag}
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          <div className="card" style={{ padding: 14, boxShadow: "none" }}>
            <p className="section-title">Owner</p>
            <div className="mono" style={{ marginTop: 6, fontWeight: 700 }}>
              {record.owner}
            </div>
          </div>
          <div className="card" style={{ padding: 14, boxShadow: "none" }}>
            <p className="section-title">Published</p>
            <div style={{ marginTop: 6, fontWeight: 700 }}>{record.createdAt}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Link href="/explore" className="button-secondary" style={{ textAlign: "center" }}>
            Back to explore
          </Link>
          <Link href="/set" className="button-primary" style={{ textAlign: "center" }}>
            Set a new tag
          </Link>
        </div>
      </section>
    </div>
  );
}
