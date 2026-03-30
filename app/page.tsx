import Link from "next/link";
import { MosaicHeader } from "@/components/MosaicHeader";
import { mockTags } from "@/data/mockTags";
import { ActionBar } from "@/components/ActionBar";
import { ExploreTagGrid } from "@/components/ExploreTagGrid";
import { TagSummaryPanel } from "@/components/TagSummaryPanel";

export default function HomePage() {
  const featured = mockTags[0];

  return (
    <div className="page-stack">
      <MosaicHeader
        eyebrow="Identity hub"
        title="Claim a public role."
        subtitle="Set one tag, keep it public, and make your Base identity easy to read."
      />

      <section className="mosaic-grid home-split" style={{ gridTemplateColumns: "1fr", alignItems: "stretch" }}>
        <TagSummaryPanel
          title="Featured tag"
          tag={featured.tag}
          owner={featured.owner}
          status={featured.status}
          href={`/tags/${featured.id}`}
        />
        <div className="card" style={{ padding: 18, display: "grid", gap: 14, alignContent: "space-between" }}>
          <div style={{ display: "grid", gap: 10 }}>
            <p className="section-title">Quick flow</p>
            <h2 style={{ margin: 0, fontSize: 28, lineHeight: 0.95, letterSpacing: "-0.05em" }}>
              Set fast.
              <br />
              Share clean.
            </h2>
            <p className="muted" style={{ margin: 0 }}>
              Pick a short public label like builder, artist, or trader.
            </p>
          </div>
          <ActionBar primaryHref="/set" primaryLabel="Set my tag" secondaryHref="/my" secondaryLabel="View my tag" />
          <Link href="/explore" className="button-ghost" style={{ textAlign: "center" }}>
            Open public wall
          </Link>
        </div>
      </section>

      <section className="card" style={{ padding: 18, display: "grid", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div>
            <p className="section-title">Public mosaic</p>
            <h2 style={{ margin: "6px 0 0", fontSize: 24 }}>Explore tags</h2>
          </div>
          <span className="chip" style={{ background: "var(--mint)", color: "var(--green)" }}>
            latest
          </span>
        </div>
        <ExploreTagGrid records={mockTags.slice(0, 4)} />
      </section>
    </div>
  );
}
