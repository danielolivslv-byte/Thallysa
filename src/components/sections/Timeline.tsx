import React from 'react';
import { motion } from 'motion/react';

export interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
}

export const defaultSteps: TimelineStep[] = [
  {
    step: '01',
    title: 'Contato Inicial',
    subtitle: 'Primeiro contato e agendamento',
    description:
      'Envie sua mensagem pelo WhatsApp apresentando um breve resumo da sua situação. Nossa equipe acolhe seu caso e agenda sua consulta no melhor horário.',
    details: ['Atendimento direto', 'Agendamento simplificado', 'Sigilo absoluto garantido'],
  },
  {
    step: '02',
    title: 'Análise Detalhada',
    subtitle: 'Estudo documental e viabilidade',
    description:
      'A Dra. Thallysa Pinheiro examina minuciosamente documentos, contratos, conversas e o histórico fático para mapear os direitos aplicáveis.',
    details: ['Exame técnico individualizado', 'Verificação de riscos e prazos', 'Mapeamento de provas'],
  },
  {
    step: '03',
    title: 'Orientação Clara',
    subtitle: 'Consulta e estratégia sob medida',
    description:
      'Em reunião online ou presencial, você recebe um parecer transparente e objetivo sobre as reais possibilidades do caso, sem jargões desnecessários.',
    details: ['Explicação sem termos complexos', 'Caminhos judiciais e extrajudiciais', 'Transparência total de honorários'],
  },
  {
    step: '04',
    title: 'Próximos Passos',
    subtitle: 'Ação e acompanhamento contínuo',
    description:
      'Com o plano validado por você, iniciamos a atuação — seja uma notificação, acordo ou peticionamento judicial — com feedbacks regulares a cada andamento.',
    details: ['Comunicação ativa a cada etapa', 'Acesso fácil a atualizações', 'Dedicação contínua'],
  },
];

interface TimelineProps {
  steps?: TimelineStep[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  steps = defaultSteps,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* DESKTOP TIMELINE (Horizontal) */}
      <div className="hidden lg:block">
        <div className="relative grid grid-cols-4 gap-8">
          {/* Connecting Line across steps */}
          <div
            className="absolute top-10 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-[#B6945A]/30 via-[#B6945A] to-[#B6945A]/30 -z-0"
            aria-hidden="true"
          />

          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.45 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Circle Node */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-[#193126] group-hover:border-[#B6945A] flex items-center justify-center shadow-sm transition-all duration-300 mb-6 group-hover:shadow-[0_8px_24px_rgba(182,148,90,0.18)]">
                <span className="font-serif text-2xl font-medium text-[#193126] group-hover:text-[#B6945A] transition-colors">
                  {item.step}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-serif text-2xl font-medium text-[#193126] tracking-tight mb-2">
                {item.title}
              </h3>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8E6D34] mb-3">
                {item.subtitle}
              </span>

              {/* Description */}
              <p className="text-sm text-[#2D2D2D]/75 leading-relaxed font-normal mb-4">
                {item.description}
              </p>

              {/* Bullet Details */}
              {item.details && (
                <ul className="text-left w-full space-y-1.5 pt-3 border-t border-[#2D2D2D]/8 text-xs text-[#2D2D2D]/70 font-sans">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#B6945A]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* MOBILE / TABLET TIMELINE (Vertical) */}
      <div className="lg:hidden relative pl-6 sm:pl-8 space-y-10 sm:space-y-12">
        {/* Continuous Vertical Rail */}
        <div
          className="absolute left-3 sm:left-4 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#B6945A] via-[#193126]/30 to-[#B6945A]/40 -translate-x-1/2"
          aria-hidden="true"
        />

        {steps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="relative"
          >
            {/* Step Node Marker on vertical rail */}
            <div className="absolute -left-[30px] sm:-left-[38px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#193126] flex items-center justify-center shadow-sm">
              <span className="font-serif text-xs sm:text-sm font-semibold text-[#193126]">
                {item.step}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-6 bg-white border border-[#2D2D2D]/10 rounded-[2px] shadow-xs">
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8E6D34] block mb-1">
                {item.subtitle}
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#193126] tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed mb-4">
                {item.description}
              </p>

              {item.details && (
                <ul className="space-y-1.5 pt-3 border-t border-[#2D2D2D]/8 text-xs text-[#2D2D2D]/70 font-sans">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
