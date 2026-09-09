export function inr(n: number, digits = 0) {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

export function num(v: string, fallback = 0) {
  const n = Number(String(v).replace(/,/g, ""));
  return Number.isFinite(n) ? n : fallback;
}

/** Reducing-balance EMI. annualRate is percent, tenureMonths is n. */
export function emi(principal: number, annualRate: number, tenureMonths: number) {
  if (principal <= 0 || tenureMonths <= 0) return { emi: 0, interest: 0, total: 0 };
  if (annualRate <= 0) {
    const e = principal / tenureMonths;
    return { emi: e, interest: 0, total: principal };
  }
  const r = annualRate / 12 / 100;
  const pow = Math.pow(1 + r, tenureMonths);
  const e = (principal * r * pow) / (pow - 1);
  const total = e * tenureMonths;
  return { emi: e, interest: total - principal, total };
}

/** Future value of a monthly SIP. annualReturn is percent. */
export function sipFv(monthly: number, annualReturn: number, years: number) {
  const n = Math.round(years * 12);
  const i = annualReturn / 12 / 100;
  if (monthly <= 0 || n <= 0) return { invested: 0, wealth: 0, gain: 0 };
  const wealth = i === 0 ? monthly * n : monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const invested = monthly * n;
  return { invested, wealth, gain: wealth - invested };
}

/** Compound FD. freq: 1 yearly, 2 half, 4 quarterly, 12 monthly. */
export function fdMaturity(principal: number, annualRate: number, years: number, freq = 4) {
  const n = freq * years;
  const r = annualRate / 100 / freq;
  const maturity = principal * Math.pow(1 + r, n);
  return { maturity, interest: maturity - principal };
}

export function ppfFv(annual: number, years = 15, rate = 7.1) {
  // Year-end contribution approximation with annual compounding
  let bal = 0;
  for (let y = 0; y < years; y++) {
    bal = (bal + annual) * (1 + rate / 100);
  }
  return { invested: annual * years, wealth: bal, gain: bal - annual * years };
}

export function rdMaturity(monthly: number, annualRate: number, months: number) {
  const r = annualRate / 100 / 12;
  const n = months;
  const maturity = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r);
  return { invested: monthly * n, maturity, interest: maturity - monthly * n };
}

export function npsCorpus(monthly: number, annualReturn: number, years: number) {
  return sipFv(monthly, annualReturn, years);
}

export function gratuity(lastDrawnBasicDa: number, years: number) {
  const completed = Math.floor(years);
  if (completed < 5) return 0;
  return Math.min((lastDrawnBasicDa * 15 * completed) / 26, 20_00_000);
}

/** New regime FY 2026-27 / AY 2027-28 slabs + 87A rebate up to 12L + 4% cess. */
export function newRegimeTax(taxable: number) {
  const slabs = [
    [400000, 0],
    [800000, 0.05],
    [1200000, 0.1],
    [1600000, 0.15],
    [2000000, 0.2],
    [2400000, 0.25],
    [Infinity, 0.3],
  ] as const;
  let tax = 0;
  let prev = 0;
  for (const [cap, rate] of slabs) {
    if (taxable <= prev) break;
    const chunk = Math.min(taxable, cap) - prev;
    tax += chunk * rate;
    prev = cap;
  }
  if (taxable <= 12_00_000) tax = 0; // 87A
  else {
    // simple marginal relief: tax cannot exceed income minus 12L
    const reliefCap = taxable - 12_00_000;
    if (tax > reliefCap) tax = reliefCap;
  }
  const cess = tax * 0.04;
  return { tax, cess, total: tax + cess };
}

export function oldRegimeTax(taxable: number, age = 30) {
  const exempt = age >= 80 ? 500000 : age >= 60 ? 300000 : 250000;
  let tax = 0;
  const bands = [
    [exempt, 0],
    [500000, 0.05],
    [1000000, 0.2],
    [Infinity, 0.3],
  ] as const;
  let prev = 0;
  for (const [cap, rate] of bands) {
    if (taxable <= prev) break;
    const chunk = Math.min(taxable, cap) - prev;
    if (chunk > 0) tax += chunk * rate;
    prev = cap;
  }
  if (taxable <= 500000) tax = 0; // 87A old
  const cess = tax * 0.04;
  return { tax, cess, total: tax + cess };
}
