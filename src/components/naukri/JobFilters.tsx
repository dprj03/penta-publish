"use client";

import { useMemo, useState } from "react";
import type { JobListing, Qualification } from "@/lib/types";
import { JobTeaser } from "./JobTeaser";

const QUALS: Qualification[] = ["10th", "12th", "ITI", "Diploma", "Graduate", "Postgraduate"];
const SECTORS = ["All", "Central", "Banking", "Railways", "Defence", "Engineering", "Postal", "Insurance", "State"];

function rankQual(q: Qualification) {
  return ["8th", "10th", "12th", "ITI", "Diploma", "Graduate", "Postgraduate", "Any"].indexOf(q);
}

export function JobFilters({ jobs }: { jobs: JobListing[] }) {
  const [q, setQ] = useState("");
  const [qual, setQual] = useState<string>("All");
  const [sector, setSector] = useState("All");
  const [onlyOpen, setOnlyOpen] = useState(true);

  const filtered = useMemo(() => {
    const now = Date.now();
    return jobs.filter((j) => {
      if (onlyOpen) {
        const end = new Date(j.lastDate + "T23:59:59+05:30").getTime();
        if (end < now && j.type === "job") return false;
      }
      if (sector !== "All" && j.sector !== sector) return false;
      if (qual !== "All") {
        const need = Math.min(...j.qualification.map(rankQual));
        if (need > rankQual(qual as Qualification)) return false;
      }
      if (q.trim()) {
        const hay = (j.title + " " + j.organisation + " " + j.summary + " " + j.sector).toLowerCase();
        if (!hay.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [jobs, q, qual, sector, onlyOpen]);

  return (
    <div>
      <div className="rounded-2xl border border-line bg-card p-4 shadow-card">
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted">Search notifications</label>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="CHSL, RRB, GDS, Uttar Pradesh…"
          className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3 text-base"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                sector === s ? "bg-brand text-white" : "bg-paper text-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setQual("All")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              qual === "All" ? "bg-accent text-white" : "bg-paper text-ink"
            }`}
          >
            Any education
          </button>
          {QUALS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQual(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                qual === s ? "bg-accent text-white" : "bg-paper text-ink"
              }`}
            >
              {s}+
            </button>
          ))}
        </div>
        <label className="mt-3 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={onlyOpen} onChange={(e) => setOnlyOpen(e.target.checked)} />
          Hide closed application windows
        </label>
      </div>
      <p className="mt-4 text-sm text-muted">
        Showing {filtered.length} of {jobs.length} notifications
      </p>
      <div className="mt-3 grid gap-3">
        {filtered.map((j) => (
          <JobTeaser key={j.slug} job={j} />
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-line p-6 text-sm text-muted">
            No notification matches those filters. Clear education or sector and try again.
          </p>
        )}
      </div>
    </div>
  );
}
