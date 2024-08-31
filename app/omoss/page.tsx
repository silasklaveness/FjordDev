"use client";
import Image from "next/image";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Kart from "@/components/kart";

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <section className="w-full px-4 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-6"
            >
              <h1 className="pt-[80px] text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Om OceanEdge
              </h1>
              <p className="text-xl text-gray-300">
                Oceanedge er en nyutviklet teknologibedrift som spesialiserer
                seg på å levere innovative nettsideløsninger til bedrifter av
                alle størrelser. Vår misjon er å styrke våre kunder med
                verktøyene og ressursene de trenger for å lykkes digitalt.
              </p>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">
                    Kontakt Oss
                  </h2>
                  <p className="text-gray-300">Adresse: Sandefjord</p>
                  <p className="text-gray-300">Telefon: +47 45786703</p>
                  <p className="text-gray-300">E-post: kontakt@oceanedge.no</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[250px] md:h-[450px] w-full rounded-lg overflow-hidden shadow-2xl"
            >
              <Kart />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-12 lg:px-20 py-20 md:py-32 bg-gray-800">
        <div className="container mx-auto flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-blue-500 px-4 py-1.5 text-sm font-medium"
          >
            Vår visjon
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Styrke Bedrifter Med Innovative Nettsider
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl text-xl text-gray-300"
          >
            Hos OceanEdge er vi drevet av en lidenskap for teknologi og et
            engasjement for å hjelpe bedrifter å blomstre i den digitale
            tidsalderen. Vår misjon er å utvikle toppmoderne nettsideløsninger
            som effektiviserer driften, øker produktiviteten og fremmer
            innovasjon for våre kunder.
          </motion.p>
        </div>
      </section>

      <section className="w-full px-4 md:px-12 lg:px-20 py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto flex flex-col items-center text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Veiledende Prinsipper Som Definerer Vår Kultur
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: RocketIcon,
                title: "Innovasjon",
                description:
                  "Innovasjon handler om å skape nye løsninger. Målet er å leverer unike nettsider med avansert teknologi for å gi våre kunder et konkurransefortrinn.",
              },
              {
                icon: UsersIcon,
                title: "Samarbeid",
                description:
                  "Vi tror på kraften i teamarbeid og fremmer en kultur med åpen kommunikasjon og gjensidig støtte.",
              },
              {
                icon: BoltIcon,
                title: "Fortreffelighet",
                description:
                  "Vi er forpliktet til å levere eksepsjonelle resultater og kontinuerlig forbedre våre produkter og tjenester.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                  <CardContent className="p-6 flex flex-col items-center space-y-4">
                    <item.icon className="w-12 h-12 text-blue-400" />
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-12 lg:px-20 py-20 md:py-32 bg-gray-800">
        <div className="container mx-auto flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-blue-500 px-4 py-1.5 text-sm font-medium"
          >
            Vårt team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Møt personene bak OceanEdge
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center space-y-4">
                    <Image
                      src={member.image}
                      width={120}
                      height={120}
                      alt={member.name}
                      className="rounded-full border-4 border-blue-500"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {member.description}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
