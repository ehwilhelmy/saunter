import type { Metadata } from "next";
import { Geist, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saunter - Where presence tastes better",
  description: "Curated, on-demand private chef services for the modern luxury lifestyle. Bring skilled chefs into your home for effortless, beautifully crafted meals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
