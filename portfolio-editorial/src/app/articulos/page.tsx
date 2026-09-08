import ArticlesContent from "@/components/articles/ArticlesContent";
import { getArticles } from "@/lib/getArticles";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <ArticlesContent articles={articles} />
    </main>
  );
}