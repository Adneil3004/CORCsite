"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sedesMexico = [
  {
    name: "Seminario Menor \"Internado José Luis Sánchez del Río\"",
    location: "Salvatierra, Guanajuato",
    established: "22 de noviembre de 1964",
    description: "Ubicado en la Antigua Hacienda de San José del Carmen, es el primer centro de formación de la Confraternidad, dedicado al discernimiento vocacional de jóvenes.",
    image: "/CORCsite/imgs/semisalvatierra.webp",
    tags: ["Formación", "Vocaciones"]
  },
  {
    name: "Casa de Formación y Templo Expiatorio",
    location: "Santiago de Querétaro, Qro.",
    established: "10 de julio de 1966",
    description: "Sede central de estudios en México. Alberga el Templo Expiatorio del Sagrado Corazón de Jesús, epicentro de oración perpetua por las vocaciones.",
    image: "/CORCsite/imgs/semiQueretaro.webp",
    tags: ["Estudios", "Espiritualidad"]
  },
  {
    name: "Casa Generalicia \"Pater Noster\"",
    location: "Corregidora, Querétaro",
    established: "Sede Administrativa",
    description: "Centro de gobierno mundial de la Confraternidad y residencia oficial del Director General.",
    image: "/CORCsite/imgs/img2.webp",
    tags: ["Gobierno", "Administración"]
  },
  {
    name: "Santuario de la Quinta Aparición",
    location: "Tulpetlac, Estado de México",
    established: "Sitio Histórico",
    description: "Lugar sagrado donde la Virgen de Guadalupe sanó a Juan Bernardino, pilar de nuestra identidad Guadalupana.",
    image: "/CORCsite/imgs/santuario5taparicion.webp",
    tags: ["Santuario", "Guadalupano"]
  }
];

const sedeEspaña = {
  name: "Seminario Mayor \"Sagrado Corazón de Jesús y Nuestra Señora del Rosario\"",
  location: "Olías del Rey, Toledo, España",
  established: "16 de enero de 1979",
  description: "Centro de formación teológica superior donde seminaristas de todo el mundo completan sus estudios eclesiásticos en el corazón de Europa. Un puente de fe entre continentes.",
  image: "/CORCsite/imgs/img1.webp",
  tags: ["Teología", "Internacional"]
};

const presenciaGlobal = [
  { country: "Estados Unidos", regions: "California y Texas", icon: "🇺🇸" },
  { country: "Colombia", regions: "Grupos de Formación", icon: "🇨🇴" },
  { country: "Italia", regions: "Roma (Postgrado)", icon: "🇮🇹" }
];

export default function SedesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/CORCsite/imgs/img1.webp"
          alt="Presencia Misionera"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#ac000e]/40 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#f2e41b] font-headline font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Nuestra Presencia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white uppercase tracking-tighter"
          >
            Sedes <span className="text-[#f2e41b]">&</span> Misiones
          </motion.h1>
        </div>
      </section>

      {/* Mexico Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#ac000e] font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              México
            </h2>
            <div className="h-1.5 w-24 bg-[#f2e41b] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sedesMexico.map((sede, index) => (
              <motion.div
                key={sede.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src={sede.image}
                  alt={sede.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex gap-2 mb-4">
                    {sede.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#f2e41b] text-[#1f1c04] text-[10px] font-black uppercase tracking-wider rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-black text-white uppercase leading-tight mb-4">
                    {sede.name}
                  </h3>
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <MapPin size={16} className="text-[#f2e41b]" />
                      {sede.location}
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Calendar size={16} className="text-[#f2e41b]" />
                      {sede.established}
                    </div>
                    <p className="text-white/60 text-sm mt-4 leading-relaxed max-w-sm">
                      {sede.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* España Feature */}
      <section className="py-24 bg-[#1f1c04] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#f2e41b] font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-8 italic">
                Presencia en <br /> 🇪🇸 España
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">{sedeEspaña.name}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    {sedeEspaña.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <Globe className="text-[#f2e41b] mb-4" />
                    <span className="block text-xs uppercase tracking-widest text-[#f2e41b] mb-1">Ubicación</span>
                    <span className="font-bold text-sm">{sedeEspaña.location}</span>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <Calendar className="text-[#f2e41b] mb-4" />
                    <span className="block text-xs uppercase tracking-widest text-[#f2e41b] mb-1">Erección Canónica</span>
                    <span className="font-bold text-sm">{sedeEspaña.established}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden"
            >
              <Image
                src={sedeEspaña.image}
                alt={sedeEspaña.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#ac000e]/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#ac000e] font-headline font-black text-3xl md:text-4xl uppercase tracking-tighter mb-16">
            Presencia Global
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {presenciaGlobal.map((item) => (
              <motion.div
                key={item.country}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border-2 border-dashed border-black/10 hover:border-[#ac000e] transition-all"
              >
                <span className="text-6xl mb-6 block">{item.icon}</span>
                <h3 className="text-2xl font-headline font-black uppercase mb-4 text-[#1f1c04]">
                  {item.country}
                </h3>
                <p className="text-[#1f1c04]/60 font-medium">
                  {item.regions}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#D9D15F] mb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-headline font-black text-[#ac000e] uppercase tracking-tighter mb-8">
            ¿Querés conocer más <br /> sobre nuestra obra?
          </h2>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-[#ac000e] text-white px-10 py-5 rounded-full font-headline font-black uppercase tracking-wider hover:bg-black transition-all group"
          >
            Contactanos
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
