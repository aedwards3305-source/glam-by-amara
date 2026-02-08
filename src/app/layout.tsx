import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glam by Diamond | Professional Makeup Artist",
  description:
    "Luxury makeup artistry for weddings, editorial, and special occasions. Elevating your natural beauty with bespoke looks crafted just for you.",
  keywords: [
    "makeup artist",
    "bridal makeup",
    "editorial makeup",
    "beauty",
    "wedding makeup",
    "professional makeup",
  ],
  openGraph: {
    title: "Glam by Diamond | Professional Makeup Artist",
    description:
      "Luxury makeup artistry for weddings, editorial, and special occasions.",
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
