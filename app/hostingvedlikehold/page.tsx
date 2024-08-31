"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, ShieldCheckIcon, ZapIcon, RocketIcon } from "lucide-react";

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
    });
  }, [controls]);

  const plans = [
    {
      title: "Standard",
      price: "300-600kr",
      color: "yellow",
      features: [
        "Garanti for oppetid",
        "Automatiske Oppdateringer",
        "Brannmur og DDoS-beskyttelse",
        "Månedlig sikkerhetskopier",
        "Grunnleggende SEO-oppsett",
        "Teknisk support",
      ],
      icon: ShieldCheckIcon,
    },
    {
      title: "Premium",
      price: "999-1500kr",
      color: "pink",
      features: [
        "Alt i Standard-pakken",
        "Ubegrenset båndbredde",
        "Avansert sikkerhetsovervåkning",
        "Ukentlige sikkerhetskopier",
        "Prioritert teknisk support",
        "Ytelsesoptimalisering",
      ],
      icon: ZapIcon,
    },
    {
      title: "Platinum",
      price: "2000-4000kr",
      color: "teal",
      features: [
        "Alt i Premium-pakken",
        "Dedikert server",
        "24/7 overvåkning og support",
        "Tilpassede sikkerhetsløsninger",
        "Månedlige rapporter og analyser",
        "Fullstendig nettsideadministrasjon",
      ],
      icon: RocketIcon,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-32 pt-[80px]">
      <div className="absolute inset-0 z-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="water" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#2a2a2a" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,64 C150,192 350,0 500,64 C650,128 750,192 1000,128 L1000,320 L0,320 Z"
            fill="url(#water)"
            animate={controls}
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Hosting & Vedlikehold
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
              onHoverStart={() => setHoveredCard(plan.title)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card
                className={`bg-gray-900 border-2 border-${
                  plan.color
                }-500 overflow-hidden transition-all duration-300 ${
                  hoveredCard === plan.title ? "scale-105 shadow-2xl" : ""
                }`}
              >
                <CardHeader
                  className={`text-center bg-${plan.color}-500 bg-opacity-20 py-6`}
                >
                  <CardTitle className="text-white text-2xl flex items-center justify-center gap-2">
                    <plan.icon className="w-6 h-6" />
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                  </div>
                  <div className="text-xl text-gray-400 mb-6">Måned</div>
                  <ul className="space-y-3 text-gray-300">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (i + 1), duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <CheckIcon
                          className={`w-5 h-5 text-${plan.color}-500`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button
                    className={`bg-${plan.color}-500 text-black hover:bg-${plan.color}-600 transition-colors duration-300`}
                  >
                    Kontakt oss
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
