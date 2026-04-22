import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Budget Tracking & Financial Control Dashboard",
  description:
    "Real-time budget monitoring, encumbrance tracking, and financial control dashboard for Ethiopian public sector finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaSans.variable} light`}>
      <body className="min-h-screen font-sans antialiased overflow-hidden" style={{ fontFamily: "'Fira Sans', sans-serif" }}>
        <div className="flex h-screen flex-col overflow-hidden">
          {/* Global Top Navigation */}
          <Navbar />

          <div className="flex flex-1 overflow-hidden">
            {/* Global Left Sidebar */}
            <Sidebar />

            {/* Dynamic Page Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
