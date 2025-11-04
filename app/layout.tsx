import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carshop.example"),
  title: {
    default: "CarShop — Modern Car Store",
    template: "%s | CarShop",
  },
  description:
    "Discover premium cars with transparent pricing, expert insights, and a modern shopping experience.",
  openGraph: {
    title: "CarShop — Modern Car Store",
    description:
      "Discover premium cars with transparent pricing, expert insights, and a modern shopping experience.",
    url: "https://www.carshop.example/",
    siteName: "CarShop",
    images: [{ url: "/next.svg", width: 1200, height: 630, alt: "CarShop" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarShop — Modern Car Store",
    description:
      "Discover premium cars with transparent pricing, expert insights, and a modern shopping experience.",
    images: ["/next.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "cars",
    "auto shop",
    "buy car",
    "electric",
    "SUV",
    "dealership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
