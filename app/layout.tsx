import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AutoVista | Discover and explore the latest car models and innovations.",
  description: "Dive into detailed reviews, stunning photos, and comprehensive specifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="reltive">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
