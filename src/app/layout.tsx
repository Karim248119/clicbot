import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import LenisProvider from "@/components/animations/LenisProvider";
import { fonts } from "@/lib/fonts";
import Preloader from "@/components/ui/PreLoader";

export const metadata: Metadata = {
  title: "ClicBot",
  description:
    "ClicBot is the modular robot companion you build yourself. Click together 11 module types to create 1000+ robot forms — from Lucky the Puppy to a wall-climbing Spider.",
  keywords: [
    "robot toy",
    "AI companion",
    "kids robot",
    "educational robot",
    "Clicbot",
  ],
  openGraph: {
    title: "ClicBot — 1000 Robots in One",
    description:
      "Meet Clicbot, the intelligent robot companion built for curious minds.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-light.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts.poppins.className}`}>
        <Preloader>
          <CustomCursor />
          <LenisProvider />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Preloader>
      </body>
    </html>
  );
}
