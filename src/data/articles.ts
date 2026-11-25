export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
  image?: string;
  blockquote?: string;
}

export interface Article {
  id: string;
  slug: string;
  index: string;
  featured?: boolean;
  title: string;
  excerpt: string;
  publicationDate: string;
  readTime: string;
  category: string;
  coverImage: string;
  bannerImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: ArticleSection[];
  seo: {
    title: string;
    description: string;
  };
}

const DEFAULT_AUTHOR = {
  name: 'Noah Carter',
  role: 'Design Strategist at HyperFrame',
  avatar: '/assets/images/testimonials/Blog-Author-Image-1.avif',
};

const SHARED_SECTIONS: ArticleSection[] = [
  {
    heading: 'Introduction',
    paragraphs: [
      'In today’s fast-moving digital world, a website or app is often the first interaction users have with your brand. The truth? People do not just judge you by what you say: they judge you by how it feels to interact with your product. A strong UI/UX design can be the difference between a bounce and a loyal customer.',
      'In this guide, we explore key digital design practices shaping modern web experiences.',
    ],
  },
  {
    heading: 'The Connection Between UX and Conversions',
    paragraphs: [
      'A smooth, intuitive experience builds trust. When users can easily find what they need, they are far more likely to convert. Clean, uncluttered layouts remain timeless, while striking contrasts, oversized typography, bold color blocks, and dramatic visuals paired with white space create impact without overwhelming users.',
      'Here is how it starts:',
    ],
    bullets: [
      'Automated Responses, Human Touch. Handle repetitive queries instantly while keeping conversations natural and helpful.',
      'Smarter Routing & Task Management. Automatically tag, escalate, or resolve conversations with zero lag in team coordination.',
      'Integrated Knowledge Base. Let your documentation, FAQs, and product guides deliver context-rich answers in real time.',
    ],
    image: '/assets/images/blog/Blog-Rich-Image-01.avif',
  },
  {
    heading: 'Common UX Mistakes That Cost Conversions',
    paragraphs: [
      'AI and personalization are redefining web experiences by tailoring content, product suggestions, and layouts to individual users in real time. Yet foundational clarity still wins.',
    ],
    bullets: [
      'Overcomplicated Navigation: Too many choices overwhelm users.',
      'Slow Load Times: Every extra second lowers conversions.',
      'Inconsistent Design: A lack of visual flow creates friction.',
    ],
    callout: 'Why it matters: Small details create emotional connections, making simple interactions memorable.',
  },
  {
    heading: 'Our Approach at HyperFrame',
    paragraphs: [
      'At HyperFrame, we design with purpose. Every color, font, and interaction is carefully considered to align with business goals and user needs. We use design systems and testing to ensure consistency, scalability, and results.',
    ],
    bullets: [
      'Design directly impacts business growth.',
      'Small UX tweaks can lead to massive conversion gains.',
      'A strategic, user-centered approach ensures long-term results.',
    ],
    blockquote:
      'Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results.',
    image: '/assets/images/blog/Blog-Rich-Image-02.avif',
  },
  {
    heading: 'Real Results from Better Design',
    paragraphs: [
      'When one of our SaaS clients came to us, they had a high drop-off rate during onboarding. By simplifying the signup flow and improving the dashboard layout, we helped them increase activation rates by 35% in just two months.',
      'Good design is a marathon, not a sprint: it takes time and testing to see results, but patient, steady improvements always pay off.',
    ],
    bullets: [
      'Clearer onboarding steps',
      'Faster page load times',
      'One consistent design system',
      'Regular testing with real users',
    ],
  },
];

export const articles: Article[] = [
  {
    id: 'blog-1',
    slug: 'the-5-important-trend-in-website-design',
    index: '(001)',
    featured: true,
    title: 'The 5 important trend in website design',
    excerpt:
      "Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.",
    publicationDate: 'September 22, 2026',
    readTime: '6 min read',
    category: 'Design Trends',
    coverImage: '/assets/images/blog/Blog-Image-01.avif',
    bannerImage: '/assets/images/blog/Blog-Banner-Image-01.avif',
    author: DEFAULT_AUTHOR,
    sections: SHARED_SECTIONS,
    seo: {
      title: 'The 5 important trend in website design - HyperFrame',
      description:
        'Discover the five most important website design trends this year and learn how bold layouts, motion and thoughtful UX can help your brand stand out online.',
    },
  },
  {
    id: 'blog-2',
    slug: '5-website-design-trends-to-watch',
    index: '(002)',
    title: '5 Website Design Trends to Watch',
    excerpt:
      "Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.",
    publicationDate: 'September 22, 2026',
    readTime: '5 min read',
    category: 'UI/UX Design',
    coverImage: '/assets/images/blog/Blog-Image-02.avif',
    bannerImage: '/assets/images/blog/Blog-Banner-Image-02.avif',
    author: DEFAULT_AUTHOR,
    sections: SHARED_SECTIONS,
    seo: {
      title: '5 Website Design Trends to Watch - HyperFrame',
      description:
        'Explore five website design trends worth watching, from oversized typography to AI personalization, and see how each one can lift engagement and conversions.',
    },
  },
  {
    id: 'blog-3',
    slug: 'how-to-create-a-design-systems',
    index: '(003)',
    title: 'How to Create a Design Systems',
    excerpt:
      'Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.',
    publicationDate: 'September 22, 2026',
    readTime: '7 min read',
    category: 'Design Systems',
    coverImage: '/assets/images/blog/Blog-Image-03.avif',
    bannerImage: '/assets/images/blog/Blog-Image-03.avif',
    author: DEFAULT_AUTHOR,
    sections: SHARED_SECTIONS,
    seo: {
      title: 'How to Create a Design Systems - HyperFrame',
      description:
        'Learn how to create a design system that keeps colors, typography and components consistent, so your team ships faster and your brand looks the same everywhere.',
    },
  },
  {
    id: 'blog-4',
    slug: '20-useful-prompt-for-webflow',
    index: '(004)',
    title: '20+ Useful Prompt For Webflow',
    excerpt:
      "Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.",
    publicationDate: 'September 22, 2026',
    readTime: '8 min read',
    category: 'Workflow',
    coverImage: '/assets/images/blog/Blog-Image-04.avif',
    bannerImage: '/assets/images/blog/Blog-Banner-Image-04.avif',
    author: DEFAULT_AUTHOR,
    sections: SHARED_SECTIONS,
    seo: {
      title: '20+ Useful Prompt For Webflow - HyperFrame',
      description:
        'Get 20+ useful prompts that speed up page building, copywriting and SEO tasks, with practical tips on turning output into polished site content.',
    },
  },
  {
    id: 'blog-5',
    slug: 'top-5-webflow-features-in-2025',
    index: '(005)',
    title: 'Top 5 Webflow Features in 2025',
    excerpt:
      'Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.',
    publicationDate: 'September 22, 2026',
    readTime: '6 min read',
    category: 'Development',
    coverImage: '/assets/images/blog/Blog-Image-05.avif',
    bannerImage: '/assets/images/blog/Blog-Banner-Image-05.avif',
    author: DEFAULT_AUTHOR,
    sections: SHARED_SECTIONS,
    seo: {
      title: 'Top 5 Webflow Features in 2025 - HyperFrame',
      description:
        'See the top five modern web features, from GSAP interactions to smarter CMS tools, and learn how each one helps you build faster and better websites.',
    },
  },
  {
    id: 'blog-6',
    slug: 'how-colors-layouts-influence-users',
    index: '(006)',
    title: 'How Colors & Layouts Influence Users',
    excerpt:
      "Discover the newest digital design trends shaping this year's landscape and see how they can help your brand stand out all over the world by great ui ux design.",
    publicationDate: 'September 22, 2026',
    readTime: '5 min read',
    category: 'Visual Design',
    coverImage: '/assets/images/blog/Blog-Image-06.avif',
    bannerImage: '/assets/images/blog/Blog-Banner-Image-06.avif',
    author: DEFAULT_AUTHOR,
    sections: SHARED_SECTIONS,
    seo: {
      title: 'How Colors & Layouts Influence Users - HyperFrame',
      description:
        'Learn how colors and layouts influence users, from contrast and visual hierarchy to spacing, and how smart choices guide attention and improve conversions.',
    },
  },
  {
    id: 'blog-7',
    slug: 'how-to-balance-creativity-strategy',
    index: '(007)',
    title: 'How to Balance Creativity & Strategy',
    excerpt:
      'Learn why design isn’t just about looks it’s about creating seamless user journeys that drive business results.',
    publicationDate: 'September 22, 2026',
    readTime: '6 min read',
    category: 'Strategy',
    coverImage: '/assets/images/blog/Blog-Image-07.avif',
    bannerImage: '/assets/images/blog/Blog-Image-07.avif',
    author: DEFAULT_AUTHOR,
    sections: SHARED_SECTIONS,
    seo: {
      title: 'How to Balance Creativity & Strategy - HyperFrame',
      description:
        'Learn how to balance creativity and strategy in web design, so bold ideas stay focused on business goals, user needs and measurable results for your brand.',
    },
  },
];
