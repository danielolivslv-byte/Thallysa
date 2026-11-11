import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, MessageCircle } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { Button } from '../../components/buttons/Button';
import { buildWhatsAppUrl } from '../../config/siteConfig';

export const NotFoundPage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('Olá, Dra. Thallysa! Estava navegando no site e preciso de orientação.');

  return (
    <>
      <SEO
        title="Página Não Encontrada (404)"
        description="A página que você está procurando não foi encontrada ou foi movida."
        noIndex
      />

      <main className="min-h-[70vh] flex items-center justify-center py-20 bg-[#F8F6F2]">
        <PageContainer size="narrow">
          <div className="text-center flex flex-col items-center">
            {/* Monogram Seal */}
            <div className="w-16 h-16 rounded-full border border-[#B6945A] flex items-center justify-center font-serif text-2xl text-[#B6945A] bg-[#193126] mb-8 shadow-sm">
              TP
            </div>

            <span className="font-serif text-7xl sm:text-8xl md:text-9xl font-light text-[#B6945A] tracking-widest block leading-none mb-4">
              404
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#193126] font-medium tracking-tight mb-4 text-balance">
              Página Não Encontrada
            </h1>

            <p className="text-base sm:text-lg text-[#2D2D2D]/75 max-w-md mx-auto leading-relaxed mb-10 text-balance font-normal">
              O endereço acessado não existe, foi alterado ou está temporariamente indisponível. Utilize os atalhos abaixo para continuar sua navegação com tranquilidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button to="/" variant="primary" size="lg" icon={<Home className="w-4 h-4 mr-1" />}>
                Voltar para o Início
              </Button>
              <Button
                href={whatsappUrl}
                isExternal
                variant="outline"
                size="lg"
                icon={<MessageCircle className="w-4 h-4 mr-1 text-[#B6945A]" />}
              >
                Falar com a Advogada
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-[#2D2D2D]/10 flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-[#2D2D2D]/60 uppercase tracking-widest">
              <Link to="/sobre" className="hover:text-[#B6945A] transition-colors">
                Sobre
              </Link>
              <span>·</span>
              <Link to="/areas" className="hover:text-[#B6945A] transition-colors">
                Áreas de Atuação
              </Link>
              <span>·</span>
              <Link to="/atendimento" className="hover:text-[#B6945A] transition-colors">
                Atendimento
              </Link>
              <span>·</span>
              <Link to="/contato" className="hover:text-[#B6945A] transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </PageContainer>
      </main>
    </>
  );
};

export default NotFoundPage;
