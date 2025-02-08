//Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono,Barlow } from "next/font/google";
//global css
import "./globals.css";
import { ThemeProvider } from "next-themes";

//fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const barlowFont=Barlow({
  subsets:["latin"],
  weight:["500","700"],
  variable:"--font-barlow"
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//metadata
export const metadata: Metadata = {
  title: "Reboostify",
  description: "Victory Reboostified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}${barlowFont.variable} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
