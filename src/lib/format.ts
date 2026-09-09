export function daysLeft(iso: string): number {
  const end = new Date(iso + "T23:59:59+05:30").getTime();
  return Math.ceil((end - Date.now()) / 86400000);
}

export function formatDate(iso: string): string {
  try {
    return new Date(iso + "T00:00:00+05:30").toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function formatINR(n: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
