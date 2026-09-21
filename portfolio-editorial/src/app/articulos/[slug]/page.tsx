import { notFound } from "next/navigation";
import ArticleGallery from "@/components/articles/ArticleGallery";
import { getArticles } from "@/lib/getArticles";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
        <div className="mt-10  space-y-6 text-base leading-relaxed text-text">
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
    </main>
  );
}