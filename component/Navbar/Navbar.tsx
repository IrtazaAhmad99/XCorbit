"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Our Process", href: "/process" },
  { name: "Why CloodyKit", href: "/why-cloodykit" },
  { name: "FAQ", href: "/#faq" },
  { name: "Founder", href: "/founder" },
  { name: "Contact", href: "/contact" },
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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050B18]/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}

        <Link
          href="/"
          className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/favicon.png"
            alt="CloodyKit"
            width={48}
            height={48}
            priority
            className="sm:h-14.5 sm:w-14.5"
          />

          <span className="text-lg font-bold text-white sm:text-xl">
            Cloody<span className="text-cyan-400">Kit</span>
          </span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-300 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}

        <Link
          href="/booking"
          className="hidden rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 px-6 py-3 font-semibold text-black shadow-[0_0_12px_rgba(34,211,238,0.45),0_0_24px_rgba(168,85,247,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_18px_rgba(34,211,238,0.65),0_0_35px_rgba(168,85,247,0.4)] sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm  hover:scale-[1.02]  xl:block"
        >
          Book a Consultation
        </Link>

        {/* Mobile CTA + Menu Button */}

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <Link
            href="/booking"
            className="whitespace-nowrap rounded-lg bg-linear-to-r from-cyan-400 to-purple-500 px-3 py-2 text-xs font-semibold text-black shadow-[0_0_12px_rgba(34,211,238,0.45),0_0_24px_rgba(168,85,247,0.25)]  hover:scale-105 hover:shadow-[0_0_18px_rgba(34,211,238,0.65),0_0_35px_rgba(168,85,247,0.4)] sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm transition-all duration-300 "
          >
            Book a Consultation
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="rounded-lg p-2 text-white transition hover:bg-white/10"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}

      <div
        className={`overflow-hidden transition-all duration-300 xl:hidden ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#050B18]/95 px-6 py-6 backdrop-blur-xl">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
