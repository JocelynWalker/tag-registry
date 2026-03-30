"use client";

import { injected } from "@wagmi/core";
import { createConfig, http } from "wagmi";
import { base } from "viem/chains";

export const CONTRACT_ADDRESS = "0xef6e0849d45ce368d4635747ba583fed60199a7d" as const;

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

// TODO: Replace this placeholder with the official Builder Code suffix once provided.
// Example target shape: `?builderCode=YOUR_BUILDER_CODE_SUFFIX`
export const BUILDER_CODE_DATA_SUFFIX = "TODO_REPLACE_WITH_BUILDER_CODE_SUFFIX";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [8453]: http(),
  },
});
