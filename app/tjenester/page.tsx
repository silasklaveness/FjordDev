import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester",
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="flex-1">
        <section className="bg-gray-950 w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Våre Web Utvikling Tjenester
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
                    Vi tilbyr en rekke web utvikling tjenester for å hjelpe din
                    bedrift å blomstre online. Fra design til optimalisering,
                    gir vi oss ikke før du er fornøyd med ditt prosjekt.
                  </p>
                </div>
              </div>
              <Image
                src="/tjenester.png"
                width="550"
                height="310"
                alt="Våre Tjenester"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full px-4 md:px-6 lg:px-10 py-12 md:py-24 lg:py-32 bg-gray-950 dark:bg-gray-800">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
                  Nettsidedesign
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Vi skaper visuelle og brukervennlige nettsider som fanger
                  oppmerksomheten til dine kunder. Ved å kombinere kreativitet
                  og teknologi er målet å levere førsteklasses resultater.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/webutvikling.png"
                width="550"
                height="310"
                alt="Nettsidedesign"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-100">
                        Brukervennlig Design
                      </h3>
                      <p className="text-gray-400 dark:text-gray-400">
                        Vi fokuserer på å skape nettsider som er enkle å
                        navigere og gir en positiv brukeropplevelse.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-100">
                        Responsivt Design
                      </h3>
                      <p className="text-gray-400 dark:text-gray-400">
                        Våre nettsider er optimalisert for alle enheter, fra
                        desktop til mobil.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-100">
                        AI Kunst
                      </h3>
                      <p className="text-gray-400 dark:text-gray-400">
                        Vi bruker AI-teknologi til å skape imponerende kunstverk
                        som kan tilpasses og reflektere din merkevares unike
                        stil og visuelle identitet.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-100">
                        Skreddersydd Innhold
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vi utvikler unikt og engasjerende innhold som
                        reflekterer din merkevare.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Webutvikling
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Vi tenker fremtiden, derfor integrerer vi moderne løsninger i
                  nettstedene dine for å støtte dine forretningsbehov. Fra AI
                  Chatbots til bestillingsløsninger, vi har som mål å senke din
                  belastning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        AI Chatbots/Assistenter
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vi implementerer AI-drevne chatbots som forbedrer
                        kundeservice og øker engasjement ved hjelp av ny
                        teknologi.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Innholdshåndtering (CMS)
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Våre CMS-løsninger gjør det enkelt å administrere og
                        oppdatere nettstedsinnholdet.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Funksjon</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vi sørger for ønsket funksjonalitet. Med fremtidsrettet
                        tankesett kobler vi nettstedet ditt til andre verktøy og
                        tjenester for å forbedre funksjonaliteten.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Sikkerhet og Personvern
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vi prioriterer sikkerheten på nettstedet ditt ved å
                        implementere avanserte sikkerhetstiltak for å beskytte
                        mot trusler. Vårt fokus på personvern sikrer at dine
                        data og dine kunders data er trygge og i samsvar med
                        gjeldende lover og forskrifter.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Webutvikling"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Optimalisering mot søkemonitorer
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Vi hjelper deg å forbedre din online synlighet gjennom
                  avanserte SEO-strategier. Vi optimaliserer nettstedet ditt for
                  å trekke til seg flere potensielle kunder.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/seo.png"
                width="550"
                height="310"
                alt="SEO"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Teknisk SEO</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vi optimaliserer nettstedsstrukturen, innhold og
                        tekniske elementer for å forbedre søkemotorrangeringer.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Innholdsoptimalisering
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vi skaper relevant og optimalisert innhold for å trekke
                        til seg målgruppen din.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Lokal SEO</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vi hjelper deg å forbedre din lokale synlighet for å
                        trekke til deg flere kunder i ditt område.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
