export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: '001',
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your business, goals, and audience. Through discovery sessions, we align on objectives, competitors, and the message your website needs to deliver.',
    image: '/assets/images/process/Process-Image-01.avif',
  },
  {
    index: '002',
    title: 'Wireframing & UX',
    description:
      'Before visuals, we map out the structure. Wireframes help define content hierarchy, user flows, and page layouts, ensuring the site is intuitive and conversion-focused.',
    image: '/assets/images/process/Process-Image-02.avif',
  },
  {
    index: '003',
    title: 'User Interface Design',
    description:
      'This is where ideas come to life. We design modern, pixel-perfect interfaces with the right balance of creativity and usability, using your brand style to make the site stand out.',
    image: '/assets/images/process/Process-Image-03.avif',
  },
  {
    index: '004',
    title: 'Development & Testing',
    description:
      'We build the site with clean code, then test it on every screen size and browser. Speed, SEO and accessibility are checked and fine-tuned before anything goes live.',
    image: '/assets/images/process/Process-Image-04.avif',
  },
  {
    index: '005',
    title: 'Launch and Support',
    description:
      'We launch your new site and provide ongoing support (if needed) for updates, improvements, or scaling. Your website stays fast, secure, and reliable.',
    image: '/assets/images/process/Process-Image-05.avif',
  },
];
