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

## Notes

- `app/layout.tsx` includes the Base app id and Talent verification meta tags.
- `lib/wagmi.ts` includes a clear Builder Code placeholder for later replacement.
- `utils/track.js` is wired into the successful tag submission flow for transaction attribution.
