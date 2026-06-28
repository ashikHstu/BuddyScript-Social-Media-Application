import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "@/public/assets/css/bootstrap.min.css"
import "@/public/assets/css/main.css"
import "@/public/assets/css/responsive.css"
// import "@/public/assets/css/extra-design.css"
import "@/public/assets/css/common.css"
import Providers from "./provider";

// 2. Load the Poppins font with the exact weights requested in the HTML tag
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"],
});



export const metadata: Metadata = {
  title: "Buddy Script",
  description: "Buddy Script app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      <body className={poppins.className}>
      <Providers> {children}</Providers>
    
        </body>
    </html>
  );
}
