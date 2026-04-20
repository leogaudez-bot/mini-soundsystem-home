import type { ReactNode } from "react";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-black/6 px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14">
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="max-w-sm text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-md text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
