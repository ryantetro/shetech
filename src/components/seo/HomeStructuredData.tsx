const SITE_URL = "https://shetechexplorer.com";

const organization = {
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: "SheTech Explorer",
  alternateName: ["SheTech", "SheTech Explorer Day"],
  url: SITE_URL,
  description:
    "SheTech helps girls recognize the opportunities they can pursue in STEM education and careers through hands-on experiences, mentorship, and real-world opportunities—including SheTech Explorer Day and year-round programs presented by the Women Tech Council.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/shetech-assets/SheTech%202026%20Logo.svg`,
  },
  sameAs: [
    "https://www.facebook.com/shetechexplorer/",
    "https://www.instagram.com/she.tech/?hl=en",
    "https://www.linkedin.com/company/women-tech-council/",
    "https://www.youtube.com/@WomenTechCncl",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "shetech@womentechcouncil.com",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Women Tech Council",
    url: "https://womentechcouncil.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2801 N Thanksgiving Way",
    addressLocality: "Lehi",
    addressRegion: "UT",
    postalCode: "84043",
    addressCountry: "US",
  },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization],
};

export function HomeStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
