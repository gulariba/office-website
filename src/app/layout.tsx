import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Custom Local Fonts (optional)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Best Bonanza | Office Spaces for Millennials",
  description: "Modern, secure and affordable office space solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          font-sans
          antialiased 
          ${geistSans.variable} 
          ${geistMono.variable}
          bg-background 
          text-foreground
        `}
      >
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
