import { Noto_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-arabic",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${notoArabic.variable} ${inter.variable}`}>
      <body className="font-noto-arabic antialiased flex min-h-screen flex-col">
        <CommonHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}