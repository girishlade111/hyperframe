export interface NavItem {
  label: string;
  to: string;
}

export interface SocialLink {
  name: string;
  href: string;
  grayIcon: string;
  orangeIcon: string;
}

export const siteConfig = {
  brandName: 'HyperFrame',
  locationLabel: 'NEW YORK, USA',
  timezone: 'America/New_York',
  availabilityText: 'Available for New Projects',
  phone: '(239) 555-0108',
  phoneHref: 'tel:(239)555-0108',
  email: 'hello@hyperframe.com',
  ctaEmail: 'hyperframe@gmail.com',
  supportEmail: 'support@hyperframe.com',
  copyright: 'Copyright (c) HyperFrame 2026',
  logos: {
    lightText: '/assets/brand/Logo.svg',
    darkText: '/assets/brand/Logo-50.svg',
    footer: '/assets/brand/Footer-Brand-Logo.svg',
    contact: '/assets/brand/Contact-Logo.svg',
    availableBg: '/assets/brand/Available-BG.svg',
  },
  navLinks: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/service' },
    { label: 'Projects', to: '/project' },
    { label: 'Blogs', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ] as NavItem[],
  footerColumn1: [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/service' },
    { label: 'Services Details', to: '/service/branding' },
    { label: 'Project', to: '/project' },
    { label: 'Project Details', to: '/project/spinex-pro' },
    { label: 'Contact Us', to: '/contact' },
  ] as NavItem[],
  footerColumn2: [
    { label: 'Style Guide', to: '/style-guide' },
    { label: 'Licenses', to: '/licenses' },
    { label: 'Changelog', to: '/changelog' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Instructions', to: '/instructions' },
    { label: '404', to: '/404' },
    { label: 'Password', to: '/401' },
  ] as NavItem[],
  socials: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      grayIcon: '/assets/icons/Facebook-Gray.svg',
      orangeIcon: '/assets/icons/Facebook-Orange.svg',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      grayIcon: '/assets/icons/Instagram-01.svg',
      orangeIcon: '/assets/icons/Instagram-01-1.svg',
    },
    {
      name: 'X',
      href: 'https://www.x.com/',
      grayIcon: '/assets/icons/Linkedin-01.svg',
      orangeIcon: '/assets/icons/Linkedin-02.svg',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      grayIcon: '/assets/icons/Linkedin-02.svg',
      orangeIcon: '/assets/icons/linkedin-02-1.svg',
    },
  ] as SocialLink[],
  sponsors: [
    { name: 'Tessra / Rotashow', src: '/assets/icons/Rotashow.svg' },
    { name: 'Norvane', src: '/assets/brand/Sponsor-Logo-01.svg' },
    { name: 'Lumeq', src: '/assets/brand/Sponsor-Logo-02.svg' },
    { name: 'Orbisto', src: '/assets/brand/Sponsor-Logo-03.svg' },
    { name: 'Quillo', src: '/assets/brand/Sponsor-Logo-04.svg' },
  ],
};
