import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(Navbar)/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karim",
  description:
    "Passionate about building clean, user-friendly interfaces, I bring ideas to life using cutting-edge tools and technologies.",
  icons: {
    icon: "Icon/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-300`}
      >
        <Navbar />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
