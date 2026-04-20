import type { Metadata } from "next";
import Link from "next/link";
import { withBasePath } from "@/lib/site-path";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Business plan — Mini Sound System",
  description:
    "Synthèse business et go-to-market pour un concept de mini sound system domestique.",
};

const sections = [
  {
    title: "Thèse produit",
    body: "Le projet a plus de chances d’exister comme niche premium-culturelle que comme alternative grand public à l’enceinte connectée. La promesse la plus crédible consiste à proposer un mini sound system domestique, compact, visuellement fort, conçu pour de vrais contextes de vie.",
  },
  {
    title: "Cibles prioritaires",
    body: "Les premiers clients probables sont les mélomanes urbains, les amateurs de culture sound system, les hôtes, les studios créatifs et quelques petits lieux à forte identité. Le projet doit d’abord séduire des gens qui achètent autant une expérience et un objet qu’une performance brute.",
  },
  {
    title: "Modèle de lancement",
    body: "La voie la plus réaliste est une petite série ou une précommande, avec distribution directe. Cela réduit le risque stock, permet d’ajuster le produit et aligne bien le projet avec une logique d’objet différencié et potentiellement customisable.",
  },
  {
    title: "Go-to-market",
    body: "La landing, les rendus du concept, les plans vectoriels de principe et le dossier business doivent servir à capter de l’intérêt qualifié. Les premiers leviers sont le visuel, le récit de conception, les tests en contexte réel et la capacité à expliquer simplement pourquoi ce produit n’est pas “juste une enceinte de plus”.",
  },
  {
    title: "Risques à surveiller",
    body: "Le projet doit éviter les promesses techniques non prouvées, anticiper les coûts de fabrication et de logistique, et clarifier très tôt la différence entre concept séduisant et produit réellement industrialisable. Le passage du concept à la fabrication demandera des validations acoustiques, mécaniques et électroniques plus précises.",
  },
];

export default function BusinessPlanPage() {
  return (
    <main className="px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/6 bg-white p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_18px_60px_-32px_rgba(0,0,0,0.25)] sm:p-10">
        <div className="flex flex-col gap-6 border-b border-black/6 pb-8">
          <Link href="/" className="text-sm font-medium text-stone-600 transition hover:text-stone-950">
            ← Retour à la landing
          </Link>
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
              Business plan
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-5xl">
              Plan initial de commercialisation — {siteContent.brand.name}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-stone-600">
              Cette page synthétise le cadrage stratégique. Le document complet reste disponible au format Markdown pour reprise, enrichissement ou adaptation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={withBasePath("/downloads/mini-soundsystem-business-plan.md")}
              className="inline-flex items-center justify-center rounded-full bg-[#171717] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
            >
              Télécharger le Markdown
            </a>
            <a
              href={withBasePath("/downloads/mini-soundsystem-front-plan.svg")}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-[#f7f4ee] px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-black/20 hover:bg-stone-50"
            >
              Voir un plan vectoriel
            </a>
          </div>
        </div>

        <div className="grid gap-4 pt-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-[1.5rem] border border-black/6 bg-[#fcfbf8] p-6">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-stone-950">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
