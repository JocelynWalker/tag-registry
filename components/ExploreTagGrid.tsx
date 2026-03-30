import type { TagRecord } from "@/types/tag";
import { IdentityTagCard } from "@/components/IdentityTagCard";

export function ExploreTagGrid({ records }: { records: TagRecord[] }) {
  return (
    <section className="mosaic-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
      {records.map((record, index) => (
        <div key={record.id} style={{ gridColumn: index % 3 === 0 ? "span 2" : "span 1" }}>
          <IdentityTagCard record={record} featured={index % 3 === 0} />
        </div>
      ))}
    </section>
  );
}
