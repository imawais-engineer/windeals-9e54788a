import { describe, expect, it } from "vitest";
import { pageMeta } from "@/components/win-deals/page-meta";

describe("WIN DEALS page addresses", () => {
  it("uses the public brand domain for each page", () => {
    const head = pageMeta("About WIN DEALS", "About the product", true, "/about");
    expect(head.links).toEqual([{ rel: "canonical", href: "https://windeals.me/about" }]);
    expect(head.meta).toContainEqual({ property: "og:url", content: "https://windeals.me/about" });
  });
  it("keeps deal addresses distinct from the homepage", () => {
    const head = pageMeta("Acme Corp", "Deal signals", false, "/app/deals/acme-corp");
    expect(head.links[0]?.href).toBe("https://windeals.me/app/deals/acme-corp");
  });
});