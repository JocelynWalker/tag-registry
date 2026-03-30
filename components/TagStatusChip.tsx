import clsx from "clsx";

const palette = {
  ready: { bg: "var(--mint)", text: "var(--green)" },
  set: { bg: "var(--peach)", text: "var(--orange)" },
  latest: { bg: "var(--surface-soft)", text: "var(--blue)" },
  public: { bg: "#f3e8ff", text: "#8b5cf6" },
};

export function TagStatusChip({ status, quiet = false }: { status: keyof typeof palette; quiet?: boolean }) {
  const tone = palette[status];
  return (
    <span
      className={clsx("chip", quiet && "quiet")}
      style={{
        background: tone.bg,
        color: tone.text,
        borderColor: "rgba(31,41,55,0.06)",
        padding: quiet ? "6px 10px" : "8px 12px",
      }}
    >
      {status}
    </span>
  );
}
