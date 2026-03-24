import HomePageClient from "./HomePageClient";
import { HomeStructuredData } from "@/components/seo/HomeStructuredData";

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <HomePageClient />
    </>
  );
}
