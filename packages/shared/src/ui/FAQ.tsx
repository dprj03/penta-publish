'use client';
import { useState } from 'react';

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border">
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-3 text-left font-medium"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <span className="ml-2 text-gray-400">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div className="border-t px-4 py-3 text-sm text-gray-700">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
