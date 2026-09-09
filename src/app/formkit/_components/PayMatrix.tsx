"use client";
import { useMemo, useState } from "react";
import { inr } from "@/lib/money";

const ENTRY: Record<string, number> = {
  "1": 18000, "2": 19900, "3": 21700, "4": 25500, "5": 29200,
  "6": 35400, "7": 44900, "8": 47600, "9": 53100, "10": 56100,
  "11": 67700, "12": 78800, "13": 123100, "14": 144200,
};

export function PayMatrix() {
  const [level, setLevel] = useState("6");
  const basic = ENTRY[level] || 35400;
  const rows = useMemo(() => {
    const out = [basic];
    let v = basic;
    for (let i = 0; i < 8; i++) {
      v = Math.round(v * 1.03 / 100) * 100;
      out.push(v);
    }
    return out;
  }, [basic]);
  return (
    <div className="calc-card">
      <label className="field">
        <span className="field-label">Pay level</span>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          {Object.keys(ENTRY).map((k) => (
            <option key={k} value={k}>
              Level {k} · entry ₹{ENTRY[k].toLocaleString("en-IN")}
            </option>
          ))}
        </select>
      </label>
      <div className="result-grid" style={{ marginTop: "1rem" }}>
        <div className="result-big">
          <dt>Entry basic</dt>
          <dd>{inr(basic)}</dd>
        </div>
      </div>
      <p className="fineprint">First nine cells, 3% increment rounded to ₹100 as the matrix does. Not the official DoE table — open that PDF for a promotion cell.</p>
      <ol className="prose-site">
        {rows.map((r, i) => (
          <li key={i}>Cell {i + 1}: {inr(r)}</li>
        ))}
      </ol>
    </div>
  );
}
