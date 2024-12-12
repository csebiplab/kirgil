import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import { Montserrat } from "next/font/google";
import ScrollToTopComponent from "@/common/ScrollToTop";
import { headers } from "next/headers";
import { projectfor } from "@/constants/projectfor";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
});

export async function generateMetadata() {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const clientUrlWithPath = process.env.NEXT_PUBLIC_CLIENT_URL + pathname

  // console.log(clientUrlWithPath, 'clientUrlWithPath')

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/api/metadata?projectFor=${projectfor}&pageLink=${clientUrlWithPath}`, {
      cache: "no-store",
    });
    const data = await response.json();

    const { title, description, keywords } = data?.data[0] ?? {};

    const gglverificationResponse = await fetch(`${apiUrl}/api/site-verification?projectFor=${projectfor}`, {
      cache: "no-store",
    });

    const gVerificationData = await gglverificationResponse.json();

    const verificationContent = gVerificationData?.data?.[0]?.url

    return {
      title: title || "Kirgil",
      description: description || "Kirgil",
      keywords: keywords || "Kirgil",
      openGraph: {
        title: title || "Kirgil",
        description: description || "Kirgil",
      },
      verification: {
        google: verificationContent || "ABCDEFGH",
      },
      alternates: {
        canonical: clientUrlWithPath,
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };

  } catch (error) {
    return {
      title: "Home",
      description: "Home",
      keywords: "Home",
    }
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
