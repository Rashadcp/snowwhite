import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Book In-Home Drapery Measurement | Malappuram",
  description:
    "Contact Snow White Decor in Melmuri, Malappuram. Schedule an in-home 3D laser drapery measurement or visit our showroom opposite Ma'din Public School. Call +91 95394 37537.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Snow White Decor | Curtain Showroom Melmuri, Malappuram",
    description:
      "Schedule a consultation or in-home measurement with Snow White Decor drapery specialists. Call +91 95394 37537.",
    url: "https://snowwhitedecor.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
