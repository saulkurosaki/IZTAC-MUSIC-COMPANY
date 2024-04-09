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
  description: "The most awesome Music Company you've ever heard of.",
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
