import "./globals.css";
import Header from "../../components/Header";
import ConsultationBanner from "../../components/ConsultationBanner";
import Footer from "../../components/Footer";
import GlobalPopup from "../../components/globalPopUp";
import FloatingContact from "../../components/FloatingContact";
import ScrollObserver from "../../components/ScrollObserver";

export const metadata = {
  metadataBase: new URL("https://mqtlab.com"),
  title: {
    default:
      "Minu Quality Testing Laboratories | Material Testing Lab in Noida & Delhi NCR",
    template: "%s | Minu Quality Testing Laboratories",
  },
  description:
    "Minu Quality Testing Laboratories Private Limited (Plot 79, Sector 155, Noida) provides certified testing services for wood, plywood, water, furniture, cement, soil, aggregates, hinges, and paver blocks across Delhi NCR and India.",
  keywords: [
    "Material Testing Laboratory Noida",
    "Construction Materials Testing Delhi NCR",
    "Water Testing Laboratory Noida",
    "Wood and Timber Testing Lab",
    "Plywood Testing Laboratory Greater Noida",
    "Soil and Geotechnical Testing Lab",
    "Cement Testing Laboratory Uttar Pradesh",
    "Aggregates Testing Lab",
    "Concrete Paver Block Testing",
    "Furniture Durability Testing",
    "Architectural Hinges Testing",
    "Minu Quality Testing Laboratories Private Limited",
    "MQTL Noida Sector 155",
  ],
  authors: [{ name: "Minu Quality Testing Laboratories Private Limited" }],
  creator: "Minu Quality Testing Laboratories Private Limited",
  publisher: "Minu Quality Testing Laboratories Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://mqtlab.com",
  },
  openGraph: {
    title:
      "Minu Quality Testing Laboratories Private Limited | Material Testing Experts",
    description:
      "Reliable material testing laboratory located at Plot No. 79, Sector 155, Noida. Testing for wood, plywood, water, furniture, cement, soil, and aggregates.",
    url: "https://mqtlab.com",
    siteName: "Minu Quality Testing Laboratories Private Limited",
    images: [
      {
        url: "/testing/laboratory-banner.png",
        width: 1200,
        height: 630,
        alt: "Minu Quality Testing Laboratories Facility Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Minu Quality Testing Laboratories Private Limited | Noida & Delhi NCR",
    description:
      "Professional testing services for construction, timber, water, and industrial materials at Plot 79, Sector 155, Noida.",
    images: ["/testing/laboratory-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
    "geo.position": "28.4312;77.4984",
    ICBM: "28.4312, 77.4984",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mqtlab.com/#organization",
      name: "Minu Quality Testing Laboratories Private Limited",
      alternateName: ["MQTL", "MQT Laboratory"],
      url: "https://mqtlab.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mqtlab.com/mqtl-logo.png",
        width: 512,
        height: 512,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9971234474",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mqtlab.com/#website",
      url: "https://mqtlab.com",
      name: "Minu Quality Testing Laboratories",
      publisher: {
        "@id": "https://mqtlab.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <ScrollObserver />
        <Header />
        <main>
          {children}
          <GlobalPopup />
        </main>
        <ConsultationBanner />
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
