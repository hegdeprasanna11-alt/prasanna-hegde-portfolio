import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEOHead = ({
  title = "Prasanna Hegde - Product Leader (Platform) - Regulated Systems, Digital Identity & Trust Infrastructure | UIDAI Aadhaar Sandbox |Ex-Infosys",
  description = "Product Strategy & Innovation Lead at UIDAI with 18+ years building AI-powered products, digital identity platforms, and fintech solutions. 100+ organizations onboarded, $2.1M+ revenue generated. Expert in Agentic AI, Machine Learning, API platforms, GDPR compliance, and marketplace development.",
  keywords = "Product Manager, Product Leader, Agentic AI, Machine Learning, NLP, Credit Risk AI, Resume Screening AI, Digital Identity, Aadhaar, UIDAI, Fintech, API Platform, B2B SaaS, Marketplace, GDPR, Data Governance, CRM, Telecom, Bangalore, India, Product Strategy, 0 to 1 Product",
  ogTitle = "Prasanna Hegde | Product Leader - AI, Digital Identity & Fintech",
  ogDescription = "Building India's Aadhaar Sandbox at UIDAI. 18+ years creating AI-powered products: Credit Risk AI, Resume-JD Matching, Marketplace Platforms. $2.1M+ revenue impact.",
  ogType = "website",
  canonicalUrl = "https://prasannahegde.com",
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prasanna Hegde",
    "jobTitle": "Product Strategy & Innovation Lead",
    "description": "Product Manager specializing in AI/ML, Digital Identity, and Fintech",
    "worksFor": {
      "@type": "Organization",
      "name": "UIDAI"
    },
    "alumniOf": ["IIM Lucknow", "Institute of Product Leadership", "Coventry University"],
    "knowsAbout": ["Product Management", "Agentic AI", "Machine Learning", "Digital Identity", "API Platforms", "Fintech", "GDPR"],
    "url": canonicalUrl,
    "sameAs": [
      "https://linkedin.com/in/prasannahegde"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Prasanna Hegde" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
{/* Favicon - Text-based with initials */}
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90' fill='%230d9488'>PH</text></svg>" />


      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="Prasanna Hegde Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
