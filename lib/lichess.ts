import { unstable_cache } from "next/cache";

type LichessPerf = {
  games: number;
  rating: number;
  rd?: number;
};

export type LichessProfile = {
  username: string;
  title?: string;
  count?: {
    all: number;
  };
  perfs?: Record<string, LichessPerf>;
};

export const getLichessProfile = unstable_cache(
  async (): Promise<LichessProfile | null> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
      const response = await fetch("https://lichess.org/api/user/ubeyidah", {
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });

      if (!response.ok) {
        return null;
      }

      return (await response.json()) as LichessProfile;
    } catch {
      return null;
    } finally {
      clearTimeout(timeoutId);
    }
  },
  ["lichess-profile-ubeyidah"],
  { revalidate: 60 * 60 }
);
