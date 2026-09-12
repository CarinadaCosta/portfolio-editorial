import { formatDate } from "@/lib/FormatDate";
import Image from "next/image";

type FeaturedArticleProps = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
  hasSecondary: boolean;
};

export default function FeaturedArticle({ title, date, image, href, hasSecondary }: FeaturedArticleProps) {
  return (
    <article className="md:grid md:[grid-template-rows:subgrid] md:[grid-row:1/-1]">
      <a href={href} 
      className="group block md:contents">
        <div className="md:[grid-row:1]">
          <h1 className="font-heading text-3xl leading-[1.00] text-foreground md:text-4xl">
            {title}
          </h1>
        </div>

        <div
            className={`relative mt-6 overflow-hidden md:mt-0 md:[grid-row:2/6] ${
              hasSecondary ? "md:aspect-auto" : "aspect-[4/3]"
            }`}
          >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            loading="eager"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <time className="mt-3 block text-sm text-text md:mt-0 md:[grid-row:6]  md:-translate-y-3">
          {formatDate(date)}
        </time>
      </a>
    </article>
  );
}