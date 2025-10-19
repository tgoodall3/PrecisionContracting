import { useState } from 'react';
import clsx from 'clsx';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="rounded-lg border border-brand-gray bg-white shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-brand-navy"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
            >
              <span>{item.question}</span>
              {open ? (
                <MinusSmallIcon className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
              ) : (
                <PlusSmallIcon className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
              )}
            </button>
            <div
              id={`faq-panel-${index}`}
              hidden={!open}
              className={clsx('px-4 pb-4 text-sm text-brand-navy/80')}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
