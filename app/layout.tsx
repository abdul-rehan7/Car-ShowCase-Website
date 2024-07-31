import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CAR HUB",
  description: "Discove rthe ebst cars in the world.",
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
