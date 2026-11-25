export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  basePrice: string;
  withDevPrice: string;
  addDevLabel: string;
  deliveryTime: string;
  icon: string;
  dark: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    description:
      'Great for small teams or startups that need quick, clean designs for websites or branding materials.',
    basePrice: '$1,999',
    withDevPrice: '$5,499',
    addDevLabel: 'Add Development ($3,699)',
    deliveryTime: '4-6 weeks',
    icon: '/assets/icons/Pricing-Icon-01.svg',
    dark: false,
    features: [
      'Single Landing Page Design',
      'Custom UI/UX Design',
      'Responsive (Mobile & Tablet)',
      '2 Rounds of Revisions',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description:
      'A complete customized design solutions with strategy, visuals, and collaboration.',
    basePrice: '$4,999',
    withDevPrice: '$7,599',
    addDevLabel: 'Add Development ($7,599)',
    deliveryTime: '6-8 weeks',
    icon: '/assets/icons/Pricing-Icon-02.svg',
    dark: true,
    features: [
      'Up to 10 Page Website',
      'Brand Strategy & Identity',
      'CMS Setup & Training',
      'Priority Support',
    ],
  },
];
