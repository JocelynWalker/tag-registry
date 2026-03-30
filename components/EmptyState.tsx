import Link from "next/link";

export function EmptyState({
  title,
  text,
  actionHref,
  actionLabel,
}: {
  title: string;
  text: string;
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <section className="card" style={{ padding: 24, display: "grid", gap: 12, textAlign: "center" }}>
      <h2 style={{ margin: 0, fontSize: 22 }}>{title}</h2>
      <p className="muted" style={{ margin: 0 }}>
        {text}
      </p>
      <Link href={actionHref} className="button-primary" style={{ justifySelf: "center" }}>
        {actionLabel}
      </Link>
    </section>
  );
}
