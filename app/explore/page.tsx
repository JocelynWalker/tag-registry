import { ExploreTagGrid } from "@/components/ExploreTagGrid";
import { MosaicHeader } from "@/components/MosaicHeader";
import { mockTags } from "@/data/mockTags";

export default function ExplorePage() {
  return (
    <div className="page-stack">
      <MosaicHeader
        eyebrow="Explore"
        title="Scan public labels."
        subtitle="A lightweight wall of tags, owners, and current visibility states."
        compact
      />

      <section className="card" style={{ padding: 18, display: "grid", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div>
            <p className="section-title">Role wall</p>
            <h2 style={{ margin: "6px 0 0", fontSize: 24 }}>Identity mosaic</h2>
          </div>
          <span className="chip" style={{ background: "var(--surface-soft)", color: "var(--blue)" }}>
            {mockTags.length} tags
          </span>
        </div>
        <ExploreTagGrid records={mockTags} />
      </section>
    </div>
  );
}
