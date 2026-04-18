"use client";

import { Church, Heart, BookOpen, Globe } from "lucide-react";
import { motion } from "framer-motion";

const missionCards = [
  {
    title: "Vocación Sacerdotal",
    description: "Merecer, pedir, buscar, fomentar, engendrar y atender a las vocaciones sacerdotales.",
    icon: Heart,
    color: "bg-corc-red",
    size: "col-span-2 row-span-2",
  },
  {
    title: "Misiones y Diócesis",
    description: "Prestamos sacerdotes a las diócesis necesitadas de clero en todo el mundo.",
    icon: Globe,
    color: "bg-corc-blue text-foreground",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Espiritualidad",
    description: "Cristocéntrica, Mariana y Eclesial, centrada en el Sagrado Corazón.",
    icon: Church,
    color: "bg-corc-gold text-foreground",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Formación",
    description: "Celo por la preparación integral de los futuros operarios del Reino.",
    icon: BookOpen,
    color: "bg-corc-yellow text-foreground",
    size: "col-span-2 row-span-1",
  },
];

export default function Mission() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4"
          >
            Nuestra Misión
          </motion.h2>
          <div className="h-1.5 w-24 bg-corc-red mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Como Sociedad de Vida Apostólica, buscamos la Gloria y Alabanza de Dios a través del celo por las vocaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:h-[600px]">
          {missionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${card.size} ${card.color} rounded-[2rem] p-8 flex flex-col justify-between group cursor-default shadow-sm hover:shadow-xl transition-all duration-500`}
            >
              <div className="flex justify-between items-start">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <card.icon size={32} className={card.color.includes('text-foreground') ? 'text-foreground' : 'text-white'} />
                </div>
              </div>
              
              <div>
                <h3 className={`text-2xl md:text-3xl font-headline font-bold mb-4 ${card.color.includes('text-foreground') ? 'text-foreground' : 'text-white'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm md:text-base opacity-80 ${card.color.includes('text-foreground') ? 'text-foreground' : 'text-white'}`}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
