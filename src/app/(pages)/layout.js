import Footer from "@/components/layouts/Footer/Footer";
import "./globals.css";
import Header from "@/components/layouts/Header/Header";
import { Montserrat } from "next/font/google";
import ScrollToTopComponent from "@/common/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTopComponent />
      </body>
    </html>
  );
}
