import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import FigmaLayout from "@/components/FigmaLayout";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roph PAD",
  description: "Roph PAD Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} antialiased text-[15px] flex flex-col items-center justify-center h-screen`}
      >
        <FigmaLayout>
          {children}
        </FigmaLayout>
      </body>
    </html>
  );
}
