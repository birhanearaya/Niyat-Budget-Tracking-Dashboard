import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
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
      <body className="min-h-screen bg-gray-50 font-sans antialiased" style={{ fontFamily: "'Fira Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
