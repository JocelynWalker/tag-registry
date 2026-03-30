import Link from "next/link";

export function ActionBar({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <Link href={primaryHref} className="button-primary" style={{ textAlign: "center" }}>
        {primaryLabel}
      </Link>
      <Link href={secondaryHref} className="button-secondary" style={{ textAlign: "center" }}>
        {secondaryLabel}
      </Link>
    </div>
  );
}
