import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface PracticeCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  index?: number;
  highlightItems?: string[];
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  slug,
  title,
  description,
  index = 1,
  highlightItems,
}) => {
  const destination = `/areas/${slug}`;
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  return (
    <article className="group relative flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#2D2D2D]/10 hover:border-[#B6945A]/60 rounded-[2px] transition-all duration-300 hover:shadow-[0_12px_36px_-10px_rgba(25,49,38,0.08)]">
      <div>
        {/* Editorial Index Number */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#2D2D2D]/8">
          <span className="font-serif text-3xl sm:text-4xl text-[#B6945A] font-light">
            {formattedIndex}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#2D2D2D]/50 font-medium">
            Especialidade
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium tracking-tight mb-4 group-hover:text-[#244434] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#2D2D2D]/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Highlight Situations Preview */}
        {highlightItems && highlightItems.length > 0 && (
          <ul className="space-y-2 mb-8 pt-4 border-t border-[#2D2D2D]/6 text-xs text-[#2D2D2D]/70 font-sans">
            {highlightItems.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Saiba mais Link with ArrowUpRight */}
      <div className="pt-6 border-t border-[#2D2D2D]/6 mt-auto">
        <Link
          to={destination}
          aria-label={`Saiba mais sobre ${title}`}
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium tracking-[0.14em] uppercase text-[#193126] group-hover:text-[#B6945A] transition-colors select-none"
        >
          <span>Saiba mais</span>
          <ArrowUpRight className="w-4 h-4 text-[#B6945A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default PracticeCard;
