'use client';
import { useEffect, useState } from 'react';
export function Countdown({ target }: { target: string }) {
  const [left, setLeft] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date(target).getTime() - Date.now();
      if (d <= 0) { setLeft('Closed'); return; }
      const days = Math.floor(d / 86400000);
      setLeft(`${days}d left`);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, [target]);
  return <span className="text-sm font-medium text-amber-700">{left}</span>;
}
