import type { Metadata } from "next";

export const SEO: Metadata = {
	metadataBase: new URL("https://rotaria.online"),
	title: {
		default: "Rotaria SMP – Create Mod + 200+ Mods EU Community",
		template: "%s | Rotaria SMP",
	},
	description:
		"Rotaria SMP is a relaxed, cooperative Create-focused modded Minecraft survival community with 200+ carefully curated mods. EU-hosted for low latency yet home to players worldwide, featuring seasonal progression, community megaprojects, balanced tech & magic, and fair play.",
	keywords: [
		"Rotaria SMP",
		"modded minecraft server",
		"create mod server",
		"create modded survival",
		"200 mods minecraft",
		"eu minecraft server",
		"low latency minecraft",
		"global minecraft community",
		"seasonal minecraft server",
		"neo forge server",
		"modded smp",
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
		title: "Rotaria SMP – Create Mod + 200+ Mods EU Community",
		description:
			"Create-centered modded Minecraft SMP with 200+ curated mods, EU hosting, global players, seasonal worlds, automation & community builds.",
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
		title: "Rotaria SMP – Create Mod + 200+ Mods EU Community",
		description:
			"Create-focused 200+ mod curated EU survival SMP with seasonal resets and global players.",
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
