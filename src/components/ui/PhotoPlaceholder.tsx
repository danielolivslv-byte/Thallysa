import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../../config/siteConfig';

interface PhotoPlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  src,
  alt = siteConfig.name,
  className = '',
  priority = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const showFallback = !src || imageError;

  return (
    <div
      className={`relative w-full aspect-[3/4] max-w-[480px] mx-auto overflow-hidden rounded-[2px] bg-[#193126] shadow-[0_20px_50px_-15px_rgba(25,49,38,0.25)] border border-[#B6945A]/30 ${className}`}
    >
      {!showFallback && (
        <img
          src={src}
          alt={alt}
          width={480}
          height={640}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover object-[center_18%] transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Fallback composition when no photo or on error */}
      {showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-between p-8 sm:p-10 text-center bg-gradient-to-b from-[#244434] via-[#193126] to-[#0f1f18] text-[#F8F6F2]">
          {/* Subtle architectural border inside */}
          <div
            className="absolute inset-4 sm:inset-5 border border-[#B6945A]/35 pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Label */}
          <div className="relative z-10 pt-2">
            <span className="font-sans text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-[#B6945A]">
              Consultoria Jurídica
            </span>
          </div>

          {/* Center Monogram */}
          <div className="relative z-10 my-auto flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#B6945A]/50 flex items-center justify-center bg-[#193126]/60 backdrop-blur-xs mb-4 shadow-inner">
              <span className="font-serif text-5xl sm:text-6xl text-[#B6945A] font-light tracking-widest pl-1">
                TP
              </span>
            </div>
            <div className="h-[1px] w-16 bg-[#B6945A]/40 my-3" />
            <p className="font-serif italic text-sm text-[#F8F6F2]/80 max-w-[240px]">
              Ética, dedicação e excelência técnica
            </p>
          </div>

          {/* Bottom Signature */}
          <div className="relative z-10 pb-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Thallysa Pinheiro
            </h3>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#B6945A] mt-1 font-medium">
              Advogada
            </p>
            <p className="text-[10px] text-white/50 tracking-wider mt-1.5 font-mono">
              {siteConfig.oab}
            </p>
          </div>
        </div>
      )}

      {/* Elegant overlay vignette */}
      <div
        className="absolute inset-0 ring-1 ring-inset ring-[#B6945A]/20 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default PhotoPlaceholder;
