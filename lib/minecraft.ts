/**
 * Returns a player head image URL (Crafatar preferred; Minotar fallback).
 * Fetches UUID from Mojang API, caches result.
 */

type ResponseProfile = {
	name: string;
	playerhead: string;
}

type MojangResponse = {
	id: string;
	name: string;
}

export async function getPlayerHead(id: string): Promise<ResponseProfile | null> {
  try {
    const res = await fetch(
      `https://api.minecraftservices.com/minecraft/profile/lookup/${encodeURIComponent(
        id
      )}`,
      { next: { revalidate: 3600 } }
    );

    if (res.ok) {
      const data = await res.json() as MojangResponse;
			return {
				name: data.name,
				playerhead: `https://mc-heads.net/avatar/${id}.png`
			}
    }
  } catch {
    // ignore fetch errors
  }

	return null;
}