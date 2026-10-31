import Hero from "../../components/Hero";

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://mqtlab.com/#laboratory",
      name: "Minu Quality Testing Laboratories Private Limited",
      url: "https://mqtlab.com",
      telephone: "+91-9971234474",
      email: "info@mqtlab.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 79, Sector 155",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201310",
        addressCountry: "IN",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://mqtlab.com/#faqs",
      mainEntity: [
        {
          "@type": "Question",
          name: "What materials and industrial products does MQTL test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minu Quality Testing Laboratories (MQTL) provides comprehensive physical, mechanical, and chemical testing services across key manufacturing and construction sectors: Wood & Timber (IS 1708), Plywood & Panel Boards (IS 303, IS 710, IS 2202), Water Quality (IS 10500, IS 456), Furniture & Architectural Hardware (IS 363), and Civil Construction Materials including Cement (IS 4031), Paver Blocks (IS 15658), Aggregates (IS 2386, IS 383), and Soil (IS 2720).",
          },
        },
        {
          "@type": "Question",
          name: "Where is MQTL located and how can clients submit their samples?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our testing facility is conveniently located at Plot No. 79, Sector 155, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201310. Clients can submit samples directly at our laboratory intake desk or send them via reliable courier and cargo services.",
          },
        },
        {
          "@type": "Question",
          name: "What is the standard turnaround time for laboratory test reports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard turnaround time for routine physical, chemical, and dimensional analyses is typically 2 to 5 working days following sample receipt and verification. Tests with mandatory technical curing schedules (such as 7-day or 28-day concrete cube compressive strength tests) are concluded on their exact milestone dates.",
          },
        },
        {
          "@type": "Question",
          name: "Are testing procedures aligned with applicable Indian Standards (IS)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Testing at MQTL follows standard testing methods referencing published Indian Standards (IS), including IS 10500:2012 for drinking water, IS 456:2000 for concrete mixing water, IS 303 and IS 710 for plywood, IS 1708 for timber, and IS 4031 for cement.",
          },
        },
        {
          "@type": "Question",
          name: "What are the recommended guidelines for sample collection and packaging?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Water samples should be collected in clean, sealed 1-2 liter containers with minimal air headspace; timber and plywood prepared to standard coupon dimensions; cement and aggregates packed in airtight heavy-duty polythene bags; and hardware/furniture submitted as complete unaltered production assemblies.",
          },
        },
        {
          "@type": "Question",
          name: "How does drinking water testing differ from concrete mixing water testing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drinking water testing follows IS 10500:2012 focusing on human safety with an acceptable pH of 6.5 to 8.5 alongside limits for TDS, hardness, and contaminants. Concrete mixing water follows IS 456:2000 with a minimum pH requirement of 6.0 and limits on sulfates, chlorides, and organic impurities to preserve concrete durability.",
          },
        },
        {
          "@type": "Question",
          name: "How are verified test reports delivered, and can they be authenticated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Verified test reports are generated upon laboratory verification and promptly shared as secure digital PDFs via email. Stamped and signed hard copies from our laboratory are also available upon request for quality assurance and project records.",
          },
        },
        {
          "@type": "Question",
          name: "Does MQTL offer corporate agreements or bulk testing contracts for contractors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MQTL regularly partners with real estate developers, EPC contractors, modular furniture manufacturers, and plywood mills for recurring quality control with volume-based pricing and priority reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Can MQTL conduct customized performance or non-standard endurance testing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In addition to standard testing as per Indian Standards, we perform custom mechanical load evaluations, cyclic durability testing, and tailored quality checks based on client engineering drawings and project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How can I obtain a price quotation or technical consultation for my project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can request a quotation by filling out the consultation inquiry form on this page, emailing info@mqtlab.com, or calling our technical helpline at +91 99712 34474.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
    </>
  );
}
