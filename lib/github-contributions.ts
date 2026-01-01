
import { unstable_cache } from "next/cache";

export const getGithubContributions = unstable_cache(
  async () => {
    const username = "ubeyidah";
    const url = new URL(
      `/v4/${username}`,
      "https://github-contributions-api.jogruber.de"
    );

    const res = await fetch(url);
    const data = await res.json();

    const year = new Date().getFullYear();
    return {
      contributions: data.contributions,
      total: data.total[year],
    };
  },
  ["github-contributions-ubeyidah"],
  { revalidate: 60 * 60 * 24 } // refresh daily
);
