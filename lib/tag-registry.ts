"use client";

import { readContract, waitForTransactionReceipt, writeContract } from "wagmi/actions";
import { mockTags } from "@/data/mockTags";
import type { TagRecord } from "@/types/tag";
import { CONTRACT_ADDRESS, tagRegistryAbi, wagmiConfig } from "@/lib/wagmi";

export async function getTagByOwner(owner?: `0x${string}`): Promise<string> {
  if (!owner) return "";
  try {
    const result = await readContract(wagmiConfig, {
      abi: tagRegistryAbi,
      address: CONTRACT_ADDRESS,
      functionName: "tag",
      args: [owner],
    });
    return result;
  } catch {
    return "";
  }
}

export async function submitTag(tag: string) {
  const hash = await writeContract(wagmiConfig, {
    abi: tagRegistryAbi,
    address: CONTRACT_ADDRESS,
    functionName: "setTag",
    args: [tag],
  });

  await waitForTransactionReceipt(wagmiConfig, { hash });
  return hash;
}

export function getMockTagById(id: string): TagRecord | undefined {
  return mockTags.find((item) => item.id === id);
}

export function getTagDetailRecord(id: string): TagRecord {
  const existing = getMockTagById(id);
  if (existing) return existing;

  return {
    id,
    tag: id,
    owner: "0x0000...0000",
    createdAt: "Pending chain sync",
    status: "public",
    color: "blue",
  };
}

export function getRecentPublicTags(): TagRecord[] {
  return mockTags;
}
