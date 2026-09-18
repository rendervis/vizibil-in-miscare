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
    default: "Vizibil în Mișcare | Publicitate pe mașini în București",
    template: "%s | Vizibil în Mișcare",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "advertising",

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: "/",
    languages: {
      "ro-RO": "/",
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Vizibil în Mișcare | Publicitate locală pe mașini",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1731,
        height: 909,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vizibil în Mișcare | Publicitate locală pe mașini",
    description: siteConfig.description,
    images: ["/twitter-image.png"],
    creator: "@vizibilinmiscare",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "google-site-verification":
      "v3JNSbmw0w8AyMlfN_59LiL4-IF1d9V8M1yTnDnK1sQ",
  },
};

export const viewport: Viewport = {
  themeColor: "#1F1830",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}