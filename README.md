# tag-registry

Public tag identity mini app for Base.

## Stack

- Next.js App Router
- TypeScript
- Wagmi
- Viem

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
- Successful tag submissions also call `utils/track.js` for dashboard attribution.

## Notes

- `app/layout.tsx` includes the Base app id and Talent verification meta tags.
- `lib/wagmi.ts` applies the builder code suffix at the Wagmi client level.
