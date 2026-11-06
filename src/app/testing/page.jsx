import TestingHubClient from "./TestingHubClient";

export const metadata = {
  title:
    "Material Testing Laboratory Services | Minu Quality Testing Laboratories",
  description:
    "Professional laboratory testing services for Wood, Plywood, Water, Furniture, Hinges, Cement, Aggregates, Soil, and Concrete Paver Blocks. Standard methods compliant with national and international quality standards.",
  keywords:
    "Material Testing Laboratory, Water Testing, Wood Testing, Plywood Testing, Soil Testing, Aggregates Testing, Cement Testing, Furniture Testing, Hinges Testing, Concrete Paver Block Testing, Testing Lab Delhi NCR, Minu Quality Testing Laboratories Private Limited",
  alternates: {
    canonical: "https://mqtlab.com/testing",
  },
};

const structuredSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://mqtlab.com/testing#page",
      url: "https://mqtlab.com/testing",
      name: "Materials Testing Laboratory Services - Minu Quality Testing Laboratories",
      description:
        "Comprehensive third-party materials testing laboratory services for civil construction, timber, water, and mechanical hardware.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Wood Testing Services",
            url: "https://mqtlab.com/testing/wood-testing",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Plywood Testing Services",
            url: "https://mqtlab.com/testing/plywood-testing",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Water Quality Testing Services",
            url: "https://mqtlab.com/testing/water-testing",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Furniture Testing Services",
            url: "https://mqtlab.com/testing/furniture-testing",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Hinges & Hardware Testing Services",
            url: "https://mqtlab.com/testing/hinges-testing",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Cement Testing Services",
            url: "https://mqtlab.com/testing/cement-testing",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Aggregates Testing Services",
            url: "https://mqtlab.com/testing/aggregates-testing",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Geotechnical Soil Testing Services",
            url: "https://mqtlab.com/testing/soil-testing",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Concrete Paver Block Testing",
            url: "https://mqtlab.com/testing/concrete-paver-block-testing",
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://mqtlab.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Testing Services",
          item: "https://mqtlab.com/testing",
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />
      <TestingHubClient />
    </>
  );
}
