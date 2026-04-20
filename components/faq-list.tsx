import type { FaqItem } from "@/content/site";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-[1.5rem] border border-black/6 bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] open:bg-[#fcfbf8] sm:p-6"
        >
          <summary className="cursor-pointer list-none text-lg font-medium tracking-[-0.02em] text-stone-950">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
