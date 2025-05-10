import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import BackgroundMusic from '@/components/common/BackgroundMusic';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Avogadra Kedavro",
  description: "Tubes 2 Strategi ALgoritma BFS DFS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} antialiased`}
        >
        <BackgroundMusic />
        <div className="absolute bg-[url('/background.svg')] bg-cover bg-no-repeat w-full h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
