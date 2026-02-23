import demoVideosData from "@/data/demo-videos.json";

export type DemoVideoStep = {
  text: string;
  time?: string;
};

export type DemoVideoItem = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  youtubeId: string;
  steps?: DemoVideoStep[];
};

export type DemoCategory = {
  id: string;
  name: string;
  videos: DemoVideoItem[];
};

export type DemoVideosData = {
  intro: string;
  phoneNumber: string;
  phoneHref: string;
  categories: DemoCategory[];
};

const data = demoVideosData as DemoVideosData;

/** All categories with videos (each video has slug). */
export function getDemoCategories(): DemoCategory[] {
  return data.categories;
}

/** Flat list of all videos with their category id and name. */
export function getAllDemoVideos(): Array<
  DemoVideoItem & { categoryId: string; categoryName: string }
> {
  const list: Array<
    DemoVideoItem & { categoryId: string; categoryName: string }
  > = [];
  for (const cat of data.categories) {
    for (const video of cat.videos) {
      list.push({
        ...video,
        categoryId: cat.id,
        categoryName: cat.name,
      });
    }
  }
  return list;
}

/** Get videos for the given category ids, in category order then video order. Ignores unknown ids. */
export function getVideosByCategoryIds(
  categoryIds: string[]
): Array<DemoVideoItem & { categoryId: string; categoryName: string }> {
  const list: Array<
    DemoVideoItem & { categoryId: string; categoryName: string }
  > = [];
  for (const catId of categoryIds) {
    const cat = data.categories.find((c) => c.id === catId);
    if (!cat) continue;
    for (const video of cat.videos) {
      list.push({
        ...video,
        categoryId: cat.id,
        categoryName: cat.name,
      });
    }
  }
  return list;
}

/** Get a single video by slug, with category info. */
export function getDemoVideoBySlug(
  slug: string
): (DemoVideoItem & { categoryId: string; categoryName: string }) | null {
  const all = getAllDemoVideos();
  return all.find((v) => v.slug === slug) ?? null;
}

/** Get related videos (same category first, then others), excluding current slug, limit 6. */
export function getRelatedDemoVideos(
  currentSlug: string,
  categoryId: string
): Array<DemoVideoItem & { categoryName: string }> {
  const all = getAllDemoVideos();
  const sameCategory = all.filter(
    (v) => v.slug !== currentSlug && v.categoryId === categoryId
  );
  const other = all.filter(
    (v) => v.slug !== currentSlug && v.categoryId !== categoryId
  );
  const combined = [...sameCategory, ...other];
  return combined.slice(0, 6).map(({ categoryName, ...v }) => ({ ...v, categoryName }));
}

/** All video slugs for static params. */
export function getAllDemoVideoSlugs(): string[] {
  return getAllDemoVideos().map((v) => v.slug);
}

export { data as demoVideosData };
