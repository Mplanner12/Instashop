import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InstaShop - Your Social Media Shopping Platform",
  description:
    "InstaShop is the safest platform to shop from social media vendors. Create, manage, and showcase your products with ease.",
  keywords: "InstaShop, social media shopping, product management, e-commerce",
  openGraph: {
    title: "InstaShop - Your Social Media Shopping Platform",
    description:
      "InstaShop is the safest platform to shop from social media vendors. Create, manage, and showcase your products with ease.",
    url: "https://instashop-ecru.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description ?? ""} />
        <link rel="icon" href="/sale-img.png.png" />
        <title>InstaShop</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
