import type { ReactNode } from "react";
import { BottomNav } from "@/components/BottomNav";
import { AppProviders } from "@/components/providers/AppProviders";
import { APP_NAME, APP_OG_IMAGE, APP_URL, BUILDER_CODE } from "@/lib/wagmi";
import "./globals.css";

const frame = {
  version: "next",
  imageUrl: APP_OG_IMAGE,
  button: {
    title: "Set my tag",
    action: {
      type: "launch_frame",
      name: APP_NAME,
      url: APP_URL,
      splashImageUrl: `${APP_URL}/splash.png`,
      splashBackgroundColor: "#F8FAFC",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>tag-registry</title>
        <meta name="description" content="Set a short public identity tag on Base." />
        <meta name="base:app_id" content="69ca26090e56240fea198f0e" />
        <meta name="base:builder_code" content={BUILDER_CODE} />
        <meta name="fc:frame" content={JSON.stringify(frame)} />
        <meta name="fc:miniapp" content={JSON.stringify(frame)} />
        <meta
          name="talentapp:project_verification"
          content="a92fda0cd504ab02e622854338c39b2d210ff1ca609e7d128527d935db352e9a4ecaea87b6ea827c8a707f01f63c13e529cb3d25fe5f5c1eae8ea803226655b2"
        />
        <link rel="canonical" href={APP_URL} />
        <link rel="icon" href="/icon.png" />
        <meta property="og:title" content="tag-registry" />
        <meta property="og:description" content="Public tag identity for builders, artists, traders, and more." />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={APP_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="tag-registry" />
        <meta name="twitter:description" content="Set a short public identity tag on Base." />
        <meta name="twitter:image" content={APP_OG_IMAGE} />
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
