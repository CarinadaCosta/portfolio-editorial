"use client";

type ArticlePaginationProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ArticlePagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: ArticlePaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-end gap-4">
      {currentPage > 0 && (
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Ver artículos anteriores"
          className="text-2xl font-extra-bold text-accent transition-transform duration-300 hover:-translate-x-1"
        >
          ←
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          type="button"
          onClick={onNext}
          aria-label="Ver más artículos"
          className="text-2xl font-extra-bold text-accent transition-transform duration-300 hover:translate-x-1"
        >
          →
        </button>
      )}
    </div>
  );
}