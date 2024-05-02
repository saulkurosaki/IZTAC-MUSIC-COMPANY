import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const oxygen = Oxygen({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

export const metadata: Metadata = {
  title: "Iztac Music Company",
  description:
    "IMC es una compañía enfocada en la elaboración de música para cine, televisión y videojuegos. ¡Conoce más acerca de nosotros aquí!",
  openGraph: {
    images: [
      {
        url: "https://iztacmusiccompany.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_image_1.ead6fc36.png&w=1920&q=75",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oxygen.variable}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
