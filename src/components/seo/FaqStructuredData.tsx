import { HOME_FAQ_ITEMS } from "@/lib/constants/home-faq";

const FAQ_URL = "https://shetechexplorer.com/faq";

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${FAQ_URL}#faqpage`,
  url: FAQ_URL,
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FaqStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
    />
  );
}
