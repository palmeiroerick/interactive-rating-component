import RatingProvider from "@/context/RatingContext";
import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interactive Rating Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpass.className} flex h-screen w-screen items-center justify-center bg-veryDarkBlue`}
      >
        <RatingProvider>{children}</RatingProvider>
      </body>
    </html>
  );
}
