"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobeIcon, ProfileIcon, SparkIcon, TagIcon } from "@/components/icons";

const items = [
  { href: "/", label: "Hub", icon: SparkIcon },
  { href: "/set", label: "Set", icon: TagIcon },
  { href: "/explore", label: "Explore", icon: GlobeIcon },
  { href: "/my", label: "My Tag", icon: ProfileIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="card"
      style={{
        position: "fixed",
        left: "50%",
        bottom: 12,
        transform: "translateX(-50%)",
        width: "min(calc(100% - 24px), 480px)",
        padding: 10,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 8,
        backdropFilter: "blur(16px)",
        zIndex: 20,
      }}
    >
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              display: "grid",
              justifyItems: "center",
              gap: 6,
              padding: "10px 8px",
              borderRadius: 18,
              background: active ? "var(--surface-soft)" : "transparent",
              color: active ? "var(--blue)" : "var(--muted)",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            <Icon width={18} height={18} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
