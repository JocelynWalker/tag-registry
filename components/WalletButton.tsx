"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

function truncate(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const preferredConnector = connectors.find((connector) => connector.id === "baseAccount") ?? connectors[0];

  if (isConnected && address) {
    return (
      <button className="button-ghost" onClick={() => disconnect()} type="button">
        {truncate(address)}
      </button>
    );
  }

  return (
    <button
      className="button-ghost"
      type="button"
      disabled={!preferredConnector || isPending}
      onClick={() => preferredConnector && connect({ connector: preferredConnector })}
    >
      {isPending ? "Connecting wallet" : "Connect wallet"}
    </button>
  );
}
