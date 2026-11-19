export const metadata = {
  title: "Contact Us | Material Testing Laboratory in Noida & Delhi NCR",
  description:
    "Contact Minu Quality Testing Laboratories Private Limited (Plot No. 79, Sector 155, Noida) for material testing inquiries, quotations, and sample drop-off guidance. Call +91 99712 34474 or email info@mqtlab.com.",
  keywords: [
    "Contact MQTL",
    "Material Testing Lab Contact Noida",
    "Testing Laboratory Sector 155 Noida",
    "Sample Drop-off Testing Lab Noida",
    "Minu Quality Testing Laboratories Helpline",
  ],
  alternates: {
    canonical: "https://mqtlab.com/contact-us",
  },
  openGraph: {
    title: "Contact Minu Quality Testing Laboratories Private Limited",
    description:
      "Reach out for sample testing inquiries, quotations, or drop-off guidelines at Plot No. 79, Sector 155, Noida.",
    url: "https://mqtlab.com/contact-us",
    siteName: "Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/testing/laboratory-banner.png",
        width: 1200,
        height: 630,
        alt: "MQTL Laboratory Contact Desk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MQTL | Material Testing Lab Noida",
    description: "Submit testing inquiries or visit Plot 79, Sector 155, Noida.",
    images: ["/testing/laboratory-banner.png"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://mqtlab.com/contact-us#page",
      url: "https://mqtlab.com/contact-us",
      name: "Contact Minu Quality Testing Laboratories",
      description:
        "Official contact and sample submission desk for MQTL laboratory in Noida.",
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
          name: "Contact Us",
          item: "https://mqtlab.com/contact-us",
        },
      ],
    },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
