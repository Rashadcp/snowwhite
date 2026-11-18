import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curtain Portfolio & Gallery | Luxury Living & Bedroom Drapery",
  description:
    "Browse our portfolio of completed residential and commercial curtain projects in Kerala: pure white sheers, French flax linens, motorized wave curtains, and acoustic velvets.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Curtain Gallery & Portfolio | Snow White Decor Kerala",
    description:
      "Explore curated luxury curtain installations for villas, penthouses, and residences across Kerala by Snow White Decor.",
    url: "https://snowwhitedecor.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
