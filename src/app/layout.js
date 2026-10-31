import "./globals.css";
import Header from "../../components/Header";
import ConsultationBanner from "../../components/ConsultationBanner";
import Footer from "../../components/Footer";
import GlobalPopup from "../../components/globalPopUp";
import FloatingContact from "../../components/FloatingContact";

export const metadata = {
  metadataBase: new URL("https://mqtlab.com"),
  title: "Minu Quality Testing Laboratories Private Limited | Water, Plywood, Wood, Hinges, Furniture, Soil, Aggregates, Concrete Paver Block & Cement Testing Lab in Delhi NCR || Noida || Greater Noida",
  description:
    "Minu Quality Testing Laboratories Private Limited is a trusted laboratory providing professional testing services for wood, plywood, water, furniture, cement, aggregates, soil and construction materials. We ensure safety, durability and compliance with national and international quality standards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
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
