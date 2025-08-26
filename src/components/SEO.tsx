import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  noindex = false,
  structuredData,
}) => {
  return (
    <>
      {title && <title>{title}</title>}

      {description && <meta name="description" content={description} />}

      {canonical && <link rel="canonical" href={canonical} />}

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      )}

      {/* Preconnect to external domains for faster loading */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="dns-prefetch" href="https://images.pexels.com" />

      {/* Additional meta tags for better SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="ID-JK" />
      <meta name="geo.placename" content="Jakarta Timur" />
      <meta name="geo.position" content="-6.2791259;106.849637" />
      <meta name="ICBM" content="-6.2791259, 106.849637" />
    </>
  );
};
