"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white py-16 md:py-24 lg:py-32 md:mx-auto md:px-[60px]">
      {/* Dynamic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mt-8 md:mt-0">
              Vi bygger din{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                digitale suksesshistorie
              </span>
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl">
              Transformerer ideer til imponerende nettsider. La oss skape din
              unike digitale tilstedeværelse sammen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative inline-flex h-12 md:h-16 md:w-56 items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-500 to-blue-500 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500">
                Utforsk våre tjenester
              </button>
              <Link href="/omoss" passHref>
                <button className="relative inline-flex h-12 md:h-16 md:w-56 items-center justify-center rounded-md border border-gray-200 bg-black px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-950">
                  Finn ut mer
                </button>
              </Link>
            </div>

            {/* Animated features */}
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  {["Responsivt design", "SEO-optimalisert", "Rask ytelse"].map(
                    (feature, index) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                      >
                        {feature}
                      </motion.span>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-30" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/bildeforside.jpg"
                width={550}
                height={550}
                alt="Moderne nettside design"
                layout="responsive"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
