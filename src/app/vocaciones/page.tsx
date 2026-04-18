"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Heart, Users, ArrowRight, Church } from "lucide-react";

export default function VocacionesPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/CORCsite/imgs/vocaciones1.webp"
          alt="Vocación CORC"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#faf9f6]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f2e41b] text-[#ac000e] text-[10px] font-headline font-black uppercase tracking-[0.2em] rounded-full mb-6">
              Llamado al Servicio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none mb-8">
              La Mies es <i className="font-serif">Mucha</i>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              Nuestra prioridad absoluta es el celo vocacional. Buscamos jóvenes dispuestos a entregar su vida por el Reino de Cristo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Quote Section */}
      <section className="py-24 px-6 bg-[#ac000e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-5xl font-serif leading-tight italic">
            "El Celo Vocacional es la prioridad absoluta de la Hermandad. Sin pastores, no hay Reino."
          </blockquote>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[#f2e41b] text-4xl font-headline font-black italic">60+</span>
              <span className="text-[10px] uppercase tracking-widest font-headline opacity-80">Años de Tradición</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-[#f2e41b] text-4xl font-headline font-black italic">2</span>
              <span className="text-[10px] uppercase tracking-widest font-headline opacity-80">Seminarios Propios</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-[#f2e41b] text-4xl font-headline font-black italic">México</span>
              <span className="text-[10px] uppercase tracking-widest font-headline opacity-80">Sede Principal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seminaries Bento Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-headline font-black uppercase tracking-[0.3em] text-[#ac000e] mb-4">
            Nuestros Seminarios
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-[#1f1c04]">
            Forjando <i className="font-serif">Pastores</i> del Reino
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
          {/* Seminario Menor - Salvatierra */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-12 lg:col-span-7 bg-white rounded-[40px] overflow-hidden shadow-2xl relative group"
          >
            <Image
              src="/CORCsite/imgs/voaciones.webp"
              alt="Seminario Menor Salvatierra"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <span className="text-[#f2e41b] text-xs font-headline font-black uppercase tracking-widest mb-4 block">
                Salvatierra, Guanajuato
              </span>
              <h4 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Seminario Menor de Cristo Rey
              </h4>
              <p className="text-white/80 max-w-lg mb-8 text-lg font-light">
                "Ustedes son la pupila de mis ojos". Un espacio de discernimiento temprano y formación humana integral en el corazón del bajío.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-headline font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#f2e41b] transition-colors">
                Conocer Más <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Seminario Mayor - Querétaro */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-12 lg:col-span-5 bg-[#1f1c04] rounded-[40px] overflow-hidden shadow-2xl relative group"
          >
            <Image
              src="/CORCsite/imgs/semiQueretaro.webp"
              alt="Seminario Mayor Querétaro"
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1c04]/90 via-[#1f1c04]/40 to-transparent" />
            <div className="absolute bottom-12 left-10 right-10">
              <span className="text-[#f2e41b] text-xs font-headline font-black uppercase tracking-widest mb-4 block">
                Santiago de Querétaro
              </span>
              <h4 className="text-3xl font-serif text-white mb-6">
                Seminario Mayor <br/>de la CORC
              </h4>
              <p className="text-white/70 mb-8 font-light italic">
                Formación filosófica y teológica rigurosa para el ministerio sacerdotal en la hermandad.
              </p>
              <div className="flex flex-col gap-4 text-white/60 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#f2e41b] rounded-full" />
                  <span>Vida Comunitaria</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#f2e41b] rounded-full" />
                  <span>Celo Apostólico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#f2e41b] rounded-full" />
                  <span>Fidelidad al Magisterio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] rounded-[60px] overflow-hidden shadow-2xl">
            <Image
              src="/CORCsite/imgs/vocaciones2.webp"
              alt="Vida de Seminario"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-sm font-headline font-black uppercase tracking-[0.3em] text-[#ac000e] mb-6">
              Nuestra Filosofía
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1f1c04] mb-10 leading-tight">
              Un camino de <br/>
              <i className="font-serif">Trascendencia</i> y Entrega
            </h3>
            
            <div className="space-y-10">
              {[
                {
                  title: "Formación Integral",
                  desc: "Cultivamos las dimensiones humana, espiritual, intelectual y pastoral para formar pastores completos.",
                  icon: <BookOpen className="text-[#ac000e]" size={24} />
                },
                {
                  title: "Fraternidad CORC",
                  desc: "No somos solo compañeros, somos hermanos operarios viviendo en comunidad y oración.",
                  icon: <Users className="text-[#ac000e]" size={24} />
                },
                {
                  title: "Celo por las Almas",
                  desc: "Nuestra vocación arde en el deseo de llevar a Cristo a todos los rincones del mundo.",
                  icon: <Heart className="text-[#ac000e]" size={24} />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-headline font-black text-[#1f1c04] uppercase tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#1f1c04]/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[80px] bg-[#f2e41b] overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Church size={300} strokeWidth={0.5} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-[#ac000e] mb-8 leading-tight">
              ¿Sientes que el Señor <br/>te está llamando?
            </h2>
            <p className="text-[#1f1c04]/80 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light">
              No dejes para mañana lo que el Espíritu Santo te inspira hoy. Estamos aquí para acompañarte en tu discernimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ac000e] text-white px-12 py-5 rounded-full font-headline font-black text-sm uppercase tracking-widest hover:bg-[#8e000b] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#ac000e]/20">
                Contactar al Promotor
              </button>
              <button className="bg-white/50 backdrop-blur-md border border-[#ac000e]/10 text-[#ac000e] px-12 py-5 rounded-full font-headline font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                Ver Requisitos
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
