"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PrimaryButtonProps {
  href: string;
  text: string;
  className?: string;
  icon?: boolean;
}

export default function PrimaryButton({
  href,
  text,
  className = "",
  icon = true,
}: PrimaryButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <Link
        href={href}
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/30 bg-linear-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]" >
        {/* Shimmer */}
        <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-0" />

        {/* Text */}
        <span className="relative z-10">{text}</span>

        {/* Icon */}
        {icon && (
          <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </Link>
    </motion.div>
  );
}