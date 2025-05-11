import type { Metadata } from "next";

interface SEOOptions {
  title: string;
  description: string;
  url: string;
  image: string;
  siteName?: string;
  locale?: string;
}

const HOST = "https://main.d21uxun1hn1y66.amplifyapp.com";

export async function seoHelper({
  title,
  description,
  url,
  image,
  siteName = "Some company name",
  locale = "en_US",
}: SEOOptions): Promise<Metadata> {
  const actualUrl = `${HOST}/${url}`;

  return {
    title,
    description,
    alternates: { canonical: actualUrl },
    openGraph: {
      locale,
      siteName,
      type: "website",
      url: actualUrl,
      title,
      description,
      images: [
        {
          url: image,
          alt: `Preview thumbnail for ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
