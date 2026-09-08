import FeaturedArticle from "@/components/articles/FeaturedArticle";
import ArticleCard from "@/components/articles/ArticleCard";
import { getArticles } from "@/lib/getArticles";

export default async function Home() {
  const articles = await getArticles();

const featuredArticles = articles
  .filter((article) => article.featured)
  .sort(
    (a, b) =>
      (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999)
  );

  const featuredArticle = featuredArticles[0];
  const secondaryArticles = featuredArticles.slice(1, 3); 
  if (!featuredArticle) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div
        className="
          grid gap-10
          md:grid-cols-[2fr_1fr]
          md:[grid-template-rows:auto_1fr_auto_auto_1fr_auto]
          md:gap-y-6
        "
      >
        <FeaturedArticle
          title={featuredArticle.title}
          excerpt={featuredArticle.excerpt ?? ""}
          date={featuredArticle.date}
          image={featuredArticle.image}
          href={`/articulos/${featuredArticle.slug}`}
        />

        <div className="flex flex-col gap-10 md:grid md:[grid-template-rows:subgrid] md:[grid-row:1/-1]">
          {secondaryArticles.map((article, i) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              date={article.date}
              image={article.image}
              href={`/articulos/${article.slug}`}
              className={
                i === 0
                  ? "md:[grid-row:1/4] md:[&>a>h2]:translate-y-22 md:[&>a>time]:-translate-y-0 md:[&>a>div]:-mb-8"
                  : "md:[grid-row:4/7] md:[&>a>h2]:-translate-y-1 md:[&>a>time]:-translate-y-7 md:[&>a>div]:-mt-8"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}