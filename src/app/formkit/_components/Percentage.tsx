"use client";
import { useMemo, useState } from "react";

export function Percentage() {
  const [got, setGot] = useState("432");
  const [total, setTotal] = useState("500");
  const res = useMemo(() => {
    const g = Number(got);
    const t = Number(total);
    if (!t) return null;
    const pct = (g / t) * 100;
    return { pct, fail: pct < 33, first: pct >= 60 };
  }, [got, total]);
  return (
    <div className="calc-card">
      <div className="calc-form">
        <label className="field">
          <span className="field-label">Marks obtained</span>
          <input inputMode="decimal" value={got} onChange={(e) => setGot(e.target.value)} />
        </label>
        <label className="field">
          <span className="field-label">Maximum marks</span>
          <input inputMode="decimal" value={total} onChange={(e) => setTotal(e.target.value)} />
        </label>
      </div>
      {res ? (
        <dl className="result-grid">
          <div className="result-big">
            <dt>Percentage</dt>
            <dd>{res.pct.toFixed(2)}%</dd>
          </div>
          <div>
            <dt>Rough class</dt>
            <dd>{res.first ? "First division band" : res.fail ? "Below 33%" : "Pass band"}</dd>
          </div>
        </dl>
      ) : null}
      <p className="fineprint">
        Boards publish their own division rules. Use this to fill a percentage box on a
        form, then copy the official marksheet figure if it differs.
      </p>
    </div>
  );
}
