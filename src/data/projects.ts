export interface ProjectServiceTag {
  label: string;
  icon: string;
}

export interface ProjectPhase {
  phaseLabel: string;
  title: string;
  description: string;
}

export interface ProjectResultCard {
  index: string;
  metric: string;
  suffix: string;
  title: string;
  description: string;
  dark?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string;
  year: string;
  role: string;
  industry: string;
  scope: string;
  timeline: string;
  rating: string;
  summary: string;
  thumbnail: string;
  detailImage: string;
  backgroundMedia: string;
  services: ProjectServiceTag[];
  challengeStatement: string;
  challengeSubtext: string;
  challengeImage: string;
  approachHeading: string;
  approachIntro: string;
  approachImage: string;
  phases: ProjectPhase[];
  results: ProjectResultCard[];
  seo: {
    title: string;
    description: string;
  };
}

const DEFAULT_TAGS: ProjectServiceTag[] = [
  { label: 'Branding', icon: '/assets/icons/Service-Icon-01.svg' },
  { label: 'Web Design', icon: '/assets/icons/Service-Icon-02.svg' },
  { label: 'Illustration', icon: '/assets/icons/Service-Icon-03.svg' },
  { label: 'Icon Design', icon: '/assets/icons/Service-Icon-04.svg' },
];

const DEFAULT_PHASES: ProjectPhase[] = [
  {
    phaseLabel: 'Initial Phase',
    title: 'Research & Discovery',
    description:
      'We conducted in-depth research by analyzing competitors, identifying key user pain points, and mapping out detailed customer journeys.',
  },
  {
    phaseLabel: 'Second Phase',
    title: 'Wireframing & UX Design',
    description:
      'We designed an easy, intuitive navigation that guides visitors smoothly to the pages and content that matter most.',
  },
  {
    phaseLabel: 'Third Phase',
    title: 'UI Design & Branding',
    description:
      'We created a modern, trust-building design system that combines clean typography, a refined color palette, and consistent visual elements.',
  },
  {
    phaseLabel: 'Final Phase',
    title: 'Development & Testing',
    description:
      'We built the platform with a fully responsive design across all devices, paired with performance optimizations for a faster experience.',
  },
];

const DEFAULT_RESULTS: ProjectResultCard[] = [
  {
    index: '001',
    metric: '/95',
    suffix: '%',
    title: 'Faster Loading Time on Every Devices',
    description:
      'We do not just design for aesthetics; every idea, layout, and interaction is crafted to achieve impact and measurable results.',
  },
  {
    index: '002',
    metric: '/87',
    suffix: '%',
    title: 'Improve Projects Inquiry',
    description:
      'Your goals drive our process. We listen, adapt, and co-create to ensure your vision is at the heart of every solution.',
    dark: true,
  },
  {
    index: '003',
    metric: '/25',
    suffix: 'x',
    title: 'Customer Retention Growth',
    description:
      'We adopt new tools, trends, and technologies to keep your brand at the forefront in a rapidly changing digital landscape.',
  },
  {
    index: '004',
    metric: '/99',
    suffix: '%',
    title: 'Users Positive Feedbacks Worldwide',
    description:
      'Our focus is on every detail, from strategy to delivery, to achieve a seamless, functional, and future-ready outcome.',
  },
];

export const projects: Project[] = [
  {
    id: 'profast',
    slug: 'profast',
    index: '(001)',
    title: 'ProFast',
    year: '/2025',
    role: '/Website Designer',
    industry: '/Website Designer',
    scope: '/ Branding / Web design',
    timeline: '12 weeks',
    rating: '4.8 / 5',
    summary:
      'We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.',
    thumbnail: '/assets/images/projects/Project-Image-01.avif',
    detailImage: '/assets/images/projects/Project-Short-Image-01.avif',
    backgroundMedia: '/assets/images/projects/Project-Short-Image-01.avif',
    services: DEFAULT_TAGS,
    challengeStatement:
      "ProFast had outgrown its first website. Pages loaded slowly, the brand looked different on every channel, and visitors left before they reached the product range, so online sales lagged behind the brand's growing reputation.",
    challengeSubtext:
      'Our cross-functional teams work together efficiently to achieve outstanding results across all digital channels.',
    challengeImage: '/assets/images/projects/Challenge-Image.avif',
    approachHeading: 'How We Approach the Situation',
    approachIntro:
      'We rebuilt ProFast around speed and clarity: a sharper identity, a lighter site and a product journey that gets shoppers from first visit to checkout faster.',
    approachImage: '/assets/images/projects/Approach-Image.avif',
    phases: DEFAULT_PHASES,
    results: DEFAULT_RESULTS,
    seo: {
      title: 'ProFast - HyperFrame',
      description:
        'ProFast is a HyperFrame case study covering branding, web design, illustration and icon design, delivered in 12 weeks for a fast-growing performance brand.',
    },
  },
  {
    id: 'securex',
    slug: 'securex',
    index: '(002)',
    title: 'SecureX',
    year: '/2025',
    role: '/Website Designer',
    industry: '/Website Designer',
    scope: '/ Branding / Web design',
    timeline: '12 weeks',
    rating: '4.8 / 5',
    summary:
      'We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.',
    thumbnail: '/assets/images/projects/Project-Image-02.avif',
    detailImage: '/assets/images/projects/Project-Short-Image-02.avif',
    backgroundMedia: '/assets/images/projects/Project-Short-Image-02.avif',
    services: DEFAULT_TAGS,
    challengeStatement:
      'SecureX needed to turn complex security infrastructure into a clear, trustworthy story that enterprise buyers could evaluate in minutes.',
    challengeSubtext:
      'Our cross-functional teams work together efficiently to achieve outstanding results across all digital channels.',
    challengeImage: '/assets/images/projects/Challenge-Image.avif',
    approachHeading: 'How We Approach the Situation',
    approachIntro:
      'We turned complex security features into plain benefits, then wrapped them in a calm, trustworthy visual system that helps prospects sign up with confidence.',
    approachImage: '/assets/images/projects/Approach-Image.avif',
    phases: DEFAULT_PHASES,
    results: DEFAULT_RESULTS,
    seo: {
      title: 'SecureX - HyperFrame',
      description:
        'SecureX is a HyperFrame case study covering branding, web design, illustration and icon design for a modern fintech platform, delivered in just 12 weeks.',
    },
  },
  {
    id: 'spinex-pro',
    slug: 'spinex-pro',
    index: '(003)',
    title: 'Spinex Pro',
    year: '/2025',
    role: '/Website Designer',
    industry: '/Website Designer',
    scope: '/ Branding / Web design',
    timeline: '12 weeks',
    rating: '4.8 / 5',
    summary:
      'We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.',
    thumbnail: '/assets/images/projects/Project-Image-03.avif',
    detailImage: '/assets/images/projects/Project-Short-Image-03.avif',
    backgroundMedia: '/assets/images/projects/Project-Short-Image-03.avif',
    services: DEFAULT_TAGS,
    challengeStatement:
      'Spinex Pro required a unified product narrative across marketing pages, documentation, and interactive product demos.',
    challengeSubtext:
      'Our cross-functional teams work together efficiently to achieve outstanding results across all digital channels.',
    challengeImage: '/assets/images/projects/Challenge-Image.avif',
    approachHeading: 'How We Approach the Situation',
    approachIntro:
      'We started with one clear product story, then shaped the brand, website and icons around it so every page explains Spinex Pro the same way.',
    approachImage: '/assets/images/projects/Approach-Image.avif',
    phases: DEFAULT_PHASES,
    results: DEFAULT_RESULTS,
    seo: {
      title: 'Spinex Pro - HyperFrame',
      description:
        'Spinex Pro is a HyperFrame case study covering branding, web design, illustration and icon design for an ambitious tech product, delivered in 12 weeks.',
    },
  },
  {
    id: 'virtualex',
    slug: 'virtualex',
    index: '(004)',
    title: 'Virtualex',
    year: '/2025',
    role: '/Website Designer',
    industry: '/Website Designer',
    scope: '/ Branding / Web design',
    timeline: '12 weeks',
    rating: '4.8 / 5',
    summary:
      'We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.',
    thumbnail: '/assets/images/projects/Project-Image-04.avif',
    detailImage: '/assets/images/projects/Project-Short-Image-04.avif',
    backgroundMedia: '/assets/images/projects/Project-Short-Image-04.avif',
    services: DEFAULT_TAGS,
    challengeStatement:
      'Virtualex needed an expressive web presence capable of conveying spatial immersion and motion before visitors booked a hardware demo.',
    challengeSubtext:
      'Our cross-functional teams work together efficiently to achieve outstanding results across all digital channels.',
    challengeImage: '/assets/images/projects/Challenge-Image.avif',
    approachHeading: 'How We Approach the Situation',
    approachIntro:
      'We let the product lead: bold visuals, motion and custom illustration give visitors a taste of the virtual experience before they book a demo.',
    approachImage: '/assets/images/projects/Approach-Image.avif',
    phases: DEFAULT_PHASES,
    results: DEFAULT_RESULTS,
    seo: {
      title: 'Virtualex - HyperFrame',
      description:
        'Virtualex is a HyperFrame case study covering branding, web design, illustration and icon design for an immersive virtual reality brand, built in 12 weeks.',
    },
  },
  {
    id: 'fashionable',
    slug: 'fashionable',
    index: '(005)',
    title: 'Fashionable',
    year: '/2025',
    role: '/Website Designer',
    industry: '/Website Designer',
    scope: '/ Branding / Web design',
    timeline: '12 weeks',
    rating: '4.8 / 5',
    summary:
      'We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.',
    thumbnail: '/assets/images/projects/Project-Image-05.avif',
    detailImage: '/assets/images/projects/Project-Short-Image-05.avif',
    backgroundMedia: '/assets/images/projects/Project-Short-Image-05.avif',
    services: DEFAULT_TAGS,
    challengeStatement:
      'Fashionable had strong retail traction, yet mobile shoppers struggled with slow lookbooks and a fragmented checkout path.',
    challengeSubtext:
      'Our cross-functional teams work together efficiently to achieve outstanding results across all digital channels.',
    challengeImage: '/assets/images/projects/Challenge-Image.avif',
    approachHeading: 'How We Approach the Situation',
    approachIntro:
      'We brought the in-store energy online with a confident brand system, consistent product imagery and a mobile-first shopping flow.',
    approachImage: '/assets/images/projects/Approach-Image.avif',
    phases: DEFAULT_PHASES,
    results: DEFAULT_RESULTS,
    seo: {
      title: 'Fashionable - HyperFrame',
      description:
        'Fashionable is a HyperFrame case study covering branding, web design, illustration and icon design for a modern fashion label, delivered in only 12 weeks.',
    },
  },
  {
    id: 'co-brand',
    slug: 'co-brand',
    index: '(006)',
    title: 'Co Brand',
    year: '/2025',
    role: '/Website Designer',
    industry: '/Website Designer',
    scope: '/ Branding / Web design',
    timeline: '12 weeks',
    rating: '4.8 / 5',
    summary:
      'We have worked with companies across various industries to bring their visions to life. Below are some highlights of our featured projects.',
    thumbnail: '/assets/images/projects/Project-Short-Image-06.avif',
    detailImage: '/assets/images/projects/Project-Banner-Image-06.avif',
    backgroundMedia: '/assets/images/projects/Project-Banner-Image-06.avif',
    services: DEFAULT_TAGS,
    challengeStatement:
      'Co Brand needed a distinctive outdoor-inspired identity system and high-impact campaign landing experience for a collaborative brand launch.',
    challengeSubtext:
      'Our cross-functional teams work together efficiently to achieve outstanding results across all digital channels.',
    challengeImage: '/assets/images/projects/Challenge-Image.avif',
    approachHeading: 'How We Approach the Situation',
    approachIntro:
      'We united two visual voices under a cohesive architectural grid, bold typography, and conversion-focused campaign storytelling.',
    approachImage: '/assets/images/projects/Approach-Image.avif',
    phases: DEFAULT_PHASES,
    results: DEFAULT_RESULTS,
    seo: {
      title: 'Co Brand - HyperFrame',
      description:
        'Co Brand is a HyperFrame case study covering branding, web design, illustration and icon design for a collaborative brand partnership, built in 12 weeks.',
    },
  },
];
