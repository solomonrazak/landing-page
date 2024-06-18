import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SuperSimple",
  description: "Software company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={`${inter.className} `}>

        
        <Navbar />


        {children}
        <Footer />

      </body>
    </html>
  );
}
