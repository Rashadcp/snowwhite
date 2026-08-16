import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CurtainBackgroundAnimation from "@/components/common/CurtainBackgroundAnimation";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Snow White Decor | Bespoke Luxury Curtains & Interior Textiles",
  description: "Experience handcrafted luxury drapery, motorized smart curtain systems, and bespoke interior textiles tailored by Snow White Decor in Melmuri, Malappuram.",
  keywords: ["Snow White curtains", "Snow White decor", "luxury curtains Malappuram", "drapery Kerala", "bespoke blinds", "motorized curtains Somfy", "interior design Melmuri"],
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#FAF8F5" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#B35C37] selection:text-white relative">
        {/* Master Continuous Background Animation System for all pages */}
        <CurtainBackgroundAnimation />

        <div className="relative z-10 min-h-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
