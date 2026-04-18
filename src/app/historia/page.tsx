"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Historia() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 lg:pt-48">
        {/* Hero Section: Editorial Premium */}
        <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-white mb-40 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-headline text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-black text-[#ac000e] tracking-tighter mb-8 uppercase">
                  Per Christum<br />
                  <span className="text-[#1f1c04]">Et Cum Ipso</span><br />
                  <span className="text-[#d9d15f]">Et In Ipso</span>
                </h1>
                <p className="text-xl max-w-lg mb-10 leading-relaxed font-body font-medium text-gray-700 italic border-l-4 border-[#f2e41b] pl-6 py-2">
                  "Hacer que Cristo reine en el corazón de los hombres y de las sociedades."
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#91cdf2] text-[#001e2d] px-8 py-4 rounded-full font-headline font-black uppercase text-sm hover:scale-105 transition-transform shadow-lg shadow-[#91cdf2]/20">
                    Nuestra Identidad
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white bg-gray-100"
              >
                <Image
                  src="/CORCsite/imgs/img1.webp"
                  alt="Operarios del Reino de Cristo"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              <div className="absolute -bottom-6 -left-12 bg-[#676000] p-8 rounded-3xl shadow-xl -rotate-3 hidden md:block">
                <span className="font-headline text-4xl font-black text-white leading-none">EST.<br />1963</span>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Text */}
          <div className="absolute top-1/2 -right-32 transform -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
            <span className="font-headline text-[30rem] font-black uppercase leading-none">HISTORIA</span>
          </div>
        </section>

        {/* Mission Pillars: Bento Grid */}
        <section className="bg-[#fcf4cc] py-32 rounded-t-[4rem] relative z-10 -mt-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="mb-20 text-center lg:text-left">
              <span className="text-[#ac000e] font-headline font-black uppercase tracking-[0.3em] text-sm">Nuestro Llamado</span>
              <h2 className="font-headline text-5xl md:text-6xl font-black mt-4 text-[#1f1c04]">Misión y Pilares</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8">
              {/* Card 1: Apoyo Diocesano */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-4 lg:col-span-8 bg-white p-12 rounded-[3.5rem] flex flex-col justify-between min-h-[450px] relative overflow-hidden shadow-xl border border-black/5"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#91cdf2]/20 rounded-2xl flex items-center justify-center mb-10">
                    <span className="text-[#216585] text-4xl">⛪</span>
                  </div>
                  <h3 className="font-headline text-4xl font-black mb-8 text-[#1f1c04] leading-tight">Apoyo Diocesano Misionero</h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-medium">
                    Prestamos sacerdotes a diócesis que carecen de clero o que se encuentran en zonas de misiones, llevando la luz de Cristo donde más se necesita.
                  </p>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.03]">
                  <span className="text-[20rem] font-black">✝️</span>
                </div>
              </motion.div>

              {/* Card 2: Celo Vocacional */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-2 lg:col-span-4 bg-[#ac000e] p-12 rounded-[3.5rem] text-white flex flex-col justify-end shadow-xl border-t-8 border-white/10"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-3xl">🔥</span>
                </div>
                <h3 className="font-headline text-3xl font-black mb-4">Celo Vocacional</h3>
                <p className="text-white/80 font-medium">Fomentamos, buscamos y ayudamos activamente a nuevas vocaciones sacerdotales.</p>
              </motion.div>

              {/* Card 3: Espiritualidad */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-2 lg:col-span-4 bg-[#216585] p-12 rounded-[3.5rem] text-white flex flex-col justify-end shadow-xl border-t-8 border-white/10"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-3xl">🌹</span>
                </div>
                <h3 className="font-headline text-3xl font-black mb-4">Espiritualidad</h3>
                <p className="text-white/80 font-medium">Fuerte impronta Guadalupana con una espiritualidad Trinitaria, Cristocéntrica y Mariana.</p>
              </motion.div>

              {/* Founder Spotlight Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-4 lg:col-span-8 bg-[#ebe3bc] p-12 rounded-[3.5rem] flex flex-col md:flex-row gap-8 items-center border border-black/5"
              >
                <div className="flex-1">
                  <h3 className="font-headline text-2xl font-black mb-6 uppercase tracking-tight text-[#1f1c04]">Nuestro Fundador</h3>
                  <p className="text-[#1f1c04]/80 text-xl font-medium italic mb-6">
                    "Dar obreros a la mies del Señor."
                  </p>
                  <p className="text-[#1f1c04]/70 font-body leading-relaxed">
                    La visión del Padre Enrique Amezcua Medina dio vida a una obra que hoy cruza fronteras.
                  </p>
                </div>
                <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
                  <Image src="/CORCsite/imgs/fundador.webp" alt="P. Enrique" width={128} height={128} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History: Editorial Split Layout */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image 
                  src="/CORCsite/imgs/fundador.webp" 
                  alt="Padre Enrique Amezcua Medina" 
                  width={600} 
                  height={800} 
                  className="rounded-[3.5rem] w-full aspect-[4/5] object-cover shadow-2xl relative z-10"
                />
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#f1e9c1] rounded-full -z-0"></div>
                
                {/* Vintage Badge */}
                <div className="absolute -bottom-10 -right-10 bg-[#ac000e] text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
                  <p className="font-headline text-xl font-black uppercase tracking-widest text-center">Fundado en<br /><span className="text-4xl">1963</span></p>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#216585] font-headline font-black uppercase tracking-[0.3em] text-sm">El Comienzo del Reino</span>
              <h2 className="font-headline text-6xl md:text-7xl font-black mt-6 mb-10 text-[#1f1c04] leading-[0.9] tracking-tightest">
                Legado de <span className="text-[#ac000e]">Fidelidad</span>
              </h2>
              <div className="prose prose-lg text-gray-700 font-medium">
                <p className="mb-8 leading-relaxed">
                  El 12 de septiembre de 1963, a los pies de la Virgen de Guadalupe, el <strong>Padre Enrique Amezcua Medina</strong> consagró su proyecto. Aquel día nació formalmente la Confraternidad en la diócesis de Tacámbaro.
                </p>
                <p className="mb-12">
                  Su origen en Chavinda, Michoacán, y su ordenación en 1944 marcaron el inicio de un carisma centrado en el "Celo Vocacional", especialmente para jóvenes con vocación pero sin recursos.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-8 group">
                  <span className="font-headline text-5xl font-black text-[#f2e41b] transition-colors group-hover:text-[#ac000e]">01.</span>
                  <div>
                    <h4 className="text-2xl font-black text-[#1f1c04] mb-2">Expansión Mexicana</h4>
                    <p className="text-gray-600 font-medium">De Salvatierra a Querétaro, estableciendo centros de formación que son el corazón de la obra.</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <span className="font-headline text-5xl font-black text-[#f2e41b] transition-colors group-hover:text-[#ac000e]">02.</span>
                  <div>
                    <h4 className="text-2xl font-black text-[#1f1c04] mb-2">Puente a Europa</h4>
                    <p className="text-gray-600 font-medium">En los años 70, la obra cruza el Atlántico hacia Toledo, España, uniendo dos continentes bajo una misma fe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global News: Horizontal Slide */}
        <section className="py-32 bg-[#fcf4cc] rounded-b-[4rem] mb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="text-[#ac000e] font-headline font-black uppercase tracking-[0.3em] text-sm">Actualidad</span>
                <h2 className="font-headline text-5xl font-black mt-4 text-[#1f1c04]">La Obra Continúa</h2>
              </div>
              <button className="text-[#ac000e] font-headline font-black flex items-center gap-2 hover:translate-x-2 transition-transform uppercase tracking-wider text-sm">
                Ver Todas las Noticias <span className="text-2xl">→</span>
              </button>
            </div>
            
            <div className="flex gap-10 overflow-x-auto pb-12 snap-x no-scrollbar">
              {/* Card 1 */}
              <div className="min-w-[320px] md:min-w-[420px] bg-white rounded-[3rem] p-10 shadow-xl border border-black/5 snap-start group cursor-pointer transition-all hover:shadow-2xl">
                <div className="aspect-video bg-gray-100 rounded-[2rem] mb-8 overflow-hidden relative">
                  <Image src="/CORCsite/imgs/img2.webp" alt="Noticia 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <span className="bg-[#91cdf2]/40 text-[#001e2d] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Eventos</span>
                <h3 className="font-headline text-3xl font-black mt-6 mb-4 text-[#1f1c04] leading-tight">Celebración Patronal</h3>
                <p className="text-gray-600 font-medium mb-10">Solemnidad y unión en la Casa Madre.</p>
                <div className="flex items-center gap-4 border-t border-black/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#f2e41b] flex items-center justify-center font-black text-[#ac000e]">24</div>
                  <span className="text-sm font-black uppercase tracking-widest text-gray-400">Mayo 2024</span>
                </div>
              </div>

               {/* Card 2 */}
               <div className="min-w-[320px] md:min-w-[420px] bg-white rounded-[3rem] p-10 shadow-xl border border-black/5 snap-start group cursor-pointer transition-all hover:shadow-2xl">
                <div className="aspect-video bg-gray-100 rounded-[2rem] mb-8 overflow-hidden relative">
                  <Image src="/CORCsite/imgs/img1.webp" alt="Noticia 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <span className="bg-[#f2e41b]/40 text-[#676000] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nuevas Misiones</span>
                <h3 className="font-headline text-3xl font-black mt-6 mb-4 text-[#1f1c04] leading-tight">Misión en California</h3>
                <p className="text-gray-600 font-medium mb-10">Expandiendo el Reino en nuevas fronteras.</p>
                <div className="flex items-center gap-4 border-t border-black/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#91cdf2] flex items-center justify-center font-black text-white">12</div>
                  <span className="text-sm font-black uppercase tracking-widest text-gray-400">Abril 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
