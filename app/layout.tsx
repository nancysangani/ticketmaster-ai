import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TamboClientProvider } from "@/components/TamboClientProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tambo AI Chat",
  description: "Chat with Tambo AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <TamboClientProvider>{children}</TamboClientProvider>
      </body>
    </html>
  );
}