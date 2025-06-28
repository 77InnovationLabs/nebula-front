"use client"

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { avalancheFuji, sepolia } from "wagmi/chains";

export default getDefaultConfig({
    // Our App's name
    appName: "NebulaQuest",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
    chains: [avalancheFuji, sepolia],
    ssr: false
})
