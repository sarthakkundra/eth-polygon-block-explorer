import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon } from "wagmi/chains";

const config = getDefaultConfig({
	appName: "Tech Assignment",
	projectId: "bvsdgas_xcvasdf",
	chains: [mainnet, polygon],
	ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;
