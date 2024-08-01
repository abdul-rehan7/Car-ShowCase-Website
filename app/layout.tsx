import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FlavorFusion | Discover some Culinary Delights at FlavorFusion!",
  description:
    "Your journey to gourmet adventures and delicious recipes starts here.",
  icons: "/icon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/icon.svg" />
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
