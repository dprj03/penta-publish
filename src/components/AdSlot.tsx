'use client';

export function AdSlot({ slot = 'default', className = '' }: { slot?: string; className?: string }) {
  return (
    <div
      className={`ad-slot my-4 flex min-h-[90px] w-full items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-400 ${className}`}
      data-ad-slot={slot}
      aria-hidden="true"
    >
      Advertisement
    </div>
  );
}
