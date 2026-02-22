"use client";

import Link from "next/link";
import { Building2, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                TRS Realty
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Premium real estate services in India. We help you find
              personalized homes and high-yield investment properties.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-slate-300 shrink-0" />
                <span>Level 4, Prestige Trade Tower,<br />Palace Road, Bangalore, 560001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-slate-300 shrink-0" />
                <span>+91 800 555 1234</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-slate-300 shrink-0" />
                <span>hello@trsrealty.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-serif">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest property updates and investment insights.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-900 border border-slate-800 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md px-4 py-2 text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TRS Realty. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
