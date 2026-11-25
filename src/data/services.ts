export interface ServiceDeliverable {
  index: string;
  title: string;
  description: string;
}

export interface ServiceProcessCard {
  index: string;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  slug: string;
  index: string;
  title: string;
  summary: string;
  heroDescription: string;
  previewImages: [string, string];
  bannerImage: string;
  deliverables: ServiceDeliverable[];
  processCards: ServiceProcessCard[];
  seo: {
    title: string;
    description: string;
  };
}

const DEFAULT_DELIVERABLES: ServiceDeliverable[] = [
  {
    index: '001',
    title: 'UX Research and Strategy',
    description:
      'Our approach is built around your audience, crafting experiences that are both meaningful and engaging, and that deliver real results.',
  },
  {
    index: '002',
    title: 'Low and High Fidelity Wireframe',
    description:
      'Our approach is built around your audience, crafting experiences that are both meaningful and engaging, and that deliver real results.',
  },
  {
    index: '003',
    title: 'Visual Design & Prototyping',
    description:
      'Our approach is built around your audience, crafting experiences that are both meaningful and engaging, and that deliver real results.',
  },
  {
    index: '004',
    title: 'Cross-Platform Optimization',
    description:
      'Our approach is built around your audience, crafting experiences that are both meaningful and engaging, and that deliver real results.',
  },
  {
    index: '005',
    title: 'Testing and Gather Feedbacks',
    description:
      'Our approach is built around your audience, crafting experiences that are both meaningful and engaging, and that deliver real results.',
  },
  {
    index: '006',
    title: 'Scalable Design System',
    description:
      'Our approach is built around your audience, crafting experiences that are both meaningful and engaging, and that deliver real results.',
  },
];

const DEFAULT_PROCESS_CARDS: ServiceProcessCard[] = [
  {
    index: '001',
    title: 'Explore and Analysis',
    description:
      'We start by auditing your market, audience, and current digital footprint to uncover the clearest growth opportunities.',
    icon: '/assets/icons/hf-process-icon-01.svg',
  },
  {
    index: '002',
    title: 'Assess and Evaluate',
    description:
      'We test architecture, messaging, and visual directions against conversion goals before locking final production specs.',
    icon: '/assets/icons/hf-process-b-icon-02.svg',
  },
  {
    index: '003',
    title: 'Execute and Testing',
    description:
      'We build with clean responsive craft, run cross-browser QA, and ship polished experiences built to scale.',
    icon: '/assets/icons/hf-process-b-icon-03.svg',
  },
];

export const services: Service[] = [
  {
    id: 'branding',
    slug: 'branding',
    index: '(001)',
    title: 'Branding',
    summary:
      'We develop websites, apps, and campaigns that truly make a difference for expanding brands.',
    heroDescription:
      'At HyperFrame, our UI/UX design turns ideas into engaging, user-friendly digital products that inspire and boost conversions, whether launching or redesigning platforms.',
    previewImages: [
      '/assets/images/services/Service-Image-01.avif',
      '/assets/images/services/Service-Image-02.avif',
    ],
    bannerImage: '/assets/images/services/Service-Banner-Image-01.avif',
    deliverables: DEFAULT_DELIVERABLES,
    processCards: DEFAULT_PROCESS_CARDS,
    seo: {
      title: 'Branding - HyperFrame',
      description:
        "Explore HyperFrame's branding service: strategy, logo design, visual identity and brand guidelines that help growing businesses look consistent and memorable.",
    },
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    index: '(002)',
    title: 'UI & UX Design',
    summary:
      'We build digital experiences, websites, and campaigns that move growing brands forward.',
    heroDescription:
      'At HyperFrame, our UI/UX design turns ideas into engaging, user-friendly digital products that inspire and boost conversions, whether launching or redesigning platforms.',
    previewImages: [
      '/assets/images/services/Service-Image-03.avif',
      '/assets/images/services/6af4b298871cd9e06180d71d_Service-Image-04.webp',
    ],
    bannerImage: '/assets/images/services/6af4b29838325a4b2da64f07_Service-Banner-Image-02.webp',
    deliverables: DEFAULT_DELIVERABLES,
    processCards: DEFAULT_PROCESS_CARDS,
    seo: {
      title: 'UI & UX Design - HyperFrame',
      description:
        "Explore HyperFrame's UI and UX design service: research, wireframes, visual design, prototyping and design systems that turn ideas into products users love.",
    },
  },
  {
    id: 'illustration-design',
    slug: 'illustration-design',
    index: '(003)',
    title: 'Illustration Design',
    summary:
      'We design websites, apps, and campaigns that turn bold ideas into meaningful brand experiences.',
    heroDescription:
      'At HyperFrame, our UI/UX design turns ideas into engaging, user-friendly digital products that inspire and boost conversions, whether launching or redesigning platforms.',
    previewImages: [
      '/assets/images/services/Service-Image-05.avif',
      '/assets/images/services/Service-Image-06.avif',
    ],
    bannerImage: '/assets/images/services/Service-Banner-Image-03.avif',
    deliverables: DEFAULT_DELIVERABLES,
    processCards: DEFAULT_PROCESS_CARDS,
    seo: {
      title: 'Illustration Design - HyperFrame',
      description:
        "Explore HyperFrame's illustration design service: custom illustrations, icons and visual assets that give websites, apps and campaigns a distinctive look.",
    },
  },
  {
    id: 'no-code-development',
    slug: 'no-code-development',
    index: '(004)',
    title: 'No Code Development',
    summary:
      'We craft digital products and campaigns that help ambitious brands stand out and scale.',
    heroDescription:
      'At HyperFrame, our UI/UX design turns ideas into engaging, user-friendly digital products that inspire and boost conversions, whether launching or redesigning platforms.',
    previewImages: [
      '/assets/images/services/Service-Image-07.avif',
      '/assets/images/services/Service-Image-08.avif',
    ],
    bannerImage: '/assets/images/services/Service-Banner-Image-04.avif',
    deliverables: DEFAULT_DELIVERABLES,
    processCards: DEFAULT_PROCESS_CARDS,
    seo: {
      title: 'No Code Development - HyperFrame',
      description:
        "Explore HyperFrame's no-code development service: fast, responsive websites with CMS, interactions and SEO built in, ready to launch and easy to edit.",
    },
  },
  {
    id: 'custom-development',
    slug: 'custom-development',
    index: '(005)',
    title: 'Custom Development',
    summary:
      'We create digital experiences that inspire audiences and drive growth for ambitious brands.',
    heroDescription:
      'At HyperFrame, our UI/UX design turns ideas into engaging, user-friendly digital products that inspire and boost conversions, whether launching or redesigning platforms.',
    previewImages: [
      '/assets/images/services/Service-Image-09.avif',
      '/assets/images/services/Service-Image-10.avif',
    ],
    bannerImage: '/assets/images/services/Service-Banner-Image-05.avif',
    deliverables: DEFAULT_DELIVERABLES,
    processCards: DEFAULT_PROCESS_CARDS,
    seo: {
      title: 'Custom Development - HyperFrame',
      description:
        "Explore HyperFrame's custom development service: scalable websites and web apps with clean code, integrations and performance tuned for ambitious brands.",
    },
  },
];
