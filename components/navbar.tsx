"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
    price: "",
    features: [""],
    url: "/quiz",
  },
  {
    title: "Hosting",
    price: "",
    features: [""],
    url: "/hostingvedlikehold",
  },
  {
    title: "Domene",
    price: "",
    features: [""],
    url: "/domene",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false); // State for pricing menu
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider md:text-black">
                    Priser
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="">
                      {pricingOptions.map((option, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <Link href={option.url}>
                              <div className="flex flex-col justify-between h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                                <div className="mb-4">
                                  <h3 className="text-xl font-semibold text-black">
                                    {option.title}
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
                  onClick={() => setIsPricingOpen((prev) => !prev)}
                >
                  Priser
                  <ChevronDown size={20} />
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
                              className="block px-3 py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              <h3 className="text-sm font-medium text-blue-100 underline">
                                {option.title}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {option.price}
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
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
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
