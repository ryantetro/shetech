import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const googleSans = localFont({
  src: "./fonts/GoogleSansFlex.ttf",
  variable: "--font-google-sans",
  weight: "100 900", // Variable font weight range
});

export const metadata: Metadata = {
  title: "SheTech Explorer - Empowering Girls in STEM",
  description: "SheTech helps girls recognize the opportunities they can pursue in STEM education and careers. Join us for hands-on experiences, mentorship, and real-world opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googleSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
