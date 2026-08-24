import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuxeGlow Beauty & Spa",
  description:
    "Professional website template for service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
