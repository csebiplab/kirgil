import Footer from "@/components/layouts/Footer/Footer";
import "./globals.css";
import Header from "@/components/layouts/Header/Header";
import { Montserrat } from "next/font/google";
import dbConnect from "@/lib/db.connect";
import homeRouteMetaData from "@/models/homeMetaDataFile";
import verificationSite from "@/models/siteVerification";
import ScrollToTopComponent from "@/common/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
});


export async function generateMetadata() {

  try {

    await dbConnect();
    const homeMetaData = await homeRouteMetaData.find();
    const googleVerificationData = await verificationSite.find();

    const googleConsoleKey = extractGoogleConsoleKey(googleVerificationData);

    const {
      title = "General Contractors in Toronto | National Remodelling",
      description = "Top-rated general contractors in Toronto for expert home renovations, bathroom renovations, kitchen renovations and construction projects",
      keywords = "General contractors in Toronto",

    } = homeMetaData?.[0] || {};

    return {
      title,
      description,
      keywords,
      verification: {
        google: googleConsoleKey,
      }
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: "General Contractors in Toronto | National Remodelling",
      description: "Top-rated general contractors in Toronto for expert home renovations, bathroom renovations, kitchen renovations and construction projects",
      keywords: "General contractors in Toronto",
    };
  }
}

function extractGoogleConsoleKey(googleVerificationData) {
  try {
    // const { verificationUrl } = googleVerification ?? {};
    if (!googleVerificationData || !googleVerificationData[0]?.title) return "";


    const metaTagContent = googleVerificationData[0].title;
    const consoleKey = metaTagContent.split("=").pop().slice(1, -4);
    return consoleKey;


  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTopComponent/>
      </body>
    </html>
  );
}
