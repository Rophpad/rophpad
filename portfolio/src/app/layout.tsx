import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Dock from "@/components/Dock";
import Header from "@/components/Header";
import App from "@/components/App";

const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={` ${figtree.className} antialiased text-[15px]  min-h-screen `}
      >
        <App>
          <Header />
          {children}
          <Dock />
        </App>
      </body>
    </html>
  );
}
