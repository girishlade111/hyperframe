import { useState } from 'react';
import { faqs } from '../../data/faqs';
import { SectionLabel } from '../common/SectionLabel';

export function FAQSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const leftCol = faqs.slice(0, 3);
  const rightCol = faqs.slice(3, 6);

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderColumn = (items: typeof faqs) => (
    <div className="faw-flex-wrap">
      {items.map((item) => {
        const isOpen = Boolean(openIds[item.id]);
        return (
          <div key={item.id} className={`faq-card-wrap ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-question-btn"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() => toggle(item.id)}
            >
              <span className="faq-question">{item.question}</span>
              <span className="faq-icon-wrap" aria-hidden="true">
                <img
                  width={20}
                  height={20}
                  alt=""
                  src={isOpen ? '/assets/icons/Minuses-Icon.svg' : '/assets/icons/Plus-Icon-.svg'}
                  className="faq-icon"
                />
              </span>
            </button>
            <div id={`${item.id}-panel`} className="faq-answer-wrap" hidden={!isOpen && false}>
              <div className="faq-answer-inner">
                <p className="faq-details">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="section faq">
      <div className="container">
        <div className="faq-top-wrap">
          <SectionLabel variant="brace" label="FAQs" />
          <div className="faq-title-wrap">
            <h2 className="section-title is-h3-medium">Frequently Asked Questions</h2>
          </div>
          <div className="faq-details-wrap">
            <p className="inner-details is-license">
              Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
            </p>
          </div>
        </div>

        <div className="faq-wrap">
          <div className="faq-grid-wrap">
            {renderColumn(leftCol)}
            {renderColumn(rightCol)}
          </div>
        </div>
      </div>
    </section>
  );
}
