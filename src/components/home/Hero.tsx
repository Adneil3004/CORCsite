"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-white pt-20">
      {/* Background Watermark "CORC" */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[25vw] font-headline font-extrabold text-foreground/[0.03] select-none leading-none tracking-tighter">
          CORC
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-5 lg:px-5 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="font-headline font-extrabold leading-[0.85] tracking-tight flex flex-col">
                <span className="text-corc-red text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase">
                  PER CHRISTUM
                </span>
                <span className="text-[#3a3520] text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase -mt-4">
                  ET CUM IPSO
                </span>
                <span className="text-corc-gold text-[6rem] md:text-[8rem] lg:text-[10rem] uppercase -mt-4">
                  ET IN IPSO
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-foreground/70 text-lg md:text-xl font-body max-w-xl mb-10 leading-relaxed font-medium"
            >
              Somos una Familia Sacerdotal Misionera que trabaja por extender el Reino de Cristo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="bg-corc-blue text-blue-900 px-8 py-4 rounded-full font-bold text-base hover:bg-corc-blue/80 transition-all hover:scale-105 shadow-lg shadow-corc-blue/10">
                Explora Nuestra Misión
              </button>
              <button className="bg-corc-cream/50 text-[#3a3520] px-8 py-4 rounded-full font-bold text-base hover:bg-corc-cream/80 transition-all hover:scale-105 border border-[#3a3520]/10">
                Ver Historia
              </button>
            </motion.div>
          </div>

          {/* Right Column: Floating Image & Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-[450px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white"
            >
              <Image
                src="/imgs/img1.jpg"
                alt="Operarios del Reino de Cristo"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* "EST. 1963" Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 left-0 lg:-left-6 bg-[#6b671a] text-white p-6 rounded-[1.5rem] shadow-xl flex flex-col items-center justify-center leading-none"
            >
              <span className="text-xs uppercase tracking-widest font-bold mb-1 opacity-80 text-corc-yellow">Est.</span>
              <span className="text-3xl font-headline font-extrabold tracking-tight">1963</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
