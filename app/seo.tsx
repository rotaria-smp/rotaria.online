import type { Metadata } from "next";

export const SEO: Metadata = {
	metadataBase: new URL("https://rotaria.online"),
	title: {
		default: "Rotaria SMP – Modded Minecraft Community",
		template: "%s | Rotaria SMP"
	},
	description: "Rotaria SMP is a relaxed, cooperative modded Minecraft survival server focusing on seasons, community projects, balanced tech & magic, and fair play.",
	keywords: [
		"Rotaria SMP",
		"modded minecraft server",
		"minecraft community",
		"create mod server",
		"fabric server",
		"forge server",
		"neo forge",
		"minecraft seasons",
		"survival multiplayer",
		"minecraft automation"
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
		description: "Seasonal, collaborative, balanced modded Minecraft survival.",
		images: [
			{
				url: "/og-banner.jpg",
				width: 1200,
				height: 630,
				alt: "Rotaria SMP Server Overview"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		site: "@rotaria_smp",
		creator: "@rotaria_smp",
		title: "Rotaria SMP – Modded Minecraft Community",
		description: "Season-based cooperative modded Minecraft survival.",
		images: ["/og-banner.jpg"]
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png"
	},
	themeColor: "#111111",
	manifest: "/site.webmanifest",
	category: "gaming",
	alternates: {
		canonical: "https://rotaria.online"
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1
		}
	}
};