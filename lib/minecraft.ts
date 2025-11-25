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

export async function getPlayer(uuid: string): Promise<MojangResponse | null> {
	try {
		const res = await fetch(
			`https://api.minecraftservices.com/minecraft/profile/lookup/${encodeURIComponent(uuid)}`,
			{ next: { revalidate: 3600 } },
		);
		if (!res.ok) {
			console.warn(
				`[getPlayer] Non-OK response: ${res.status} ${res.statusText}`,
			);
			return null;
		}
		const data = (await res.json()) as MojangResponse;
		return data ?? null;
	} catch (error) {
		console.log("Could not get player", error);
		return null;
	}
}

export async function getPlayerHead(
	id: string,
): Promise<ResponseProfile | null> {
	const data = await getPlayer(id);
	if (!data) {
		return null;
	}
	return {
		name: data.name,
		playerhead: `https://mc-heads.net/avatar/${id}.png`,
	};
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
