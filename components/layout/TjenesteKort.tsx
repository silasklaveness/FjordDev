"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Laptop, Code, Search } from "lucide-react";

// Define the service type
interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

export default function ServiceShowcase() {
  const services: Service[] = [
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Nettsidedesign",
      description: "Skape visuelt imponerende og brukervennlige nettsteder.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Webutvikling",
      description:
        "Integrasjon av moderne løsninger i din nettside for å hjelpe din virksomhet.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimalisering",
      description:
        "Forbedre din nettsides synlighet og rangering i søkemotorer for å tiltrekke flere besøkende.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Vår ekspertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && typeof window !== "undefined" && window.innerWidth > 768) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden rounded-lg shadow-xl touch-auto will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          service.color
        } opacity-75 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      />
      <div className="relative p-6 h-full flex flex-col">
        <motion.div
          animate={isHovered ? { y: -10, opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          {service.icon}
        </motion.div>
        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-200 mb-4 flex-grow">{service.description}</p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHovered ||
            (typeof window !== "undefined" && window.innerWidth <= 768)
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3 }}
          className="mt-auto bg-white text-gray-900 py-2 px-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}
