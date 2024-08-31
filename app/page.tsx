"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-up";
import TidligereProsjekter from "@/components/layout/TidligereProsjekter";
import Modal from "@/components/fjorddevbot";
import Tjenestekort from "@/components/layout/TjenesteKort";
import IntroduksjonsSide from "@/components/layout/IntroduksjonsSide";
import { Card, CardContent } from "@/components/ui/card";

// Dynamically import components to improve initial load performance

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Memoize the toggleModal function to prevent unnecessary re-renders
  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  return (
    <div className="h-full">
      <div className="relative z-[300]">
        <ScrollToTop showUnder={160}>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </ScrollToTop>
      </div>

      {showModal && <Modal handleClose={toggleModal} />}
      <main className="flex-1">
        <IntroduksjonsSide />

        <section id="services" className="text-center">
          <div className="bg-black text-white py-16">
            <div className="container mx-auto text-center">
              <Tjenestekort />
            </div>
          </div>
        </section>
        <section id="services" className="bg-black text-center">
          <div className="h-full w-full md:h-2/3 md:w-2/3 mx-auto">
            <TidligereProsjekter />
          </div>
        </section>

        <section
          id="about"
          className="bg-gradient-to-b from-gray-900 to-black text-white py-20 md:py-32"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Om Oss
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-300">
                Oceanedge er et nystartet, lokalt teknologiselskap som
                spesialiserer seg på å levere nettsider som både effektiviserer
                og tiltrekker kunder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Møt personene bak OceanEdge
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Silas Kaae Klaveness",
                  role: "Daglig leder, Nettsideutvikler",
                  image: "/silas1.png",
                  description:
                    "Silas er grunnleggeren og utvikleren for Oceanedge. Han kombinerer sin lidenskap for IT med militær disiplin og samarbeidsevner. Hans erfaring med lover og forskrifter sikrer profesjonelle og pålitelige nettsideløsninger for bedrifter.",
                  email: "silas@oceanedge.no",
                },
                {
                  name: "Ruben Fuglset",
                  role: "Salgs- og Kundeservicerepresentant",
                  image: "/ruben1.png",
                  description:
                    "Ruben har omfattende erfaring innen salg og kundeservice, med sterke kommunikasjonsevner. Han utmerker seg i å bygge kundeforhold og levere løsninger som overgår forventningene, noe som bidrar til økt kundelojalitet og selskapets vekst.",
                  email: "ruben@oceanedge.no",
                },
                {
                  name: "Kristoffer Halden",
                  role: "Markedsførings- og medieansvarlig",
                  image: "/krisstoffer.png",
                  description:
                    "Kristoffer har omfattende erfaring innen digital markedsføring gjennom Facebook og Instagram. Han har hatt suksess med egen dropshipping-nettside. Kristoffer utvikler strategier som tiltrekker nye kunder og øker bedriftens synlighet online, noe som bidrar til selskapets vekst.",
                  email: "kriss@oceanedge.no",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <div className="relative w-32 h-32 mb-4">
                        <Image
                          src={member.image}
                          layout="fill"
                          objectFit="cover"
                          alt={member.name}
                          className="rounded-full border-4 border-blue-500"
                        />
                      </div>
                      <div className="space-y-2 text-center">
                        <h4 className="text-2xl font-bold text-white">
                          {member.name}
                        </h4>
                        <p className="text-blue-400 font-medium">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm text-center">
                        {member.description}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                      >
                        Kontakt {member.name.split(" ")[0]}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
