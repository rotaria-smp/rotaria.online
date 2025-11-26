import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [new URL("https://mc-heads.net/avatar/*/100.png")],
	},
};

export default nextConfig;
