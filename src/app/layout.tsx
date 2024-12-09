import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const robotoextrabold = localFont({
  src: "./fonts/Roboto_Condensed/static/RobotoCondensed-ExtraBold.ttf",
  variable: "--font-roboto-extrabold",
  weight: "800",
});
const robotobold = localFont({
  src: "./fonts/Roboto_Condensed/static/RobotoCondensed-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "700",
});
const opensansCondensedExtrabold = localFont({
  src: "./fonts/OpenSans_Condensed/ExtraBoldItalic/OpenSans-ExtraBoldItalic.woff",
  variable: "--font-opensans-condensed-extrabold-italic",
  weight: "800",
});
const opensansBold = localFont({
  src: "./fonts/OpenSans_Condensed/Bold/OpenSans-Bold.woff",
  variable: "--font-opensans-bold",
  weight: "700",
});
const robotoExtrabold = localFont({
  src: "./fonts/Roboto/Roboto-Bold.ttf",
  variable: "--font-roboto-extrabold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Great Rift Run",
  description: "Run with champions",
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
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Great Rift Run" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`
          ${robotoextrabold.variable} 
          ${opensansCondensedExtrabold.variable} 
          ${robotoExtrabold.variable} 
          ${robotobold.variable} 
          ${opensansBold.variable} 
          antialiased relative z-0`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
