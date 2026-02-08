import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diamond Beauty Makeup | Professional Makeup Artist",
  description:
    "Luxury makeup artistry in Springfield, VA. Weddings, editorial, and special occasions. Elevating your natural beauty with bespoke looks crafted just for you.",
  keywords: [
    "makeup artist",
    "bridal makeup",
    "editorial makeup",
    "beauty",
    "wedding makeup",
    "professional makeup",
    "Springfield VA makeup artist",
  ],
  openGraph: {
    title: "Diamond Beauty Makeup | Professional Makeup Artist",
    description:
      "Luxury makeup artistry in Springfield, VA for weddings, editorial, and special occasions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
