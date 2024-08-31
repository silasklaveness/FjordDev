"use client";
import Image from "next/image";
import { Metadata } from "next";
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
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-gray-900 to-gray-800 text-white w-full px-4 md:px-12 lg:px-20 ">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
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
                <Button
                  onClick={() => {
                    scrollTo(500, 500);
                  }}
                  className="w-fit bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                >
                  Utforsk Våre Tjenester
                </Button>
              </div>
              <Image
                src="/tjenester.png"
                width={550}
                height={310}
                alt="Våre Tjenester"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 lg:px-10 py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Nettsidedesign
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Vi skaper visuelle og brukervennlige nettsider som fanger
                oppmerksomheten til dine kunder. Ved å kombinere kreativitet og
                teknologi er målet å levere førsteklasses resultater.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/webutvikling.png"
                width={550}
                height={310}
                alt="Nettsidedesign"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
              />
              <div className="flex flex-col justify-center space-y-4">
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Palette className="w-6 h-6 mr-2" />
                      Brukervennlig Design
                    </h3>
                    <p className="text-gray-300">
                      Vi fokuserer på å skape nettsider som er enkle å navigere
                      og gir en positiv brukeropplevelse.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Smartphone className="w-6 h-6 mr-2" />
                      Responsivt Design
                    </h3>
                    <p className="text-gray-300">
                      Våre nettsider er optimalisert for alle enheter, fra
                      desktop til mobil.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Zap className="w-6 h-6 mr-2" />
                      AI Kunst
                    </h3>
                    <p className="text-gray-300">
                      Vi bruker AI-teknologi til å skape imponerende kunstverk
                      som kan tilpasses og reflektere din merkevares unike stil
                      og visuelle identitet.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <FileText className="w-6 h-6 mr-2" />
                      Skreddersydd Innhold
                    </h3>
                    <p className="text-gray-300">
                      Vi utvikler unikt og engasjerende innhold som reflekterer
                      din merkevare.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Webutvikling
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Vi tenker fremtiden, derfor integrerer vi moderne løsninger i
                nettstedene dine for å støtte dine forretningsbehov. Fra AI
                Chatbots til bestillingsløsninger, vi har som mål å senke din
                belastning.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Zap className="w-6 h-6 mr-2" />
                      AI Chatbots/Assistenter
                    </h3>
                    <p className="text-gray-300">
                      Vi implementerer AI-drevne chatbots som forbedrer
                      kundeservice og øker engasjement ved hjelp av ny
                      teknologi.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <FileText className="w-6 h-6 mr-2" />
                      Innholdshåndtering (CMS)
                    </h3>
                    <p className="text-gray-300">
                      Våre CMS-løsninger gjør det enkelt å administrere og
                      oppdatere nettstedsinnholdet.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Code className="w-6 h-6 mr-2" />
                      Funksjon
                    </h3>
                    <p className="text-gray-300">
                      Vi sørger for ønsket funksjonalitet. Med fremtidsrettet
                      tankesett kobler vi nettstedet ditt til andre verktøy og
                      tjenester for å forbedre funksjonaliteten.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Shield className="w-6 h-6 mr-2" />
                      Sikkerhet og Personvern
                    </h3>
                    <p className="text-gray-300">
                      Vi prioriterer sikkerheten på nettstedet ditt ved å
                      implementere avanserte sikkerhetstiltak for å beskytte mot
                      trusler. Vårt fokus på personvern sikrer at dine data og
                      dine kunders data er trygge og i samsvar med gjeldende
                      lover og forskrifter.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Optimalisering mot søkemonitorer
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Vi hjelper deg å forbedre din online synlighet gjennom avanserte
                SEO-strategier. Vi optimaliserer nettstedet ditt for å trekke
                til seg flere potensielle kunder.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/seo.png"
                width={550}
                height={310}
                alt="SEO"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
              />
              <div className="flex flex-col justify-center space-y-4">
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Laptop className="w-6 h-6 mr-2" />
                      Teknisk SEO
                    </h3>
                    <p className="text-gray-300">
                      Vi optimaliserer nettstedsstrukturen, innhold og tekniske
                      elementer for å forbedre søkemotorrangeringer.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <FileText className="w-6 h-6 mr-2" />
                      Innholdsoptimalisering
                    </h3>
                    <p className="text-gray-300">
                      Vi skaper relevant og optimalisert innhold for å trekke
                      til seg målgruppen din.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400 flex items-center mb-2">
                      <Search className="w-6 h-6 mr-2" />
                      Lokal SEO
                    </h3>
                    <p className="text-gray-300">
                      Vi hjelper deg å forbedre din lokale synlighet for å
                      trekke til deg flere kunder i ditt område.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
