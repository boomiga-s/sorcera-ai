import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Sorcera — AI phone answering for restaurants. Every call answered, straight into your POS.",
  description:
    "Sorcera answers your restaurant's phone on the first ring, takes the order, and sends it straight into Toast, Square, Clover, or Brisque. Live in a day, no new hardware.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&family=Fraunces:opsz,wght,SOFT@9..144,300..900,0..100&family=Gilda+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
