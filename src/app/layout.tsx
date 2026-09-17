import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const bodyFont = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — publicitate pe mașini și promovare locală`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — publicitate locală pe trasee reale`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — publicitate locală pe trasee reale`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1F1830",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
