"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Heart, Users, Newspaper, Smartphone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/", icon: Heart },
  { name: "Nosotros", href: "/nosotros", icon: Users },
  { name: "Vocaciones", href: "/vocaciones", icon: Heart },
  { name: "Pastoral", href: "/pastoral", icon: Heart },
  { name: "Noticias", href: "/noticias", icon: Newspaper },
  { name: "Contacto", href: "/contacto", icon: Smartphone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="w-full">
        <div className="bg-corc-yellow border-b border-black/5 px-6 sm:px-10 h-20 flex items-center justify-between shadow-sm">
          {/* Logo */}
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
              <span className="text-black font-headline font-bold text-lg leading-none">
                CORC
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black/80 hover:text-black font-body text-sm font-semibold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-corc-red transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black/70 hover:text-black transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-32 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-corc-cream/50 transition-all text-foreground/80 hover:text-corc-red group"
                >
                  <link.icon className="text-corc-red group-hover:scale-110 transition-transform" size={24} />
                  <span className="font-headline font-bold text-lg">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
