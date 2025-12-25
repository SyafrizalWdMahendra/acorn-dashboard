// app/layout.tsx
import { Inter } from "next/font/google"; // 1. Import Inter
import "./globals.css";

// 2. Konfigurasi Font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Masukkan variable ke dalam body */}
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
