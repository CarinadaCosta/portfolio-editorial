import type { Document } from "@contentful/rich-text-types";
import type { Article } from "@/data/articles";
import { contentfulClient } from "./contentful";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function getArticles(): Promise<Article[]> {
  const response = await contentfulClient.getEntries({
    content_type: "article",
    include: 2,
  });

  

  return response.items.map((item) => {
  const fields = item.fields;

  const image = fields.image as {
    fields?: {
      file?: {
        url?: string;
      };
    };
  } | undefined;

  const gallery = fields.gallery as
    | Array<{
        fields?: {
          file?: {
            url?: string;
          };
        };
      }>
    | undefined;

  const pdf = fields.pdf as {
    fields?: {
      file?: {
        url?: string;
      };
    };
  } | undefined;

  return {
    slug: slugify(fields.slug as string),
    featured: fields.featured as boolean | undefined,
    featuredOrder: fields.featuredOrder as number | undefined,
    title: fields.title as string,
    excerpt: fields.excerpt as string | undefined,
    date: (fields.date as string).split("T")[0],

    image: image?.fields?.file?.url
      ? `https:${image.fields.file.url}`
      : "",

    instagramUrl: fields.instagramUrl as string | undefined,

    pdfUrl: pdf?.fields?.file?.url
      ? `https:${pdf.fields.file.url}`
      : undefined,

    gallery: gallery
      ?.map((asset) =>
        asset.fields?.file?.url
          ? `https:${asset.fields.file.url}`
          : ""
      )
      .filter(Boolean),

    content: fields.content as Document | undefined,
  };
});
}