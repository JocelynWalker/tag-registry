"use client";

import { createStorage, cookieStorage, createConfig, http } from "wagmi";
import { base } from "viem/chains";
import { baseAccount, injected } from "wagmi/connectors";

export const APP_NAME = "tag-registry" as const;
export const APP_URL = "https://tag-registry.vercel.app" as const;
export const APP_OG_IMAGE = `${APP_URL}/og.png` as const;
export const CONTRACT_ADDRESS = "0xef6e0849d45ce368d4635747ba583fed60199a7d" as const;
export const BUILDER_CODE = "bc_mew6jx8l" as const;
export const BUILDER_CODE_DATA_SUFFIX =
  "0x62635f6d6577366a78386c0b0080218021802180218021802180218021" as const;

export const tagRegistryAbi = [
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "setTag",
    inputs: [{ name: "_tag", type: "string" }],
    outputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    name: "tag",
    inputs: [{ name: "", type: "address" }],
    outputs: [{ name: "", type: "string" }],
  },
  {
    type: "event",
    anonymous: false,
    name: "TagSet",
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: false, name: "tag", type: "string" },
    ],
  },
] as const;

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    injected(),
    baseAccount({
      appName: APP_NAME,
    }),
  ],
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  transports: {
    [base.id]: http(),
  },
  dataSuffix: BUILDER_CODE_DATA_SUFFIX,
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
