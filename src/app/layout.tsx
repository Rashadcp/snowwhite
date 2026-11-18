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
  metadataBase: new URL("https://snowwhitedecor.com"),
  title: {
    default: "Snow White Decor | Bespoke Luxury Curtains & Blinds Malappuram",
    template: "%s | Snow White Decor",
  },
  description:
    "Experience handcrafted luxury drapery, motorized smart curtain systems, and bespoke interior textiles tailored by Snow White Decor in Melmuri, Malappuram, Kerala.",
  keywords: [
    "Snow White",
    "Snow White curtains",
    "Snow White decor",
    "Snow White Malappuram",
    "luxury curtains Malappuram",
    "curtain showroom Malappuram",
    "curtain shop in Melmuri",
    "bespoke drapery Kerala",
    "motorized curtains Somfy",
    "smart blinds Malappuram",
    "architectural sheers Kerala",
    "interior textiles Melmuri",
    "blackout curtains Malappuram",
    "Snow White home decors",
  ],
  authors: [{ name: "Snow White Decor" }],
  creator: "Snow White Decor",
  publisher: "Snow White Decor",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Snow White Decor | Bespoke Luxury Curtains & Motorized Blinds",
    description:
      "Handcrafted luxury drapery, motorized smart curtain systems, and bespoke interior textiles tailored by Snow White Decor in Melmuri, Malappuram, Kerala.",
    url: "https://snowwhitedecor.com",
    siteName: "Snow White Decor",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/curtain_hero_minimal_sand.jpg",
        width: 1200,
        height: 630,
        alt: "Snow White Decor - Luxury Curtains and Interior Textiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snow White Decor | Bespoke Luxury Curtains & Blinds Malappuram",
    description:
      "Handcrafted luxury drapery and motorized smart curtain systems in Melmuri, Malappuram, Kerala.",
    images: ["/curtain_hero_minimal_sand.jpg"],
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
    "color-scheme": "light",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeGoodsStore", "LocalBusiness"],
  "@id": "https://snowwhitedecor.com/#business",
  name: "Snow White",
  legalName: "Snow White",
  alternateName: [
    "Snow White Decor",
    "Snow White Curtains",
    "Snow White Home Decors",
    "Snow White Atelier",
    "Snow White Curtain and Blinds",
  ],
  url: "https://snowwhitedecor.com",
  logo: "https://snowwhitedecor.com/logo.png",
  image: "https://snowwhitedecor.com/curtain_hero_minimal_sand.jpg",
  description:
    "Bespoke luxury curtains, architectural sheers, motorized Somfy® curtain systems, and custom interior textiles in Melmuri, Malappuram, Kerala.",
  telephone: "+91 95394 37537",
  email: "contact@snowwhitecurtains.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opp. Ma'din Public School, Melmuri (P.O)",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    postalCode: "676514",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.0732,
    longitude: 76.074,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Malappuram",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kerala",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Luxury Curtains & Window Coverings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Hand-Tailored Luxury Curtains",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorized Smart Curtain Tracks (Somfy® Certified)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "In-Home 3D Laser Drapery Measurement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Acoustic & Blackout Velvet Drapes",
        },
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
