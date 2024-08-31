"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const links = [
  { url: "/", title: "Hjem" },
  { url: "/omoss", title: "Om Oss" },
  { url: "/tjenester", title: "Tjenester" },
  { url: "/prosjekter", title: "Prosjekter" },
  { url: "/kontakt", title: "Kontakt" },
];

const pricingOptions = [
  {
    title: "Priskalkulator",
    description: "Beregn kostnad for ditt prosjekt",
    icon: "💰",
    url: "/quiz",
  },
  {
    title: "Hosting",
    description: "Sikker og rask hosting for din nettside",
    icon: "🚀",
    url: "/hostingvedlikehold",
  },
  {
    title: "Domene",
    description: "Registrer ditt unike domenenavn",
    icon: "🌐",
    url: "/domene",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togglePricing = () => {
    if (isMobile) {
      setIsPricingOpen(!isPricingOpen);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link className="flex items-center space-x-2" href="/">
            <Image src="/logo.png" alt="logo" width={55} height={55} />
            <span className="text-2xl font-bold text-white">OceanEdge</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {link.title}
              </Link>
            ))}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsPricingOpen(true)}
              onMouseLeave={() => setIsPricingOpen(false)}
            >
              <button className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider flex items-center">
                Priser
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {isPricingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
                    style={{
                      maxHeight: "calc(100vh - 100px)",
                      overflowY: "auto",
                    }}
                  >
                    {pricingOptions.map((option, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={option.url}>
                          <div className="p-4 hover:bg-gray-100 transition-colors duration-200">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                              <span className="mr-2 text-2xl">
                                {option.icon}
                              </span>
                              {option.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {option.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="text-white hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <div className="relative">
                <button
                  className="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                  onClick={togglePricing}
                >
                  Priser
                  {isPricingOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                <AnimatePresence>
                  {isPricingOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-2"
                    >
                      <div className="space-y-2">
                        {pricingOptions.map((option, index) => (
                          <Link key={index} href={option.url}>
                            <div
                              className="block px-3 py-2 hover:bg-gray-800"
                              onClick={() => setIsOpen(false)}
                            >
                              <h3 className="text-sm font-medium text-blue-100 flex items-center">
                                <span className="mr-2">{option.icon}</span>
                                {option.title}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {option.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex space-x-4 justify-center mt-4">
                <a
                  href="https://www.facebook.com/people/OceanEdge-Development/61561210144553/?sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/oceanedge_dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-500"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-500"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
