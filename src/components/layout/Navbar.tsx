"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Historia", href: "/historia" },
  { name: "Sedes", href: "/sedes" },
  { name: "Vocaciones", href: "/vocaciones" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Upper Motto Bar */}
      <div className="bg-[#ac000e] py-1 text-center hidden md:block">
        <span className="text-[10px] md:text-xs font-headline font-bold text-[#f2e41b] uppercase tracking-[0.4em]">
          Per Christum et cum Ipso et in Ipso
        </span>
      </div>

      <div className="w-full bg-[#f2e41b] shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/imgs/Logo CORC.png"
                alt="Logo CORC"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#ac000e] font-headline font-black text-xl leading-none uppercase tracking-tighter">
                CORC
              </span>
              <span className="text-[#1f1c04] font-headline font-bold text-[10px] uppercase tracking-widest hidden sm:block">
                Operarios del Reino de Cristo
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1f1c04] hover:text-[#ac000e] font-headline text-sm font-extrabold uppercase tracking-tight transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ac000e] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            <button className="bg-[#ac000e] text-white px-6 py-2 rounded-full font-headline font-black uppercase tracking-wider text-xs hover:bg-[#8e000b] transition-all active:scale-95">
              Portal
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1f1c04] hover:text-[#ac000e] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-[#f2e41b] rounded-3xl shadow-2xl border border-black/5 p-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#1f1c04] font-headline font-black text-2xl uppercase tracking-tight hover:text-[#ac000e] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-black/10" />
              <button className="bg-[#ac000e] text-white px-8 py-4 rounded-2xl font-headline font-black uppercase text-center">
                Portal Miembros
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
