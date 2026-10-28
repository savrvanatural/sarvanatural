import type { Metadata } from "next";
import { SITE_CONFIG } from "./config";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  image = SITE_CONFIG.defaultOgImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = path
    ? path.startsWith("http")
      ? path
      : `${SITE_CONFIG.baseUrl}${path.startsWith("/") ? path : `/${path}`}`
    : SITE_CONFIG.baseUrl;

  const absoluteImageUrl = image.startsWith("http")
    ? image
    : `${SITE_CONFIG.baseUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - SARVA NATURAL`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
