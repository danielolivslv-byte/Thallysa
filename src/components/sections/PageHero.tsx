import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../ui/PageContainer';

interface PageHeroProps {
  kicker?: string;
  title: string | React.ReactNode;
  description?: string;
  parentPath?: string;
  parentLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker,
  title,
  description,
  parentPath,
  parentLabel,
  children,
  className = '',
}) => {
  return (
    <section className={`pt-12 sm:pt-16 pb-14 sm:pb-20 border-b border-[#2D2D2D]/8 bg-[#F8F6F2] ${className}`}>
      <PageContainer>
        {/* Optional Breadcrumb navigation */}
        {parentPath && parentLabel && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-sans text-[#2D2D2D]/60 uppercase tracking-widest">
              <li>
                <Link to="/" className="hover:text-[#B6945A] transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#B6945A]/70">/</li>
              <li>
                <Link to={parentPath} className="hover:text-[#B6945A] transition-colors">
                  {parentLabel}
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#B6945A]/70">/</li>
              <li className="text-[#193126] font-medium" aria-current="page">
                {typeof title === 'string' ? title : ''}
              </li>
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {kicker && (
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8E6D34] block mb-3">
              {kicker}
            </span>
          )}

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#193126] tracking-tight leading-[1.12] mb-6 text-balance">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg md:text-xl text-[#2D2D2D]/80 leading-relaxed font-normal text-balance">
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </PageContainer>
    </section>
  );
};

export default PageHero;
