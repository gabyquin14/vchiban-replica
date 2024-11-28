import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

const gilboys = localFont({
  src: "./fonts/jt_gilboys/Jt Gilboys.otf",
  display: "swap",
  variable: "--gilboys",
});
const tommy = localFont({
  src: "./fonts/made_tommy/MADE Tommy Soft ExtraBold PERSONAL USE.otf",
  display: "swap",
  variable: "--tommy",
});
const epilogue = Epilogue({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VchiBan ~ Found Family Indie Group",
  description:
    "Four virtual content creators... all from different parts of Stardust Valley, just happened to be at the right cafe at the right time, and thus VchiBan was formed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} ${gilboys.variable} ${tommy.variable}`}
      >
        <link
          rel="icon"
          href="https://framerusercontent.com/images/QypSA7Jg3SzOQBdCsrB1t4ZF6NU.svg"
          sizes="any"
        />
        <Navbar />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
