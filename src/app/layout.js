import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import page from "./about/page";
import Aboutmql from "./about/page";
import Footer from "../../components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Minu Quality Testing Laboratory | Wood, Plywood & Textile Testing",
  description:
    "Minu Quality Testing Laboratory provides reliable testing services for wood, plywood, furniture, and textile products. Focused on accuracy, compliance, and industry standards.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className= ' antialiased'
      >
        <Header />
        <main>{children}</main>
        <Footer/>
        
      </body>
    </html>
  );
}
