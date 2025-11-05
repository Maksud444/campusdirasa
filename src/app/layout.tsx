// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Campus Dirasa - إدارة الحرم الجامعي",
  description: "نظام إدارة الحرم الجامعي",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <Providers>
          <TopNav />
          <main className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}