'use client';

export function PrintButton() {
  return (
    <button
      className="rounded border border-[#B08D57] bg-[#B08D57] px-4 py-2 text-sm font-semibold text-[#1A202C]"
      onClick={() => window.print()}
      type="button"
    >
      Print / Save PDF
    </button>
  );
}
