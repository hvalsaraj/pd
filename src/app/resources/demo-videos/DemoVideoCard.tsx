"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

export interface DemoVideoItem {
  id: string;
  slug?: string;
  title: string;
  duration: string;
  youtubeId: string;
}

interface DemoVideoCardProps {
  video: DemoVideoItem;
  categoryName: string;
}

const YOUTUBE_THUMB = (id: string) =>
  `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

export default function DemoVideoCard({ video, categoryName }: DemoVideoCardProps) {
  const [showEmbed, setShowEmbed] = useState(false);
  const hasVideo = Boolean(video.youtubeId?.trim());
  const hasSlug = Boolean(video.slug?.trim());
  const thumbSrc = hasVideo ? YOUTUBE_THUMB(video.youtubeId) : null;

  const thumbnailContent = (
    <>
      {thumbSrc ? (
        <img
          src={thumbSrc}
          alt=""
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-border-subtle">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/20 text-primary">
            <Play className="size-8" aria-hidden />
          </div>
        </div>
      )}
      {hasVideo && !hasSlug && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Play className="size-7 ml-1" fill="currentColor" aria-hidden />
          </div>
        </div>
      )}
      {hasSlug && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Play className="size-7 ml-1" fill="currentColor" aria-hidden />
          </div>
        </div>
      )}
      <span className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-0.5 font-mono text-xs font-medium text-white">
        {video.duration}
      </span>
    </>
  );

  const cardBody = (
    <div className="flex flex-1 flex-col gap-2 p-4">
      <span className="text-xs font-medium uppercase tracking-wide text-muted">
        {categoryName}
      </span>
      <h3 className="font-sans text-sm font-medium leading-snug text-foreground">
        {video.title}
      </h3>
    </div>
  );

  const cardClass =
    "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary";

  if (hasSlug) {
    return (
      <Link href={`/resources/demo-videos/${video.slug}`} className={cardClass}>
        <div
          className="relative aspect-video w-full shrink-0 bg-muted focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-t-xl overflow-hidden"
          aria-hidden
        >
          {thumbnailContent}
        </div>
        {cardBody}
      </Link>
    );
  }

  return (
    <article className={cardClass}>
      <button
        type="button"
        onClick={() => hasVideo && setShowEmbed(true)}
        className="relative aspect-video w-full shrink-0 bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={`Play: ${video.title}`}
      >
        {thumbnailContent}
      </button>
      {cardBody}

      {showEmbed && hasVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setShowEmbed(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full overflow-hidden rounded-t-xl">
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="border-t border-border p-3">
              <p className="font-sans text-sm font-medium text-foreground">
                {video.title}
              </p>
              <button
                type="button"
                onClick={() => setShowEmbed(false)}
                className="mt-2 text-sm text-muted underline hover:text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
