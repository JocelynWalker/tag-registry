import type { ReactNode } from "react";
import { BottomNav } from "@/components/BottomNav";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>tag-registry</title>
        <meta name="description" content="Set a short public identity tag on Base." />
        <meta name="base:app_id" content="69ca26090e56240fea198f0e" />
        <meta
          name="talentapp:project_verification"
          content="a92fda0cd504ab02e622854338c39b2d210ff1ca609e7d128527d935db352e9a4ecaea87b6ea827c8a707f01f63c13e529cb3d25fe5f5c1eae8ea803226655b2"
        />
        <meta property="og:title" content="tag-registry" />
        <meta property="og:description" content="Public tag identity for builders, artists, traders, and more." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </head>
      <body>
        <AppProviders>
          <div className="app-shell">
            <main className="page-shell">{children}</main>
            <BottomNav />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
