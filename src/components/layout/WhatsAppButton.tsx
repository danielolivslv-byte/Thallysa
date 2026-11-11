import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = buildWhatsAppUrl('Olá, Dra. Thallysa! Gostaria de tirar uma dúvida jurídica.');

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40">
      <div className="relative flex items-center">
        {/* Tooltip: Fale com a advogada */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3.5 whitespace-nowrap bg-[#193126] text-white text-xs font-sans font-medium py-2 px-3.5 rounded-[2px] border border-[#B6945A]/40 shadow-lg pointer-events-none select-none"
              role="tooltip"
            >
              <span>Fale com a advogada</span>
              {/* Little arrow */}
              <div
                className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#193126] border-t border-r border-[#B6945A]/40 rotate-45"
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Fale com a advogada pelo WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#193126] border-2 border-[#B6945A] text-[#B6945A] hover:bg-[#244434] hover:text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(25,49,38,0.4)] transition-colors focus-visible:outline-2 focus-visible:outline-[#B6945A] focus-visible:outline-offset-3"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.a>
      </div>
    </aside>
  );
};

export default WhatsAppButton;
