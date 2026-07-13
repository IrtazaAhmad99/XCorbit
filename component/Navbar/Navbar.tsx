"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "Services", href: "/#services" },
  { name: "Our Work", href: "/#projects" },
  { name: "Our Process", href: "/#process" },
  { name: "Why Choose Us", href: "/#chooseus" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#050B18]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center  transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/images/favicon.png"
            alt="CloodyKit"
            width={58}
            height={58}
            priority
          />

          <span className="text-xl font-bold text-white">
            CloodyKit
          </span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-300 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}

        <Link href="/contact" className="hidden md:block rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          Book a Consultation
        </Link>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 text-white transition hover:bg-white/10"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-white/10 bg-[#050B18]/95 backdrop-blur-xl px-6 py-6">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 transition-colors duration-300 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" className="mt-2 rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;