import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "IEDC SJCET - Empowering Innovation at SJCET Engineering College",
  description: "The Innovation and Entrepreneurship Development Cell (IEDC) at SJCET, Palai, fosters creativity and innovation among students to develop entrepreneurial skills and technological advancements.",
  keywords: "IEDC SJCET, SJCET, engineering college Palai, innovation, entrepreneurship, students, technology, education, Kottayam",
  robots: "index, follow",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "IEDC SJCET - Innovation and Entrepreneurship at SJCET",
    description: "The Innovation and Entrepreneurship Development Cell (IEDC) at SJCET, Palai, fosters creativity and innovation among students.",
    url: "https://www.iedc.sjcetpalai.a.cin", // Adjust with the correct URL if necessary
    siteName: "IEDC SJCET",
    images: [{ url: "/images/iedc-banner.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>

        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
