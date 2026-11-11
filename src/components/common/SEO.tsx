import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.description,
  canonical,
  ogType = 'website',
  ogImage,
  noIndex = false,
  schema,
}) => {
  const location = useLocation();
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const baseUrl = 'https://thallysapinheiro.adv.br';
  const resolvedCanonical = canonical || `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteConfig.name,
    description: description,
    url: resolvedCanonical,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: 'BR',
    },
    founder: {
      '@type': 'Person',
      name: siteConfig.lawyerName,
      jobTitle: 'Advogada',
    },
    priceRange: '$$',
    areaServed: 'Brasil',
  };

  const schemaToRender = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaToRender)}
      </script>
    </Helmet>
  );
};
