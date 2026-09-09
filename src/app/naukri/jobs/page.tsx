import { AdSlot } from "@/components/AdSlot";
import { JobFilters } from "@/components/naukri/JobFilters";
import { JOBS } from "@/content/jobs";

export const metadata = {
  title: "Latest Sarkari Naukri 2026",
  description: "Filter central, banking, railway and state government jobs by education, sector and last date.",
};

export default function JobsPage() {
  const list = JOBS.filter((j) => j.type === "job");
  return (
    <div>
      <h1 className="display text-3xl">Latest Sarkari Naukri</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        Filters actually work. Education “12th+” keeps jobs whose minimum is 10th or 12th, not postgraduate
        scientific posts. Always verify the official PDF before you pay a fee.
      </p>
      <AdSlot slot="top" />
      <JobFilters jobs={list} />
    </div>
  );
}
