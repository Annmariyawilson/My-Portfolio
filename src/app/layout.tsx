import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Annmariya Wilson | Full Stack Developer",
  description: "Portfolio of Annmariya Wilson, a Full Stack Developer specializing in Next.js, React, Node.js, MERN, and MEAN stack development.",
  keywords: ["Annmariya Wilson", "Full Stack Developer", "Next.js", "React", "Node.js", "MERN Stack", "MEAN Stack", "Web Developer", "Kerala", "India"],
  authors: [{ name: "Annmariya Wilson" }],
  openGraph: {
    title: "Annmariya Wilson | Full Stack Developer",
    description: "Portfolio of Annmariya Wilson, a Full Stack Developer specializing in Next.js, React, Node.js, MERN, and MEAN stack development.",
    siteName: "Annmariya Wilson Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
