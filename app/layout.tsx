import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/common/Footer";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/djh0tsi3i/image/upload/v1764401974/2_lu4uq6.jpg"
        />
        <meta property="og:title" content="Karim | Portfolio" />
        <meta name="author" content="Karim Abdelhalim" />
        <meta name="date" content="2025-11-29T09:00:00Z" />
        <meta
          property="og:description"
          content="Explore the portfolio of Karim Abdelhalim, a Full Stack Developer. Discover projects, skills, experience, and ways to get in touch."
        />
        <meta property="og:url" content="https://karim-omran.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>Karim | Portfolio</title>
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Separator />
          <main className="px-4 lg:max-w-11/12 mx-auto">{children}</main>
          <Toaster position="top-center" richColors />
          <Separator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
