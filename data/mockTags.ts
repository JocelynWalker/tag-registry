import type { TagRecord } from "@/types/tag";

export const mockTags: TagRecord[] = [
  { id: "builder", tag: "builder", owner: "0x84C1...9A7D", createdAt: "2026-03-28 11:42 UTC", status: "latest", color: "blue" },
  { id: "artist", tag: "artist", owner: "0x1AF0...22C3", createdAt: "2026-03-29 08:15 UTC", status: "public", color: "orange" },
  { id: "trader", tag: "trader", owner: "0x9BE4...0F18", createdAt: "2026-03-27 19:06 UTC", status: "set", color: "green" },
  { id: "writer", tag: "writer", owner: "0x28D6...F512", createdAt: "2026-03-29 22:04 UTC", status: "ready", color: "lilac" },
  { id: "maker", tag: "maker", owner: "0x6C40...7B0A", createdAt: "2026-03-30 00:36 UTC", status: "public", color: "blue" },
  { id: "curator", tag: "curator", owner: "0x10A1...AA90", createdAt: "2026-03-30 02:11 UTC", status: "latest", color: "orange" }
];
