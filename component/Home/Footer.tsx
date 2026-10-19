import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Business Growth ", href: "/services/business-growth" },
  { label: "E-Commerce", href: "/services/e-commerce" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-[#060B17]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* Company */}
          <div>
            <p className="text-3xl font-bold text-white">
              Cloody<span className="text-cyan-400">Kit</span>
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Custom websites, AI automation, and Digital Marketing
              services for businesses in the USA, UK, Canada, and Australia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white">Services</h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:cloodykit@gmail.com"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Mail className="h-5 w-5 shrink-0 text-cyan-400" />
                cloodykit@gmail.com
              </a>

              {/* <a
                href="tel:+923104864698"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Phone className="h-5 w-5 shrink-0 text-cyan-400" />
                +92 310 4864698
              </a> */}

              {/* <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-5 w-5 shrink-0 text-cyan-400" />
                Pakistan
              </div> */}

            </div>

            <Link
              href="/booking"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Book Your Consultation
              <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CloodyKit. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-slate-500">
            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition hover:text-cyan-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
