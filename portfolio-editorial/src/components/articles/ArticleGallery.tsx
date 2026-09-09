"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ArticleGalleryProps = {
  images: string[];
};

export default function ArticleGallery({
  images,
}: ArticleGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="mt-12">
        {/* Mobile */}
        <div className="flex gap-4 overflow-x-auto pb-2 sm:hidden">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-[4/3] w-[85%] shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 85vw, 33vw"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Tablet / Desktop */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 text-3xl text-white"
            aria-label="Cerrar galería"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-6 text-4xl text-white"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <Image
            src={images[selectedIndex]}
            width={1600}
            height={1067}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            type="button"
            onClick={showNext}
            className="absolute right-6 text-4xl text-white"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}