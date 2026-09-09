export function daysLeft(iso: string): number {
  const end = new Date(iso + "T23:59:59+05:30").getTime();
  return Math.ceil((end - Date.now()) / 86400000);
}

export function formatDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00+05:30");
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function inr(n: number): string {
  return n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

export function inrDec(n: number, digits = 0): string {
  return n.toLocaleString("en-IN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}
