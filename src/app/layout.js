import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import page from "./about/page";
import Aboutmql from "./about/page";
import Footer from "../../components/Footer";
import GlobalPopup from "../../components/globalPopUp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Minu Quality Testing Laboratory Pvt. Ltd. :: Delhi NCR || Noida || Greater Noida",
  description:
    "Minu Quality Testing Lab Pvt Ltd is a trusted laboratory providing professional testing services for wood, plywood, water, furniture, cement, aggregates, soil and construction materials. We ensure safety, durability and compliance with national and international quality standards.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className= ' antialiased'
      >
        <Header />
        <main>
          {children}
          <GlobalPopup />
          </main>
        <Footer/>
        
      </body>
    </html>
  );
}
