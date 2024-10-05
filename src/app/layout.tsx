import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header/Navbar";

const epilogue = Epilogue({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className}`}>
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
