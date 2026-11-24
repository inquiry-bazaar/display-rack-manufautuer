
import { Manrope, Inter } from "next/font/google";
import "./globals.css"; import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/Scroll";
import Footer from "@/components/layout/Footer";
;

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arya Insulation | Supermarket Rack Manufacturer",
  description:
    "Arya Insulation offers premium display racks, retail shelving, supermarket racks, and customized display rack solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
