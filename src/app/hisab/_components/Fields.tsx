"use client";
import type { ReactNode } from "react";

export function Field({
  label, hint, children,
}: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {children}
      {hint ? <small className="field-hint">{hint}</small> : null}
    </label>
  );
}

export function ResultGrid({ rows }: { rows: { k: string; v: string; big?: boolean }[] }) {
  return (
    <dl className="result-grid">
      {rows.map((r) => (
        <div key={r.k} className={r.big ? "result-big" : ""}>
          <dt>{r.k}</dt>
          <dd>{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}
