import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink } from "@hugeicons/core-free-icons";
import { getLichessProfile } from "@/lib/lichess";

const formats = [
  { key: "bullet", label: "Bullet" },
  { key: "blitz", label: "Blitz" },
  { key: "rapid", label: "Rapid" },
] as const;

export default async function HobbySection() {
  const profile = await getLichessProfile();

  return (
    <section id="hobbies">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
          <div className="mb-3 text-5xl leading-none text-primary" aria-hidden="true">
            ♞
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">Beyond the Code</h2>
          <p className="mb-5 text-base text-muted-foreground">
            A little friendly competition on the board
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col justify-between border-b md:border-r md:border-b-0">
            <div className="border-b bg-secondary/50 p-4 dark:bg-secondary/20">
              <p className="font-heading text-lg font-medium tracking-wider">
                Chess is my reset button
              </p>
            </div>
            <div className="space-y-4 p-4 py-8">
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                When I&apos;m away from the editor, you&apos;ll usually find me
                playing chess on Lichess. I enjoy the mix of patience,
                creativity, and problem-solving that every game brings.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="rounded-full border bg-background px-3 py-1 font-mono">
                  @ubeyidah
                </span>
                <span>Open to a game?</span>
              </div>
            </div>
            <div className="border-t">
              <a
                href="https://lichess.org/@/ubeyidah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                <span>Challenge me on Lichess</span>
                <HugeiconsIcon icon={ExternalLink} size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="border-b bg-secondary/50 p-4 dark:bg-secondary/20">
              <p className="font-heading text-lg font-medium tracking-wider">
                Current profile
              </p>
            </div>
            {profile ? (
              <>
                <div className="grid grid-cols-3 divide-x border-b">
                  {formats.map(({ key, label }) => {
                    const perf = profile.perfs?.[key];
                    return (
                      <div key={key} className="p-4">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-1 font-mono text-xl font-medium">
                          {perf?.rating ?? "—"}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 p-4 text-sm text-muted-foreground">
                  <span>
                    {profile.count?.all?.toLocaleString() ?? "—"} games played
                  </span>
                  <span>Updated from Lichess</span>
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center p-4 py-8">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Find my latest games, ratings, and challenges directly on my
                  public Lichess profile.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
