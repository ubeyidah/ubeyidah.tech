import { getGithubContributions } from "@/lib/github-contributions";
import GithubActivity from "./github-activity";

export default async function Page() {
  const { contributions } = await getGithubContributions();

  return <div className="py-6"><GithubActivity data={contributions} /></div>;
}
