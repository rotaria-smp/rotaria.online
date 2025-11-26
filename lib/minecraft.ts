/**
 * Returns a player head image URL (Crafatar preferred; Minotar fallback).
 * Fetches UUID from Mojang API, caches result.
 */

type ResponseProfile = {
	name: string;
	playerhead: string;
};

type MojangResponse = {
	id: string;
	name: string;
};

export async function getPlayerHead(
	id: string,
): Promise<ResponseProfile | null> {
	try {
		const res = await fetch(
			`https://api.minecraftservices.com/minecraft/profile/lookup/${encodeURIComponent(
				id,
			)}`,
			{ next: { revalidate: 3600 } },
		);

		if (res.ok) {
			const data = (await res.json()) as MojangResponse;
			return {
				name: data?.name ?? id,
				playerhead: `https://mc-heads.net/avatar/${id}/100.png`,
			};
		} else {
			console.warn(
				`[getPlayerHead] Non-OK response: ${res.status} ${res.statusText}`,
			);
			return {
				name: "",
				playerhead: `https://mc-heads.net/avatar/${id}/100.png`,
			};
		}
	} catch (error) {
		// ignore fetch errors
		console.log("Could not fetch playerhead", error);
	}
	return null;
}

export type McStatusResponse = {
	online: boolean;
	players?: {
		online?: number;
		max?: number;
	};
};

export async function fetchStatus(): Promise<McStatusResponse> {
	try {
		const res = await fetch(
			"https://api.mcstatus.io/v2/status/java/mc.rotaria.online",
			{
				// Revalidate every 60s
				next: { revalidate: 60 },
			},
		);
		if (!res.ok) {
			return { online: false };
		}
		return (await res.json()) as McStatusResponse;
	} catch {
		return { online: false };
	}
}
