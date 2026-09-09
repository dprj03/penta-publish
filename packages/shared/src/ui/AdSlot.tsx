'use client';
export function AdSlot({ slot }: { slot: string }) {
  return (
    <div
      className="ad-slot my-4 min-h-[90px] w-full rounded border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-400"
      data-ad-slot={slot}
      aria-hidden
    >
      Advertisement
    </div>
  );
}
