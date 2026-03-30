declare module "viem" {
  export type Address = `0x${string}`;
  export function encodeFunctionData(parameters: any): `0x${string}`;
}

declare module "viem/chains" {
  export const base: any;
}
