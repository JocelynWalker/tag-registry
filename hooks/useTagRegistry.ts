"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getTagByOwner } from "@/lib/tag-registry";

export function useCurrentTag() {
  const { address, isConnected } = useAccount();
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      if (!isConnected || !address) {
        if (mounted) {
          setTag("");
          setLoading(false);
        }
        return;
      }

      const nextTag = await getTagByOwner(address as `0x${string}`);
      if (mounted) {
        setTag(nextTag);
        setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [address, isConnected]);

  return { address, isConnected, tag, loading, setTag };
}
