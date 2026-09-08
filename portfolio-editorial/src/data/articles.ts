
import type { Document } from "@contentful/rich-text-types";
export type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  instagramUrl?: string;
  pdfUrl?: string;
  gallery?: string[];
  content?: Document;
  featured?: boolean;
  featuredOrder?: number;
};
