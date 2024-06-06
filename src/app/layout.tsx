import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { MenuPhone } from "@/components/MenuPhone";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProStock",
  description: "Is a proyect for Talento Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className="hero min-h-screen py-16">
          {children}
          <MenuPhone />
        </section>
      </body>
    </html>
  );
}


