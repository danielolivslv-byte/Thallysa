import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id?: string;
  category?: string;
  question: string;
  answer: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className = '',
}) => {
  const baseId = useId();
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-4 w-full ${className}`} role="region" aria-label="Perguntas Frequentes">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headerId = `${baseId}-header-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.id || index}
            className={`border border-[#2D2D2D]/10 bg-white rounded-[2px] transition-all duration-200 ${
              isOpen ? 'border-[#B6945A]/70 shadow-xs' : 'hover:border-[#B6945A]/40'
            }`}
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 select-none hover:bg-[#F8F6F2]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[#B6945A] focus-visible:outline-offset-2"
              >
                <div className="flex flex-col gap-1">
                  {item.category && (
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8E6D34]">
                      {item.category}
                    </span>
                  )}
                  <span className="font-serif text-lg sm:text-xl md:text-2xl text-[#193126] font-medium leading-snug">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full border border-[#2D2D2D]/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#193126] text-[#B6945A] border-[#193126]' : 'text-[#193126] bg-[#F8F6F2]'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </div>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 pt-2 text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed border-t border-[#2D2D2D]/6">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
