import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layouts/Navbar/Navbar";
import Footer from "@/components/Layouts/Footer/Footer";

const latoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "NEXT CV Mandiri Kerja Abadi",
  description:
    "CV Mandiri Kerja Abadi adalah perusahaan karoseri truk yang berdiri sejak 23 Februari 2014 di Mojokerto, Jawa Timur. Awalnya bergerak di jasa angkut semen, garam, dan keramik, kemudian berkembang menjadi bengkel las, dan sejak akhir 2015 memiliki izin karoseri resmi. Menghadirkan solusi karoseri truk berkualitas dan sesuai spesifikasi pelanggan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/LogoMKA.svg" />
      </head>
      <body className={`${latoFont.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
