import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {ThemeProvider } from "next-themes";
import { FloatingNavDemo } from "@/components/Nav";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swipe App",
  description: "Invoice, GST billing, Payments and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

          >  
             <FloatingNavDemo />
            
            {children}
            
           
           <FloatingNavDemo/>
          
          </ThemeProvider>

      </body>
    </html>
  );
}
