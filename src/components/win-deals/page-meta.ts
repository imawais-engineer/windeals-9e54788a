export const SITE_URL = "https://windeals.me";

export function pageMeta(title: string, description: string, exactTitle = false, path?: string) {
  const fullTitle = exactTitle ? title : `${title} — WIN DEALS`;
  const url = path === undefined ? undefined : new URL(path, SITE_URL).href;
  return { meta: [
    { title: fullTitle }, { name: "description", content: description },
    { property: "og:title", content: fullTitle }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle }, { name: "twitter:description", content: description },
    ...(url ? [{ property: "og:url", content: url }] : []),
  ], links: url ? [{ rel: "canonical", href: url }] : [] };
}
