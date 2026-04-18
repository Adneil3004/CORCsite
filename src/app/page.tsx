import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-0">
        <Hero />
        <Mission />
        
        {/* Our History / Founder Section */}
        <section className="bg-corc-red py-24 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] rounded-full bg-white blur-[120px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 uppercase tracking-widest text-white/90">
                Nuestra Historia
              </h2>
              <div className="h-1.5 w-24 bg-corc-yellow mb-8 rounded-full" />
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                La Confraternidad Sacerdotal de Operarios del Reino de Cristo nace bajo el impulso y espíritu del Concilio Vaticano II.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Nuestra espiritualidad es Cristocéntrica, centrada en el Sagrado Corazón de Jesús, y Mariana, sustentada en el Acontecimiento Guadalupano.
              </p>
              <button className="bg-white text-corc-red px-8 py-4 rounded-xl font-bold hover:bg-corc-yellow transition-colors shadow-lg text-sm sm:text-base">
                Conoce más sobre nosotros
              </button>
            </div>
            <div className="flex-1 w-full aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl skew-y-2 border-8 border-white/10 group">
               <Image
                 src="/CORCsite/imgs/img2.webp"
                 alt="Historia CORC"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-corc-red/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </div>
        </section>

        {/* Closing Call to Action / Motto */}
        <section className="bg-white py-32 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-corc-gold font-headline font-bold text-2xl uppercase tracking-[0.5em] mb-8">
                    Vocaciones
                </p>
                <h3 className="text-4xl md:text-6xl font-headline font-extrabold text-foreground mb-12 italic">
                    ¿Sientes el llamado?
                </h3>
                <button className="bg-corc-yellow text-foreground px-12 py-6 rounded-2xl font-bold text-xl hover:bg-corc-yellow/80 hover:scale-105 transition-all shadow-xl shadow-corc-yellow/20">
                    Contáctanos
                </button>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
