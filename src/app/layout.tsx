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
    "Sergius Aiko is a Next.js developer with expertise in building scalable web applications. He specializes in creating dynamic and responsive user interfaces, ensuring optimal performance and user experience. With a strong foundation in JavaScript and React, Sergius is adept at integrating APIs and managing state effectively. His passion for coding and problem-solving drives him to continuously learn and implement best practices in web development. Sergius is committed to delivering high-quality solutions that meet client needs and enhance user engagement. Whether working on front-end features or back-end logic, Sergius Aiko brings a meticulous approach to every project, ensuring robust and maintainable code. He is also experienced in collaborating with cross-functional teams to achieve project goals and deadlines. Sergius Aiko is your go-to developer for Next.js projects, combining technical expertise with a keen eye for detail. He is dedicated to delivering exceptional user experiences and driving innovation in the world of web development. Contact Sergius Aiko today to bring your Next.js project to life!",
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
