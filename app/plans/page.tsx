import type { Metadata } from "next";
import Link from "next/link";
import { withBasePath } from "@/lib/site-path";

const plans = [
  {
    title: "Vue avant",
    description: "Lecture du stack en trois registres avec repères visuels de principe.",
    href: withBasePath("/downloads/mini-soundsystem-front-plan.svg"),
  },
  {
    title: "Vue latérale",
    description: "Silhouette générale, profondeur et logique d’empilement.",
    href: withBasePath("/downloads/mini-soundsystem-side-plan.svg"),
  },
  {
    title: "Vue éclatée",
    description: "Décomposition modulaire pour rendre le concept communicable.",
    href: withBasePath("/downloads/mini-soundsystem-exploded-view.svg"),
  },
];

export const metadata: Metadata = {
  title: "Plans vectoriels — Mini Sound System",
  description:
    "Plans vectoriels conceptuels pour un mini sound system domestique: front, side et exploded views.",
};

export default function PlansPage() {
  return (
    <main className="px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/6 bg-white p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_18px_60px_-32px_rgba(0,0,0,0.25)] sm:p-10">
        <div className="space-y-4 border-b border-black/6 pb-8">
          <Link href="/" className="text-sm font-medium text-stone-600 transition hover:text-stone-950">
            ← Retour à la landing
          </Link>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
            Vector plans
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
            Plans vectoriels de principe
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-stone-600">
            Ces fichiers servent à expliquer le concept et à cadrer une discussion design/produit. Ils ne remplacent pas une validation acoustique ou industrielle.
          </p>
        </div>

        <div className="grid gap-4 pt-8 md:grid-cols-3">
          {plans.map((plan) => (
            <a
              key={plan.title}
              href={plan.href}
              className="rounded-[1.5rem] border border-black/6 bg-[#fcfbf8] p-6 transition hover:-translate-y-0.5 hover:border-black/12"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-stone-950">{plan.title}</h2>
              <p className="mt-3 text-base leading-7 text-stone-600">{plan.description}</p>
              <p className="mt-6 text-sm font-medium text-stone-950">Ouvrir le SVG →</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
