import { siteContent } from "@/content/site";

export function LifestyleGrid() {
  return (
    <section className="px-6 pt-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl">
            Scènes d’usage réelles
          </h2>
          <p className="text-base leading-7 text-stone-600 max-w-3xl">
            Le concept prend vie dans des espaces domestiques et créatifs authentiques.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {siteContent.lifestyleImages.map((image) => (
              <article
                key={image.src}
                className="relative overflow-hidden rounded-[1.75rem] border border-black/4 bg-white/6 p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-[1rem] mb-4"
                  loading="lazy"
                />
                {image.title && (
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-stone-950 mb-2">
                    {image.title}
                  </h3>
                )}
                {image.description && (
                  <p className="text-sm leading-6 text-stone-600 mb-4">
                    {image.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DetailGrid() {
  return (
    <section className="px-6 pt-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl">
            Détails de conception
          </h2>
          <p className="text-base leading-7 text-stone-600 max-w-3xl">
            Chaque élément est pensé pour la qualité et la durabilité.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {siteContent.detailImages.map((image) => (
              <article
                key={image.src}
                className="relative overflow-hidden rounded-[1.75rem] border border-black/4 bg-white/6 p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-[1rem] mb-4"
                  loading="lazy"
                />
                {image.title && (
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-stone-950 mb-2">
                    {image.title}
                  </h3>
                )}
                {image.description && (
                  <p className="text-sm leading-6 text-stone-600 mb-4">
                    {image.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
