"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Laptop,
  Zap,
  Search,
  Shield,
  Code,
  Palette,
  Smartphone,
  FileText,
  ChevronRight,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGAttributes<SVGElement>>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className="bg-gray-800 border-none overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center mb-4"
          >
            <Icon className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-bold text-blue-400">{title}</h3>
          </motion.div>
          <p className="text-gray-300">{description}</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-2 right-2"
          >
            <ChevronRight className="w-6 h-6 text-blue-400" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Component() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-gray-900 to-gray-800 text-white w-full">
      <main className="flex-1">
        <motion.section
          style={{ opacity, scale }}
          className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20"
        >
          <div className="container mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="mt-[80px] text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Våre Web Utvikling Tjenester
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Vi tilbyr en rekke web utvikling tjenester for å hjelpe din
                    bedrift å blomstre online. Fra design til optimalisering,
                    gir vi oss ikke før du er fornøyd med ditt prosjekt.
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Kom i gang
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/tjenester.png"
                  width={550}
                  height={310}
                  alt="Våre Tjenester"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Nettsidedesign
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Vi skaper visuelle og brukervennlige nettsider som fanger
                oppmerksomheten til dine kunder. Ved å kombinere kreativitet og
                teknologi er målet å levere førsteklasses resultater.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/webutvikling.png"
                  width={550}
                  height={310}
                  alt="Nettsidedesign"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-4">
                <FeatureCard
                  icon={Palette}
                  title="Brukervennlig Design"
                  description="Vi fokuserer på å skape nettsider som er enkle å navigere og gir en positiv brukeropplevelse."
                />
                <FeatureCard
                  icon={Smartphone}
                  title="Responsivt Design"
                  description="Våre nettsider er optimalisert for alle enheter, fra desktop til mobil."
                />
                <FeatureCard
                  icon={Zap}
                  title="AI Kunst"
                  description="Vi bruker AI-teknologi til å skape imponerende kunstverk som kan tilpasses og reflektere din merkevares unike stil og visuelle identitet."
                />
                <FeatureCard
                  icon={FileText}
                  title="Skreddersydd Innhold"
                  description="Vi utvikler unikt og engasjerende innhold som reflekterer din merkevare."
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Webutvikling
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Vi tenker fremtiden, derfor integrerer vi moderne løsninger i
                nettstedene dine for å støtte dine forretningsbehov. Fra AI
                Chatbots til bestillingsløsninger, vi har som mål å senke din
                belastning.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <FeatureCard
                  icon={Zap}
                  title="AI Chatbots/Assistenter"
                  description="Vi implementerer AI-drevne chatbots som forbedrer kundeservice og øker engasjement ved hjelp av ny teknologi."
                />
                <FeatureCard
                  icon={FileText}
                  title="Innholdshåndtering (CMS)"
                  description="Våre CMS-løsninger gjør det enkelt å administrere og oppdatere nettstedsinnholdet."
                />
                <FeatureCard
                  icon={Code}
                  title="Funksjon"
                  description="Vi sørger for ønsket funksjonalitet. Med fremtidsrettet tankesett kobler vi nettstedet ditt til andre verktøy og tjenester for å forbedre funksjonaliteten."
                />
                <FeatureCard
                  icon={Shield}
                  title="Sikkerhet og Personvern"
                  description="Vi prioriterer sikkerheten på nettstedet ditt ved å implementere avanserte sikkerhetstiltak for å beskytte mot trusler."
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/webutvikling.png"
                  width={550}
                  height={310}
                  alt="Webutvikling"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Optimalisering mot søkemonitorer
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Vi hjelper deg å forbedre din online synlighet gjennom avanserte
                SEO-strategier. Vi optimaliserer nettstedet ditt for å trekke
                til seg flere potensielle kunder.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/seo.png"
                  width={550}
                  height={310}
                  alt="SEO"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-4">
                <FeatureCard
                  icon={Laptop}
                  title="Teknisk SEO"
                  description="Vi optimaliserer nettstedsstrukturen, innhold og tekniske elementer for å forbedre søkemotorrangeringer."
                />
                <FeatureCard
                  icon={FileText}
                  title="Innholdsoptimalisering"
                  description="Vi skaper relevant og optimalisert innhold for å trekke til seg målgruppen din."
                />
                <FeatureCard
                  icon={Search}
                  title="Lokal SEO"
                  description="Vi hjelper deg å forbedre din lokale synlighet for å trekke til deg flere kunder i ditt område."
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
              Klar til å ta din nettside til neste nivå?
            </h2>
            <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl mb-8">
              La oss samarbeide om å skape en nettopplevelse som vil imponere
              dine kunder og drive din virksomhet fremover.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                Kontakt oss i dag
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
