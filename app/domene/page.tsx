"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Globe, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

export default function Domene() {
  const [domainName, setDomainName] = useState("");

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Søk etter domene",
      description: "Skriv inn ønsket domenenavn og sjekk tilgjengelighet.",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Velg domene",
      description:
        "Velg det perfekte domenet for din nettside fra tilgjengelige alternativer.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-500" />,
      title: "Registrer og betal",
      description: "Fullfør registreringen og betal for ditt nye domene.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
      title: "Aktiver domenet",
      description:
        "Følg one.com's instruksjoner for å aktivere og sette opp ditt nye domene.",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: "Legg til DNS-records",
      description:
        "Vi sender en e-post med instruksjoner for å legge til DNS-records for ditt nye domene.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pt-[80px]">
            Domene Oppsett med One.com
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Har ikke et domene ennå? Ingen problem! Følg vår enkle guide for å
            sette opp ditt eget domene med one.com.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-300 mb-6">
            Trenger du hjelp med domene oppsett? Vi vil som en del av vår
            tjeneste hjelpe med oppsettet!
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
            Kontakt oss for support
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
