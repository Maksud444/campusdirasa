import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import TopNav from "@/components/layout/TopNav";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Campus Dirasa - إدارة الحرم الجامعي",
  description: "نظام إدارة الحرم الجامعي",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <TopNav />
          <Sidebar />
          <main className="transition-all duration-300 lg:mr-72">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
