import type { MetadataRoute } from "next";

const base = "https://shetechexplorer.com";

const paths: string[] = [
  "/",
  "/about/about-women-tech-council",
  "/about/contact-us",
  "/about/sponsors",
  "/chapters/arizona",
  "/chapters/colorado",
  "/chapters/host-shetech-day",
  "/chapters/idaho",
  "/companies/host-internship",
  "/companies/mentor",
  "/companies/sponsor",
  "/companies/volunteer",
  "/media-hub/instagram-feed",
  "/media-hub/student-demos",
  "/media-hub/tech-workshops",
  "/media-hub/techbuzz-articles",
  "/privacy-policy",
  "/faq",
  "/sign-up-for-information",
  "/students/clubs",
  "/students/entrepreneur-apprenticeship",
  "/students/explorer-day",
  "/students/leadership-board",
  "/students/media-internship",
  "/students/scholarships",
  "/students/summer-internship",
  "/students/thanksgiving-point-internship",
  "/students/wtc-college-interns",
  "/teachers/register-your-students",
  "/teachers/why-participate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
