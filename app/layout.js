import "./globals.css";
import Navbar from "./_comonents/Navbar/Navbar";
import Background from "./_comonents/Background/Background";


export const metadata = {
  title: "karim",
  description: "Passionate about building clean, user-friendly interfaces, I bring ideas to life using cutting-edge tools and technologies.",
  icons: {
    icon: "Icon/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-zinc-900`}
      >
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
    </html>
  );
}
