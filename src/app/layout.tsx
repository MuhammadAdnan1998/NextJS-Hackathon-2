// Importing the type definition for Metadata from Next.js
import type { Metadata } from "next";

// Importing the localFont utility from Next.js for custom font integration
import localFont from "next/font/local";

// Importing global CSS styles for consistent styling across the app
import "./globals.css";

// Importing layout components
import Headline from "@/components/layout/headline";
import Navbar from "@/components/layout/navbar"; 
import Footer from "@/components/layout/footer"; 

// =======================
// Custom Fonts (Helvetica Neue)
// =======================

// Importing and defining the Helvetica Neue Bold font
const helveticaBold = localFont({
  src: "./fonts/HelveticaNeueBold.otf", 
  variable: "--font-helvetica-bold",
  weight: "100 900", 
});

// Importing and defining the Helvetica Neue Heavy font
const helveticaHeavy = localFont({
  src: "./fonts/HelveticaNeueHeavy.otf",
  variable: "--font-helvetica-heavy",
  weight: "100 900", 
});

// Importing and defining the Helvetica Neue Light font
const helveticaLight = localFont({
  src: "./fonts/HelveticaNeueLight.otf",
  variable: "--font-helvetica-light",
  weight: "100 900",
});

// Importing and defining the Helvetica Neue Medium font
const helveticaMedium = localFont({
  src: "./fonts/HelveticaNeueMedium.otf",
  variable: "--font-helvetica-medium",
  weight: "100 900",
});

// =======================
// Metadata Configuration
// =======================

// Defining metadata for the application
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// =======================
// RootLayout Component
// =======================

// Root layout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        The body includes:
        - Applied custom font variables
        - Antialiased text rendering for smoother fonts
        - Overflow hidden on the x-axis to prevent unwanted horizontal scrolling 
      */}
      <body
        className={`${helveticaBold.variable} 
        ${helveticaHeavy.variable} 
        ${helveticaLight.variable} 
        ${helveticaMedium.variable}
        antialiased overflow-x-hidden`}
        cz-shortcut-listen="true"
      >
        {/* Render the headline, navbar, children content, and footer */}
        <Headline />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
