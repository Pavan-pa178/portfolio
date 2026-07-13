"use client";

import { useEffect, useState } from "react";
import Section from "@/components/Section";
import { siteConfig } from "@/lib/content";
import { Code2, CheckCircle2, ExternalLink, Loader2, AlertCircle } from "lucide-react";

type DiffStat = { difficulty: string; count: number };

type LeetStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
  acceptanceRate: number;
};

// Uses LeetCode's own public GraphQL endpoint — no API key needed.
// The CORS proxy is required because LeetCode blocks direct browser→api.leetcode.com calls.
// corsproxy.io is a free, reliable open proxy used widely for exactly this purpose.
async function fetchLeetCodeStats(username: string): Promise<LeetStats> {
  const query = {
    query: `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          profile { ranking }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
            totalSubmissionNum {
              difficulty
              count
            }
          }
        }
        allQuestionsCount { difficulty count }
      }
    `,
    variables: { username },
  };

  const targetUrl = encodeURIComponent("https://leetcode.com/graphql/");
  const res = await fetch(`https://corsproxy.io/?url=${targetUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Referer": "https://leetcode.com",
    },
    body: JSON.stringify(query),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();

  const user = json?.data?.matchedUser;
  if (!user) throw new Error("User not found");

  const ac: DiffStat[]    = user.submitStats.acSubmissionNum;
  const totals: { difficulty: string; count: number }[] = json.data.allQuestionsCount;

  const get = (arr: DiffStat[], d: string) =>
    arr.find((x) => x.difficulty === d)?.count ?? 0;

  // Calculate acceptance rate from total submissions
  const totalSub  = user.submitStats.totalSubmissionNum;
  const totalAC   = get(ac as DiffStat[], "All");
  const totalAll  = get(totalSub as DiffStat[], "All");
  const acceptanceRate = totalAll > 0 ? (totalAC / totalAll) * 100 : 0;

  return {
    totalSolved:   get(ac, "All"),
    easySolved:    get(ac, "Easy"),
    mediumSolved:  get(ac, "Medium"),
    hardSolved:    get(ac, "Hard"),
    totalEasy:     get(totals, "Easy"),
    totalMedium:   get(totals, "Medium"),
    totalHard:     get(totals, "Hard"),
    ranking:       user.profile.ranking ?? 0,
    acceptanceRate,
  };
}

function StatBar({
  label,
  solved,
  total,
  colorClass,
  bgClass,
}: {
  label: string;
  solved: number;
  total: number;
  colorClass: string;
  bgClass: string;
}) {
  const pct = total > 0 ? Math.min(100, Math.round((solved / total) * 100)) : 0;
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-full ${bgClass} ${colorClass}`}>
            {label}
          </span>
          <span className="font-display text-base font-bold text-ink">{solved}</span>
        </div>
        <span className="font-mono text-xs text-muted-soft">/ {total} ({pct}%)</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${bgClass.replace("bg-", "bg-").replace("/10", "")}`}
          style={{ width: `${pct}%`, backgroundColor: colorClass.includes("emerald") ? "#10b981" : colorClass.includes("amber") ? "#f59e0b" : "#ef4444" }}
        />
      </div>
    </div>
  );
}

export default function LeetCode() {
  const [stats, setStats] = useState<LeetStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchLeetCodeStats(siteConfig.leetcodeUsername)
      .then(setStats)
      .catch((err) => setError(err.message ?? "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section
      id="leetcode"
      index="07"
      title="LeetCode"
      subtitle="Consistently practising Data Structures & Algorithms."
    >
      <div className="max-w-2xl">
        <div className="border border-border rounded-2xl overflow-hidden bg-surface">
          {/* Header bar */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-border bg-accent-tint">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Code2 size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold text-ink leading-tight">
                  {siteConfig.leetcodeUsername}
                </p>
                <p className="font-mono text-[11px] text-muted-soft">LeetCode Profile</p>
              </div>
            </div>
            <a
              href={siteConfig.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-strong border border-accent/40 hover:border-accent rounded-full px-3 py-1.5 transition-colors"
            >
              View profile <ExternalLink size={11} />
            </a>
          </div>

          {/* Body */}
          <div className="px-8 py-7">
            {loading && (
              <div className="flex items-center justify-center py-12 gap-3 text-muted">
                <Loader2 size={18} className="animate-spin text-accent" />
                <span className="font-mono text-sm">Loading live stats...</span>
              </div>
            )}

            {!loading && error && (
              <div className="py-8 text-center space-y-3">
                <AlertCircle size={24} className="text-muted-soft mx-auto" />
                <p className="font-mono text-sm text-muted-soft">
                  Couldn&apos;t load live stats right now.
                </p>
                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-accent underline"
                >
                  View profile directly <ExternalLink size={11} />
                </a>
              </div>
            )}

            {!loading && stats && (
              <div className="space-y-7">
                {/* Top stats row */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="border border-border rounded-xl py-4 px-3">
                    <p className="font-display text-3xl font-bold text-ink">
                      {stats.totalSolved}
                    </p>
                    <p className="font-mono text-[11px] text-muted-soft mt-1">Solved</p>
                  </div>
                  <div className="border border-border rounded-xl py-4 px-3">
                    <p className="font-display text-3xl font-bold text-ink">
                      {stats.acceptanceRate > 0
                        ? `${stats.acceptanceRate.toFixed(0)}%`
                        : "—"}
                    </p>
                    <p className="font-mono text-[11px] text-muted-soft mt-1">Acceptance</p>
                  </div>
                  <div className="border border-border rounded-xl py-4 px-3">
                    <p className="font-display text-3xl font-bold text-ink">
                      {stats.ranking > 0
                        ? `#${stats.ranking.toLocaleString()}`
                        : "—"}
                    </p>
                    <p className="font-mono text-[11px] text-muted-soft mt-1">Ranking</p>
                  </div>
                </div>

                {/* Difficulty bars */}
                <div className="space-y-5">
                  <StatBar
                    label="Easy"
                    solved={stats.easySolved}
                    total={stats.totalEasy}
                    colorClass="text-emerald-600"
                    bgClass="bg-emerald-50"
                  />
                  <StatBar
                    label="Medium"
                    solved={stats.mediumSolved}
                    total={stats.totalMedium}
                    colorClass="text-amber-500"
                    bgClass="bg-amber-50"
                  />
                  <StatBar
                    label="Hard"
                    solved={stats.hardSolved}
                    total={stats.totalHard}
                    colorClass="text-red-500"
                    bgClass="bg-red-50"
                  />
                </div>
                
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  {/*
                  <CheckCircle2 size={13} className="text-accent" />
                   
                  <p className="font-mono text-[11px] text-muted-soft">
                    Stats fetched live from LeetCode
                  </p>
                  */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
