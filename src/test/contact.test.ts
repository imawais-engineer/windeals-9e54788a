import { describe, expect, it } from "vitest";
import { buildContactMailto, contactSchema } from "@/lib/contact";

const valid = { name: "Ana", email: "ana@acme.com", company: "", topic: "Sales" as const, message: "Hi" };

describe("contact form rules", () => {
  it("requires name", () => expect(contactSchema.safeParse({ ...valid, name: " " }).success).toBe(false));
  it("requires a valid email", () => expect(contactSchema.safeParse({ ...valid, email: "nope" }).success).toBe(false));
  it("requires a message", () => expect(contactSchema.safeParse({ ...valid, message: "" }).success).toBe(false));
  it("company is optional", () => expect(contactSchema.safeParse(valid).success).toBe(true));
  it("sends to the company email only", () => expect(buildContactMailto(valid).startsWith("mailto:awais@windeals.me?")).toBe(true));
});
