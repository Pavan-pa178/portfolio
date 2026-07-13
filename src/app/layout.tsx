import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kotaprolu Pavan Kumar — Full Stack & AI/ML Developer",
  description:
    "Portfolio of Kotaprolu Pavan Kumar — CS student and developer specialising in Full Stack Web Development, AI/ML, and Agentic AI. Based in Visakhapatnam, India.",
  keywords: [
    "Kotaprolu Pavan Kumar",
    "Pavan Kumar",
    "portfolio",
    "full stack developer",
    "AI ML developer",
    "agentic AI",
    "web developer",
    "Visakhapatnam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">{children}</body>
    </html>
  );
}
