"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f2e41b] py-20 px-6 sm:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
          <span className="font-headline text-3xl font-black text-[#ac000e] tracking-tightest uppercase mb-4 block">CORC</span>
          <p className="text-[#1f1c04]/60 font-medium max-w-sm">Haciendo que Cristo reine a través de la formación y el servicio diocesano.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 font-headline font-bold text-sm uppercase tracking-widest text-[#1f1c04]">
          <Link href="/" className="hover:text-[#ac000e] transition-colors">Inicio</Link>
          <Link href="/historia" className="hover:text-[#ac000e] transition-colors">Historia</Link>
          <Link href="/sedes" className="hover:text-[#ac000e] transition-colors">Sedes</Link>
          <Link href="/vocaciones" className="hover:text-[#ac000e] transition-colors">Vocaciones</Link>
          <Link href="/contacto" className="hover:text-[#ac000e] transition-colors">Contacto</Link>
        </div>
        <p className="text-[#1f1c04]/40 text-xs font-bold uppercase tracking-widest">
          &copy; {currentYear} Operarios del Reino de Cristo
        </p>
      </div>
    </footer>
  );
}
