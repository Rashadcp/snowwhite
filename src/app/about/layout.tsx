import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Master Atelier Story & Craftsmanship",
  description:
    "Discover the story of Snow White Decor, established in 2019 in Melmuri, Malappuram. Master drapery specialists delivering handcrafted bespoke curtains and motorized Somfy® systems across Kerala.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Snow White Decor | Luxury Drapery Atelier Malappuram",
    description:
      "Master drapery specialists delivering handcrafted bespoke curtains and motorized Somfy® systems in Melmuri, Malappuram, Kerala.",
    url: "https://snowwhitedecor.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
