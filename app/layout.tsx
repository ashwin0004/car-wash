import type { Metadata } from "next";
import { Ubuntu, Barlow_Semi_Condensed, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: 'swap',
});

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aqualine Autocare - Car Wash Services",
  description: "Professional car wash and auto care services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.variable} ${barlow.variable} ${roboto.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
