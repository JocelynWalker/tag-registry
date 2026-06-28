# tag-registry

A public tag identity mini app for Base.

`tag-registry` provides a simple interface for setting, viewing, sharing, and exploring public tag identities. It is built with the Next.js App Router and integrates with an onchain contract on Base.

## Repository

https://github.com/JocelynWalker/tag-registry.git

## Overview

This project is a lightweight identity hub centered on public tags.

Users can:

- Visit the main identity hub.
- Set a public tag.
- View a tag detail page.
- View their own tag.
- Explore other tags.
- Share tag pages with preview metadata.

The app is designed as a compact Base mini app with a small route surface and a focused contract interaction.

## Features

- Public tag identity pages.
- Dedicated route for setting a tag.
- Individual tag detail pages.
- Personal tag view.
- Explore page for browsing.
- Share and embed metadata configured in the app layout.
- Public assets served from the `public/` directory.
- Manifest scaffold included for Farcaster-compatible discovery flows.
- Builder attribution configured for successful tag submissions.

## Tech Stack

- Next.js App Router
- TypeScript
- Wagmi
- Viem
- Base connector

## Routes

| Route | Description |
| --- | --- |
| `/` | Identity Hub |
| `/set` | Set Tag |
| `/tags/[id]` | Tag Detail |
| `/my` | My Tag |
| `/explore` | Explore |

## Contract

The app writes to the following contract:

- Address: `0xef6e0849d45ce368d4635747ba583fed60199a7d`
- Function: `setTag(string _tag)`

## Attribution

Builder attribution is included in the project configuration.

- Builder Code: `bc_mew6jx8l`
- ERC-8021 data suffix: `0x62635f6d6577366a78386c0b0080218021802180218021802180218021`

Successful tag submissions call:

- `utils/track.js`

The Wagmi configuration applies the builder code suffix globally for write operations.

## Discovery and Previews

Share and embed metadata are configured in:

- `app/layout.tsx`

Public assets are stored in:

- `public/`

The Farcaster manifest scaffold is located at:

- `public/.well-known/farcaster.json`
