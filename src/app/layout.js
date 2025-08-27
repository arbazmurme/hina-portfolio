import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Hina Murme | Portfolio",
  description: "Python Backend Developer, Data Analyst & Frontend Developer",
  openGraph: {
    title: "Hina Murme | Portfolio",
    description:
      "Portfolio of Python Backend Developer, Data Analyst & Frontend Developer",
    url: "hina-portfolio-eight.vercel.app",
    siteName: "Hina Portfolio",
    images: [
      {
        url: "/pic.jpg", // Put your banner in /public
        width: 1200,
        height: 630,
        alt: "Hina Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
