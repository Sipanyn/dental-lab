import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider";

const notoSansArabic = localFont({
  src: "/fonts/NotoSansArabic-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-arabic",
});

export const metadata: Metadata = {
  title: "Dental Lab",
  description: "Dental laboratory management system",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col ${notoSansArabic.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
