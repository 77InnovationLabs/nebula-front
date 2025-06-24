import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

// Helper
import { Providers } from "./providers";

// Custom Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Nebula Quest",
  description: "Decentralized Educational SaaS",
};

export default function RootLayout(props: {children : ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          {props.children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
