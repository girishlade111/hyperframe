export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItemData[] = [
  {
    id: 'faq-1',
    question: '1. What services does your agency offer?',
    answer:
      'We specialize in UI/UX design, website development, branding, and product design. Whether you need a landing page, a full website, we have got you covered.',
  },
  {
    id: 'faq-2',
    question: '2. How do I get started with a project?',
    answer:
      'Simply reach out to us through our contact form or email. We will schedule a quick discovery call to understand your needs, discuss the details, and guide you through the next steps.',
  },
  {
    id: 'faq-3',
    question: '3. What is your typical project timeline?',
    answer:
      'Timelines vary based on the project type and complexity. A simple website can take 2 to 4 weeks, while larger projects may take 6 to 12 weeks. We will share a clear timeline before we start.',
  },
  {
    id: 'faq-4',
    question: '4. How much do your services cost?',
    answer:
      'Our pricing depends on the scope, timeline, and complexity of your project. We provide custom quotes after understanding your goals and requirements. Get in touch for a detailed proposal tailored to your needs.',
  },
  {
    id: 'faq-5',
    question: '5. Will I be involved in the design process?',
    answer:
      'Yes, absolutely. We keep you involved at every stage, from initial concepts to final delivery. You will receive regular updates, feedback rounds, and full transparency throughout the process.',
  },
  {
    id: 'faq-6',
    question: '6. Development & Testing Platform',
    answer:
      'Yes. We handle the full development process, including cross-browser testing, performance optimization, and bug fixes. Your site will be fast, responsive, and ready for launch.',
  },
];
