import Link from "next/link";
import Image from "next/image";
import { H3 } from "@/common/headings";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorSlug?: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  author,
  authorSlug,
  date,
  readTime,
  category,
  image,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group bg-card border border-border flex flex-col overflow-hidden rounded-xl hover:border-primary transition-all duration-200 h-full">
      <Link href={`/resources/article/${slug}`} className="flex flex-col flex-1">
        {/* Image */}
        <div className="relative w-full h-48 bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-4xl font-heading font-bold text-primary/20">
                {title.charAt(0)}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 pb-0 flex flex-col gap-4 flex-1">
          {/* Category */}
          <div className="flex items-center">
            <span className="text-xs font-medium text-primary bg-[rgba(94,72,240,0.1)] px-2.5 py-1 rounded-full">
              {category}
            </span>
          </div>

          {/* Title */}
          <H3 className="text-xl font-heading font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </H3>

          {/* Description */}
          <p className="font-sans text-sm leading-6 text-muted line-clamp-3 flex-1">
            {description}
          </p>
        </div>
      </Link>

      {/* Meta Info - outside main link so author can be a separate link */}
      <div className="px-6 pb-6 flex flex-col gap-2 pt-2 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{readTime}</span>
          </div>
        </div>
        <p className="text-xs text-muted">
          By{" "}
          {authorSlug ? (
            <Link
              href={`/author/${authorSlug}`}
              className="hover:text-primary transition-colors"
            >
              {author}
            </Link>
          ) : (
            author
          )}
        </p>
      </div>
    </div>
  );
}
