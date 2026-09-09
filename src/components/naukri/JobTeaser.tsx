import Link from "next/link";
import type { JobListing } from "@/lib/types";
import { daysLeft, formatDate } from "@/lib/format";

function postsLabel(posts: number | string) {
  if (typeof posts === "number") return posts.toLocaleString("en-IN") + " posts";
  return String(posts) + (String(posts).match(/post/i) ? "" : " posts");
}

export function JobTeaser({ job }: { job: JobListing }) {
  const left = daysLeft(job.lastDate);
  const closed = left < 0;
  const urgent = !closed && left <= 7;
  const chip = closed ? "Closed" : left === 0 ? "Closes today" : left + " days left";
  return (
    <article className="rounded-2xl border border-line bg-card p-4 shadow-card">
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-muted">
        <span>{job.organisationShort}</span>
        <span>·</span>
        <span>{job.sector}</span>
        {job.type !== "job" && <span className="rounded-full bg-paper px-2 py-0.5">{job.type}</span>}
      </div>
      <h3 className="display mt-2 text-lg leading-snug">
        <Link href={`/naukri/jobs/${job.slug}`} className="hover:text-brand">
          {job.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{job.summary}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-paper px-2 py-1">{postsLabel(job.posts)}</span>
        <span className="rounded-full bg-paper px-2 py-1">{job.qualification[0]}</span>
        <span className="rounded-full bg-paper px-2 py-1">{job.location}</span>
        <span
          className={`rounded-full px-2 py-1 font-semibold ${
            closed ? "bg-line text-muted" : urgent ? "bg-accent/15 text-accent" : "bg-brand/10 text-brand"
          }`}
        >
          {chip}
        </span>
        <span className="text-muted">Last date {formatDate(job.lastDate)}</span>
      </div>
    </article>
  );
}
