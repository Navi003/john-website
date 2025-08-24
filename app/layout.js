import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";
import MobileNav from "./components/MobileNav";
import "./globals.css";

export const metadata = {
  title: "English Courses for Adults",
  description: "Practical and flexible English learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen">
        <MobileNav />
        {children}

        <Footer />
      </body>
    </html>
  );
}
