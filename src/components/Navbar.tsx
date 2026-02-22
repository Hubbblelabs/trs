"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <span
              className={`font-serif text-2xl font-bold tracking-tight ${isTransparent ? "text-white" : "text-foreground"}`}
            >
              TRS Realty
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? isTransparent
                      ? "text-white font-semibold"
                      : "text-primary font-semibold"
                    : isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              size="sm"
              className="rounded-full px-6 shadow-md shadow-primary/20"
            >
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${isTransparent ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-background shadow-lg border-b z-50 md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-serif text-xl font-bold">TRS Realty</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-4 rounded-full w-full">
                Book Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
