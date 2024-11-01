import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import components
const Navbar = dynamic(() => import("@/components/share/navbar"));
const Footer = dynamic(() => import("@/components/share/footer"));
const ScrollToTop = dynamic(() => import("@/components/share/scrollToTop"));

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
  title: "Sovefi",
  description: "Generated by create SOVEFI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/sovefi.jpeg"
          type="image/x-icon"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  document.documentElement.classList.add(savedTheme);
                } else {
                  const userPrefersDark = window?.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.add(userPrefersDark ? 'dark' : 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading navbar...</div>}>
          <Navbar />
        </Suspense>
        {children}
        <Suspense fallback={<div>Loading scroll...</div>}>
          <ScrollToTop />
        </Suspense>
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
