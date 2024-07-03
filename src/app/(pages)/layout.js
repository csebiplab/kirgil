import Footer from "@/components/layouts/Footer/Footer";
import "./globals.css";
import Header from "@/components/layouts/Header/Header";
import { Montserrat } from "next/font/google";
import ScrollToTopComponent from "@/common/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function extractGoogleConsoleKey(verificationData) {
  try {
    const metaTagContent = verificationData?.title;
    if (!metaTagContent) return "";

    const parts = metaTagContent.split(" ");
    if (parts.length < 3) return "";

    const consoleKeyPart = parts[2].split("=")[1];
    return consoleKeyPart.slice(1, -1);
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

const staticMeta = {
  title: "General Contractors | Kirgil",
  description: "Top-rated general contractors for expert home renovations, bathroom renovations, kitchen renovations and construction projects",
  keywords: "General contractors",
}

export async function generateMetadata() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const metaDataResponse = await fetch(`${apiUrl}/api/home`, {
      cache: "no-store",
    });
    const metaData = await metaDataResponse.json();
    const { title, description, keywords } = metaData?.homeRouteAllMetaData?.[0] ?? {};

    const googleVerificationResponse = await fetch(`${apiUrl}/api/verificationUrl`, {
      cache: "no-store",
    });
    const googleVerification = await googleVerificationResponse.json();
    const googleConsoleKey = extractGoogleConsoleKey(googleVerification?.verificationUrl?.[0]);


    if (!title || !description || !keywords) return staticMeta;

    if ((title || description || keywords) && !googleConsoleKey) {
      return {
        title,
        description,
        keywords
      }
    }

    if ((title || description || keywords) && googleConsoleKey) {
      return {
        ...staticMeta, verification: {
          google: googleConsoleKey,
        }
      }
    }


  } catch (error) {
    console.error('Error generating metadata:', error);
    return staticMeta;
  }
}

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
