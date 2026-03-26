import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Peter Anderson · Digital Design Portfolio",
  description: "Campaign design portfolio featuring digital advertising, social media, email, and on-site placements for Snap Finance.",
  openGraph: {
    title: "Peter Anderson · Digital Design Portfolio",
    description: "Campaign design portfolio featuring digital advertising, social media, email, and on-site placements for Snap Finance.",
    images: [
      {
        url: "https://pettywithaprior.com/images/snap_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Peter Anderson · Digital Designer",
      },
    ],
    type: "website",
    url: "https://pettywithaprior.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Anderson · Digital Design Portfolio",
    description: "Campaign design portfolio featuring digital advertising, social media, email, and on-site placements for Snap Finance.",
    images: ["https://pettywithaprior.com/images/snap_thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NODE_ENV === "development" ? (
          <Script
            src="https://mcp.figma.com/mcp/html-to-design/capture.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
