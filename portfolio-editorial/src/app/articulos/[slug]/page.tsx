
import { notFound } from "next/navigation";
import ArticleGallery from "@/components/articles/ArticleGallery";
import { getArticles } from "@/lib/getArticles";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const articles = await getArticles();
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const articleUrl = `https://carinadacosta.com/articulos/${slug}`;

  return {
    title: article.title,
    description: article.excerpt || "Artículo de Carina da Costa.",

    openGraph: {
      type: "article",
      url: articleUrl,
      title: article.title,
      description: article.excerpt || "Artículo de Carina da Costa.",
      images: article.image
        ? [
            {
              url: article.image,
              alt: article.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const articles = await getArticles();
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `https://carinadacosta.com/articulos/${slug}`;
  const shareText = `${article.title}\n\n${articleUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="mt-2 font-heading text-xl tracking-[0.05em] leading-[1.00] text-foreground md:text-2xl">
        {article.title}
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text">
        {article.excerpt}
      </p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 896px"
          className="h-full w-full object-cover"
        />
      </div>

      {article.content && (
        <div className="mt-10 space-y-6 text-base leading-relaxed text-text">
          {documentToReactComponents(article.content as any)}
        </div>
      )}

      {article.gallery && article.gallery.length > 0 && (
        <ArticleGallery images={article.gallery} />
      )}

      {(article.instagramUrl || article.pdfUrl) && (
        <div className="mt-12 flex flex-wrap gap-4">
          {article.instagramUrl && (
            <a
              href={article.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              Ver en Instagram
            </a>
          )}

          {article.pdfUrl && (
            <a
              href={article.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              Ver PDF
            </a>
          )}
        </div>
      )}

      <div className="mt-12 border-t border-border pt-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartir ${article.title} por WhatsApp`}
          className="inline-flex items-center gap-3 border border-border px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.15 1.6 5.97L0 24l6.24-1.64a11.93 11.93 0 0 0 5.84 1.53h.01c6.58 0 11.94-5.36 11.94-11.94a11.86 11.86 0 0 0-3.51-8.47ZM12.09 21.9a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.7.97.99-3.61-.23-.37a9.89 9.89 0 0 1-1.52-5.35c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
          </svg>
          Compartir por WhatsApp
        </a>
      </div>
    </main>
  );
}