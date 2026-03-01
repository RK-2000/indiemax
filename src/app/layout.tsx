import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display, DM_Serif_Display, Italiana } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "IndieMax | Handcrafted Heritage Prints",
  description: "Celebrating India's rich textile heritage through artisanal fashion. Handmade Indian prints, limited drops, uplifting artisans.",
  keywords: ["Indian fashion", "handmade", "artisanal", "block print", "heritage", "sustainable fashion"],
  openGraph: {
    title: "IndieMax | Handcrafted Heritage Prints",
    description: "Celebrating India's rich textile heritage through artisanal fashion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} ${playfair.variable} ${dmSerif.variable} ${italiana.variable} antialiased bg-ivory text-charcoal`}
      >
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
