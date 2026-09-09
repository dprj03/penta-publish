"use client";
import { useMemo, useState } from "react";

function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export default function AgeAsOn() {
  const [dob, setDob] = useState("");
  const [asOn, setAsOn] = useState(() => {
    const t = new Date();
    return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  });

  const result = useMemo(() => {
    if (!dob || !asOn) return null;
    const [dy, dm, dd] = dob.split("-").map(Number);
    const [ay, am, ad] = asOn.split("-").map(Number);
    if (!dy || !dm || !dd || !ay || !am || !ad) return null;
    let y = ay - dy;
    let m = am - dm;
    let d = ad - dd;
    if (d < 0) {
      m -= 1;
      d += daysInMonth(ay, am === 1 ? 12 : am - 1);
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    if (y < 0) return { error: "Date of birth is after as-on date" };
    return { y, m, d };
  }, [dob, asOn]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Date of birth</span>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Age as on</span>
          <input
            type="date"
            value={asOn}
            onChange={(e) => setAsOn(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      {result && "error" in result && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{result.error}</p>
      )}
      {result && !("error" in result) && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
          <p className="text-sm text-emerald-800">Exact age</p>
          <p className="mt-1 text-2xl font-bold text-emerald-900">
            {result.y} years, {result.m} months, {result.d} days
          </p>
        </div>
      )}
      <p className="text-xs text-slate-500">
        Useful for exam / recruitment forms that ask age as on a cut-off date. Calculation is client-side only.
      </p>
    </div>
  );
}
