import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import { cx } from "../utils/index.js";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index.jsx";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: "My Blog",
  description: "Created By Mogaka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
