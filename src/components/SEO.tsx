import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
  siteName?: string;
  locale?: string;
  type?: "website" | "article";
}

const HOST = "https://main.d21uxun1hn1y66.amplifyapp.com";

export default function SEO({
  title,
  description,
  url,
  image,
  siteName = "Some company name",
  locale = "en_US",
  type = "website",
}: SEOProps) {
  const actualUrl = `${HOST}/${url}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    url: actualUrl,
    name: title,
    description,
    image,
  };

  return (
    <Head key="seo">
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={actualUrl} />

      {/* Open Graph */}
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={actualUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content={`Preview thumbnail for ${siteName}`}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={`Preview thumbnail for ${siteName}`}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
