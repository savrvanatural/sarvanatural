export type BlogStatus = "draft" | "in_review" | "approved" | "published" | "archived";

export interface BlogAuthor {
  name: string;
  role: string;
  credentials: string;
  avatar?: string;
  bio?: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string; // Markdown / structured HTML
  featuredImage: string;
  author: BlogAuthor;
  publishedAt: string; // ISO 8601 date string e.g. "2026-10-26T00:00:00.000Z"
  updatedAt: string;
  readTime: string;
  status: BlogStatus;
  category: string;
  tags: string[];
  productId: string; // References product id e.g. "prod-moringa", "prod-triphala", "prod-ashwagandha"
  faqs: BlogFaq[];
  disclaimer: string;
}
