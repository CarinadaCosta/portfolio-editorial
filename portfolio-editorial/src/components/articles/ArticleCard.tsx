import { formatDate } from "@/lib/FormatDate";

type ArticleCardProps = {
  title: string;
  date: string;
  image: string;
  href: string;
  className?: string; // define en qué tramo de filas del subgrid vive esta card
};

export default function ArticleCard({ title, date, image, href, className = "" }: ArticleCardProps) {
  return (
    <article className={`md:grid md:[grid-template-rows:subgrid] ${className}`}>
      <a href={href} className="group block md:contents">
        <h2 className="font-heading text-lg md:text-base tracking-[0.05em] leading-[1.00] text-foreground md:[grid-row:1]">
          {title}
        </h2>

        <div className="relative mt-4 aspect-[16/9] overflow-hidden md:mt-0 md:aspect-auto md:[grid-row:2]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <time className="mt-2 block text-xs text-text md:mt-0 md:[grid-row:3] ">
          {formatDate(date)}
        </time>
      </a>
    </article>
  );
}