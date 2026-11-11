import React from 'react';

export interface InfoCardProps {
  number?: string;
  title: string;
  description: string;
  subtitle?: string;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  number,
  title,
  description,
  subtitle,
  className = '',
}) => {
  return (
    <div
      className={`p-6 sm:p-8 bg-white border border-[#2D2D2D]/10 hover:border-[#B6945A]/50 rounded-[2px] transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {number && (
          <span className="font-serif text-2xl sm:text-3xl text-[#B6945A] font-light block mb-3">
            {number}
          </span>
        )}
        {subtitle && (
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E6D34] font-semibold block mb-2">
            {subtitle}
          </span>
        )}
        <h4 className="font-serif text-xl sm:text-2xl text-[#193126] font-medium tracking-tight mb-3">
          {title}
        </h4>
        <p className="text-[#2D2D2D]/75 text-sm sm:text-base leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
