import Link from 'next/link';

export function JobCard({
  href,
  title,
  org,
  lastDate,
  vacancies,
}: {
  href: string;
  title: string;
  org: string;
  lastDate: string;
  vacancies?: number;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg border bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow"
    >
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{org}</p>
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
        <span>Last date: {lastDate}</span>
        {vacancies != null && <span>{vacancies} posts</span>}
      </div>
    </Link>
  );
}
