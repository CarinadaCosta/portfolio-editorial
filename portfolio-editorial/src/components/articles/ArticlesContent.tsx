"use client";
import { useState } from "react";
import ArticleListCard from "@/components/articles/ArticleListCard";
import ArticlePagination from "@/components/articles/ArticlePagination";
import type { Article } from "@/data/articles";

const ARTICLES_PER_PAGE = 6;

type ArticlesContentProps = {
  articles: Article[];
};

export default function ArticlesContent({
  articles,
}: ArticlesContentProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(
    sortedArticles.length / ARTICLES_PER_PAGE
  );

  const startIndex = currentPage * ARTICLES_PER_PAGE;

  const visibleArticles = sortedArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE
  );

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article) => (
          <ArticleListCard
            key={article.slug}
            title={article.title}
            date={article.date}
            image={article.image}
            href={`/articulos/${article.slug}`}
          />
        ))}
      </div>

      <ArticlePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage((page) => page - 1)}
        onNext={() => setCurrentPage((page) => page + 1)}
      />
    </>
  );
}