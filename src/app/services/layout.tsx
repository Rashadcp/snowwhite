import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curtain Services & Motorized Smart Tracks | Malappuram",
  description:
    "Explore bespoke interior textile solutions by Snow White Decor in Malappuram: 3D laser measurement, Somfy® motorized tracks, custom sheer drapes, blackout curtains & acoustic velvet.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Curtain Services & Motorized Tracks | Snow White Decor Malappuram",
    description:
      "Precision 3D laser measurement, motorized smart curtains, and bespoke luxury drapery tailoring in Melmuri, Malappuram.",
    url: "https://snowwhitedecor.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
