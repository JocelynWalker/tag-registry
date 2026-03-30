declare module "viem" {
  export type Address = `0x${string}`;
}

declare module "viem/chains" {
  export const base: unknown;
}
