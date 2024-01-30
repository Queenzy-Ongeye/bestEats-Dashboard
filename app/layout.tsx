import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(site)/components/header";
import Footer from "./(site)/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Eats Dashboard",
  description: "Greater than the minimum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main>{children}</main>
        <hr className="w-full text-gray-600 mx-auto" />
        <Footer />
      </body>
    </html>
  );
}
