import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider";

const Vazirmatn = localFont({
  src: "/fonts/Vazirmatn-VariableFont_wght.ttf",
  variable: "--font-Vazirmatn",
});

export const metadata: Metadata = {
  title: "Dental Lab",
  description: "Dental laboratory management system",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col ${Vazirmatn.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
