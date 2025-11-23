import type { Metadata } from "next";
import { SEO } from "./seo";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const pixelSans = Pixelify_Sans({
	variable: "--font-pixelify-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = SEO;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${pixelSans.variable} antialiased`}>
				<Navigation />
				{children}
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
