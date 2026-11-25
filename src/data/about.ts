export interface CoreValue {
  index: string;
  title: string;
  description: string;
  icon: string;
}

export interface AwardItem {
  org: string;
  title: string;
  date: string;
  image: string;
}

export interface TeamMember {
  index: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export const aboutData = {
  heroPortraits: [
    {
      src: '/assets/images/about/About-Image-01.avif',
      alt: 'Smiling creative strategist in colorful outerwear',
    },
    {
      src: '/assets/images/about/About-Image-02.avif',
      alt: 'Creative director portrait in teal studio lighting',
    },
    {
      src: '/assets/images/about/About-Image-03.avif',
      alt: 'Designer portrait in vivid orange knit sweater',
    },
  ],
  storyBento: {
    story: {
      index: '001',
      title: 'Our Story',
      description:
        'HyperFrame combines design and growth expertise, helping startups and companies turn digital presence into growth engines.',
    },
    mission: {
      index: '002',
      title: 'Our Mission',
      description:
        'Empower businesses with digital support that are both beautiful and user-friendly, designed to drive results their operations.',
    },
    vision: {
      index: '003',
      title: 'Our Vision',
      description:
        'To be the go-to creative partner for thinking companies that want to scale through smart design and seamless use.',
    },
    images: {
      metallicObject: '/assets/images/about/Story-Single-Image-01.avif',
      bluePortrait: '/assets/images/about/Story-Single-Image-02.avif',
      orangeCube: '/assets/images/about/Story-Single-Image-03.avif',
      videoPoster: '/assets/images/about/Story-Video-BG-Image.avif',
    },
    showreel: {
      label: 'Showreel 2025',
      youtubeId: 'uRNlP2BC0EQ',
    },
  },
  coreValues: [
    {
      index: '001',
      title: 'Creativity with Purpose',
      description:
        'We do not just design for aesthetics; every idea, layout, and interaction is crafted to achieve impact and measurable results.',
      icon: '/assets/icons/hf-value-icon-01.svg',
    },
    {
      index: '002',
      title: 'Seamless Collaboration',
      description:
        'Your goals drive our process. We listen, adapt, and co-create to ensure your vision is at the heart of every solution.',
      icon: '/assets/icons/hf-value-icon-02.svg',
    },
    {
      index: '003',
      title: 'Innovation-First Mindset',
      description:
        'We adopt new tools, trends, and technologies to keep your brand at the forefront in a rapidly changing digital landscape.',
      icon: '/assets/icons/hf-value-icon-03.svg',
    },
    {
      index: '004',
      title: 'Excellence in Execution',
      description:
        'Our focus is on every detail, from strategy to delivery, to achieve a seamless, functional, and future-ready outcome.',
      icon: '/assets/icons/hf-value-icon-04.svg',
    },
  ] as CoreValue[],
  awards: [
    {
      org: 'Awwwards',
      title: 'Best UI UX Design Agency 2024',
      date: 'Dec 07, 2024',
      image: '/assets/images/about/Awwards-Image-01.avif',
    },
    {
      org: 'CSS Awards',
      title: 'Innovation in Web Design 2024',
      date: 'Jan 24, 2025',
      image: '/assets/images/about/Awwards-Image.avif',
    },
    {
      org: 'Dribbble',
      title: 'Top 10 Best of Mobile App Design 2025',
      date: 'Mar 12, 2025',
      image: '/assets/images/about/Awwards-Image-02.avif',
    },
    {
      org: 'Behance',
      title: 'Winner - Best of Architecture Website 2025',
      date: 'Dec 07, 2024',
      image: '/assets/images/about/Awwards-Image-03.avif',
    },
  ] as AwardItem[],
  team: [
    {
      index: '001',
      name: 'Robert Browny',
      role: 'Founder & CEO at HyperFrame',
      image: '/assets/images/team/Team-Image-01.avif',
      linkedin: 'https://www.linkedin.com/',
    },
    {
      index: '002',
      name: 'Jacob Jones',
      role: 'Web Developer at HyperFrame',
      image: '/assets/images/team/Team-Image-02.avif',
      linkedin: 'https://www.linkedin.com/',
    },
    {
      index: '003',
      name: 'Ronald Richards',
      role: 'Senior Sales VP at HyperFrame',
      image: '/assets/images/team/Team-Image-03.avif',
      linkedin: 'https://www.linkedin.com/',
    },
  ] as TeamMember[],
};
