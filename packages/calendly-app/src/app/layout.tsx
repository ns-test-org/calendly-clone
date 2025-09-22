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
  title: "CalendlyClone - Effortless Scheduling Made Simple",
  description: "Transform your scheduling chaos into seamless appointments. Book meetings, manage availability, and grow your business with our powerful Calendly alternative.",
  keywords: "scheduling, appointments, calendar, booking, meetings, calendly alternative",
  authors: [{ name: "CalendlyClone Team" }],
  openGraph: {
    title: "CalendlyClone - Effortless Scheduling Made Simple",
    description: "Transform your scheduling chaos into seamless appointments. Book meetings, manage availability, and grow your business with our powerful Calendly alternative.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalendlyClone - Effortless Scheduling Made Simple",
    description: "Transform your scheduling chaos into seamless appointments. Book meetings, manage availability, and grow your business with our powerful Calendly alternative.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

