export interface Testimonial {
  index: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    index: '001',
    quote:
      'HyperFrame rebuilt our brand and website in twelve weeks. Pages now load in under two seconds and online orders are up 40%.',
    author: 'Ethan Walker',
    role: 'Founder & CEO at ProFast',
    avatar: '/assets/images/testimonials/Testimonial-Author-Image.avif',
  },
  {
    index: '002',
    quote:
      'They turned our complex security product into a story customers understand. Demo requests doubled in the first month after launch.',
    author: 'Noah Carter',
    role: 'Head of Growth at SecureX',
    avatar: '/assets/images/testimonials/Blog-Author-Image-1.avif',
  },
  {
    index: '003',
    quote:
      'The team asked the right questions from day one. We finally have one clear message, and every page of the site supports it.',
    author: 'James Whitfield',
    role: 'Product Lead at Spinex Pro',
    avatar: '/assets/images/testimonials/Trusted-Image-04.avif',
  },
  {
    index: '004',
    quote:
      'Our old site felt flat. The new one shows what our VR product feels like, and visitors now stay twice as long as before.',
    author: 'Marcus Bennett',
    role: 'Founder at Virtualex',
    avatar: '/assets/images/testimonials/Trusted-Image-03.avif',
  },
  {
    index: '005',
    quote:
      'Mobile sales were our weak spot. After the redesign, more than half of our orders come from phones, and repeat orders keep growing.',
    author: 'Daniel Reyes',
    role: 'Co-Founder at Fashionable',
    avatar: '/assets/images/testimonials/Trusted-Image-02.avif',
  },
];

export const trustedAvatars = [
  '/assets/images/testimonials/Trusted-Image-01.avif',
  '/assets/images/testimonials/Trusted-Image-02.avif',
  '/assets/images/testimonials/Trusted-Image-03.avif',
  '/assets/images/testimonials/Trusted-Image-04.avif',
  '/assets/images/testimonials/Trusted-Image-05.avif',
];
