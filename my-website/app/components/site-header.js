"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const pages = [{ href: "/", label: "Home", index: "01" }, { href: "/portfolio", label: "Portfolio", index: "02" }, { href: "/about", label: "About", index: "03" }, { href: "/gallery", label: "Gallery", index: "04" }];
export default function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Nelson Sinday home"><span className="wordmark-mark" role="img" aria-label="Portrait of Nelson Sinday" /><span>Nelson Sinday</span></Link><nav className="nav-links" aria-label="Main navigation">{pages.map((page) => <Link className={`nav-link${pathname === page.href ? " nav-link-active" : ""}`} href={page.href} key={page.href} aria-current={pathname === page.href ? "page" : undefined}><span className="nav-index">{page.index}</span>{page.label}</Link>)}</nav><Link className="header-contact" href="/about">About me ↗</Link></header>;
}