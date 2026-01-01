
import { unstable_cache } from "next/cache";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

export const getGithubContributions = unstable_cache(
  async () => {
    const username = "ubeyidah";
    const url = new URL(
      `/v4/${username}`,
      "https://github-contributions-api.jogruber.de"
    );

    const res = await fetch(url);
    const data = await res.json();

    const lastYear = new Date().getFullYear() - 1;
    const filteredContributions = data.contributions.filter(
      (contribution: Contribution) => contribution.date.startsWith(`${lastYear}-`)
    );

    return {
      contributions: filteredContributions,
      total: data.total[lastYear],
    };
  },
  ["github-contributions-ubeyidah"],
  { revalidate: 60 * 60 * 24 } // refresh daily
);
