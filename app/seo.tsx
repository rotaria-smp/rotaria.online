import type { Metadata } from "next";

export const SEO: Metadata = {
	metadataBase: new URL("https://rotaria.online"),
	title: {
		default: "Rotaria SMP – Modded Minecraft Community",
		template: "%s | Rotaria SMP",
	},
	description:
		"Rotaria SMP is a relaxed, cooperative modded crate Minecraft survival server focusing on seasons, community projects, and fair play.",
	keywords: [
		"Rotaria SMP",
		"modded minecraft server",
		"minecraft community",
		"crate mod server",
		"forge server",
		"neo forge",
		"minecraft seasons",
		"survival multiplayer",
		"minecraft automation",
	],
	authors: [{ name: "Rotaria Staff" }],
	creator: "Rotaria Staff",
	publisher: "Rotaria SMP",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://rotaria.online",
		siteName: "Rotaria SMP",
		title: "Rotaria SMP – Modded Minecraft Community",
		description: "Seasonal and collaborative modded Minecraft survival.",
		images: [
			{
				url: "/seo/og_banner.png",
				width: 1200,
				height: 630,
				alt: "Rotaria SMP Server spawn train station",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Rotaria SMP – Modded Minecraft Community",
		description: "Season-based cooperative modded Minecraft survival.",
		images: ["/seo/og_banner.png"],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	category: "gaming",
	alternates: {
		canonical: "https://rotaria.online",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
};
