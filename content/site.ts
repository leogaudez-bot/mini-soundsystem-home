import { withBasePath } from "@/lib/site-path";

export type Benefit = {
  title: string;
  description: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
  format: string;
};

export const siteContent = {
  brand: {
    name: "Mini Sound System",
    eyebrow: "Concept audio domestique",
    tagline: "Petit format. Présence réelle.",
    description:
      "Un mini sound system pensé pour appartement et maison: une architecture sub / kick / tweeter inspirée des grands stacks, dans un format plus compact, visuellement fort et plus crédible au quotidien.",
  },
  hero: {
    primaryCta: {
      label: "Voir le dossier de lancement",
      href: "#downloads",
    },
    secondaryCta: {
      label: "Comprendre le concept",
      href: "#concept",
    },
    status: "Pré-lancement conceptuel — étude de positionnement, direction produit et plans vectoriels de principe.",
    notes: [
      "Pensé pour petits espaces",
      "Direction produit maintenable",
      "Landing prête à être partagée",
    ],
  },
  positioning: {
    title: "Pourquoi ce projet existe",
    intro:
      "Le marché se partage souvent entre l’enceinte lifestyle générique et le setup audio trop encombrant. Ce concept ouvre une troisième voie: un objet sonore compact, plus expressif, plus culturel, mais encore domestique.",
    bullets: [
      "Une présence visuelle assumée, au lieu d’un simple boîtier discret.",
      "Une lecture plus claire des rôles acoustiques avec un stack sub / kick / tweeter.",
      "Une promesse plus crédible pour l’appartement: caractère, impact et lisibilité avant la surenchère de volume.",
    ],
  },
  benefits: [
    {
      title: "Présence sonore domestique",
      description:
        "Le concept vise un grave maîtrisé, une attaque lisible et une restitution vivante à volume domestique, plutôt qu’un simple effet “plus de basses”.",
    },
    {
      title: "Objet de culture, pas gadget audio",
      description:
        "Le design s’inspire des codes du sound system sans tomber dans l’imitation massive: stack lisible, identité forte, silhouette faite pour exister dans un intérieur.",
    },
    {
      title: "Format plus crédible à vivre",
      description:
        "Empreinte réduite, modularité potentielle et usage simplifié: une proposition pensée pour le salon, le studio créatif ou les petits lieux hybrides.",
    },
    {
      title: "Base de produit extensible",
      description:
        "La page, les assets et les documents sont structurés pour évoluer en système réutilisable: nouvelles variantes, nouvelle copy, nouveau pricing ou nouveau projet sans refonte totale.",
    },
  ] as Benefit[],
  audience: [
    {
      title: "Mélomanes urbains",
      description:
        "Des personnes qui veulent mieux qu’une enceinte Bluetooth standard, sans installer un setup lourd et technique.",
    },
    {
      title: "Créatifs et hôtes",
      description:
        "Des usages maison: sessions d’écoute, dîners, apéros, warm-ups, petits intérieurs où l’objet compte autant que le son.",
    },
    {
      title: "Lieux compacts à forte identité",
      description:
        "Studios, concept stores, cafés ou petits espaces qui veulent une présence sonore et visuelle cohérente avec leur lieu.",
    },
  ] as UseCase[],
  architecture: {
    title: "Une architecture lisible",
    description:
      "Le concept repose sur trois modules visuels et fonctionnels. L’idée n’est pas de promettre une ingénierie finale déjà validée, mais de rendre le produit compréhensible, montrable et industrialisable par étapes.",
    layers: [
      {
        label: "Tweeter",
        text: "Le registre de détail, l’ouverture et la clarté perceptive.",
      },
      {
        label: "Kick",
        text: "La zone d’impact et de rythme qui donne le caractère et la sensation de vitesse.",
      },
      {
        label: "Sub",
        text: "L’assise basse fréquence, pensée ici comme fondation compacte et visuellement stable.",
      },
    ],
  },
  useCases: [
    {
      title: "Salon compact",
      description:
        "Pour un espace de vie qui veut une vraie signature sonore sans basculer dans l’esthétique sono ou studio pur.",
    },
    {
      title: "Studio créatif",
      description:
        "Comme pièce forte pour travailler, montrer des références ou poser une ambiance à forte identité.",
    },
    {
      title: "Petit lieu hybride",
      description:
        "Pour des espaces qui veulent un objet sonore plus narratif qu’un simple système de diffusion discret.",
    },
  ] as UseCase[],
  trust: {
    title: "Une proposition honnête",
    body:
      "Cette landing ne prétend pas vendre un produit final déjà industrialisé. Elle pose un concept, une direction produit, un cadrage marché, un business plan initial et des plans vectoriels de principe pour ouvrir la discussion avec partenaires, makers, early adopters ou investisseurs légers.",
    points: [
      "Claims volontairement modérés: pas de promesse technique non prouvée.",
      "Documents téléchargeables pour crédibiliser la réflexion produit.",
      "Base maintenable prête à évoluer vers une vraie marque ou une micro-offre.",
    ],
  },
  faq: [
    {
      question: "Est-ce un produit déjà commercialisé ?",
      answer:
        "Non. La page présente un concept de mini sound system domestique, un cadrage business initial et des plans vectoriels de principe. Elle sert à tester le positionnement, la désirabilité et la clarté de l’offre.",
    },
    {
      question: "Pourquoi parler de sub / kick / tweeter séparés ?",
      answer:
        "Parce que cette lecture rend le concept plus intelligible et plus fidèle à l’inspiration sound system. Elle aide aussi à construire une identité produit plus forte qu’une enceinte compacte générique.",
    },
    {
      question: "Les plans sont-ils prêts pour une fabrication immédiate ?",
      answer:
        "Non. Les SVG fournis sont des plans conceptuels et de présentation. Pour aller vers un produit réellement fabriqué, il faudra valider dimensions, acoustique, matériaux, électronique, sécurité et process industriel.",
    },
    {
      question: "Quel serait le modèle de lancement le plus crédible ?",
      answer:
        "Une petite série ou un système de précommandes semble plus réaliste qu’un lancement retail large. C’est aussi ce que détaille le business plan joint à cette landing.",
    },
  ] as FaqItem[],
  downloads: [
    {
      title: "Business plan de lancement",
      description:
        "Cadrage marché, positionnement, hypothèses de pricing, distribution, risques et plan de commercialisation initial.",
      href: withBasePath("/downloads/mini-soundsystem-business-plan.md"),
      format: "Markdown",
    },
    {
      title: "Plan vectoriel — vue avant",
      description:
        "Lecture frontale du stack sub / kick / tweeter avec repères de principe.",
      href: withBasePath("/downloads/mini-soundsystem-front-plan.svg"),
      format: "SVG",
    },
    {
      title: "Plan vectoriel — vue latérale",
      description:
        "Volume général, proportions et empilement vus de profil.",
      href: withBasePath("/downloads/mini-soundsystem-side-plan.svg"),
      format: "SVG",
    },
    {
      title: "Plan vectoriel — vue éclatée",
      description:
        "Décomposition visuelle du concept pour expliquer la logique produit.",
      href: withBasePath("/downloads/mini-soundsystem-exploded-view.svg"),
      format: "SVG",
    },
  ] as DownloadItem[],
  footer: {
    title: "Une base propre pour tester une vraie idée",
    description:
      "La landing, les documents et les assets ont été pensés pour être partagés vite, puis repris proprement si le concept mérite d’aller plus loin.",
  },
} as const;

export type SiteContent = typeof siteContent;
