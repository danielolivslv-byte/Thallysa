import React from 'react';

interface SectionTitleProps {
  kicker?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  isLight?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
  isLight = false,
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-12 sm:mb-16 ${className}`}>
      {kicker && (
        <span
          className={`font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
            isLight ? 'text-[#B6945A]' : 'text-[#8E6D34]'
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-balance ${
          isLight ? 'text-white' : 'text-[#193126]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 sm:mt-5 text-base sm:text-lg font-normal leading-relaxed max-w-2xl text-balance ${
            isLight ? 'text-white/80' : 'text-[#2D2D2D]/80'
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`h-[1px] w-12 bg-[#B6945A]/60 mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default SectionTitle;
