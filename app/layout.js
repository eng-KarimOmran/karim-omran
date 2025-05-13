import "./globals.css";
import Navbar from "./_comonents/Navigation/Navbar/Navbar";
import LayoutNavigation from "./_comonents/Navigation/LayoutNavigation/LayoutNavigation";

export const metadata = {
  title: "karim",
  description:
    "Passionate about building clean, user-friendly interfaces, I bring ideas to life using cutting-edge tools and technologies.",
  icons: {
    icon: "Icon/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-zinc-900 text-zinc-300`}>
        <div className="container">
          <LayoutNavigation />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
