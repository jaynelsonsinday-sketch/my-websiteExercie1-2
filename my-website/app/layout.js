import Link from "next/link";
import "./globals.css";
import SiteHeader from "./components/site-header";

export const metadata = {
  title: "Nelson Sinday | Portfolio",
  description: "The portfolio of Nelson Sinday, IT student and aspiring software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <Link className="footer-name" href="/">Nelson Sinday</Link>
          <span>Designed with curiosity · 2026</span>
          <Link href="/about">About Nelson ↗</Link>
        </footer>
      </body>
    </html>
  );
}
