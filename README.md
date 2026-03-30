# tag-registry

Public tag identity mini app for Base.

## Stack

- Next.js App Router
- TypeScript
- Wagmi
- Viem
- Base Account connector

## Routes

- `/` Identity Hub
- `/set` Set Tag
- `/tags/[id]` Tag Detail
- `/my` My Tag
- `/explore` Explore

## Contract

- Address: `0xef6e0849d45ce368d4635747ba583fed60199a7d`
- Function: `setTag(string _tag)`

## Attribution

- Builder Code: `bc_mew6jx8l`
- ERC-8021 data suffix: `0x62635f6d6577366a78386c0b0080218021802180218021802180218021`
- Successful tag submissions call `utils/track.js` for dashboard attribution.
- Wagmi config applies the builder code suffix globally for writes.

## Discovery and previews

- Share/embed tags are included in `app/layout.tsx`.
- Public assets live in `public/`.
- Manifest scaffold lives at `public/.well-known/farcaster.json`.

## Remaining manual step

Replace the placeholder `accountAssociation` values in `public/.well-known/farcaster.json` with your signed values from Base.dev or the manifest signing flow. That is the remaining requirement for a fully valid signed manifest on clients that still read it before April 9, 2026.
