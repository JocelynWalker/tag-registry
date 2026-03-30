export type TagRecord = {
  id: string;
  tag: string;
  owner: string;
  createdAt: string;
  status: "ready" | "set" | "latest" | "public";
  color: "blue" | "orange" | "green" | "lilac";
};
