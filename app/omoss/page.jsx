import Image from "next/image";
import Kart from "@/components/kart";

export default function Component() {
  return (
    <div className="dark:bg-muted dark:text-muted-foreground">
      <section className="w-full px-0 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
                  Om OceanEdge
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Oceanedge er en nyutviklet teknologibedrift som spesialiserer
                  seg på å levere innovative nettsideløsninger til bedrifter av
                  alle størrelser. Vår misjon er å styrke våre kunder med
                  verktøyene og ressursene de trenger for å lykkes digitalt.
                </p>
              </div>
              <Image
                src="/test.gif"
                alt="Description of GIF"
                width={200}
                height={200}
              ></Image>
              <div className="space-y-2 mt-4">
                <h2 className="text-xl font-bold">Kontakt Oss</h2>
                <p className="text-muted-foreground">Adresse: Sandefjord</p>
                <p className="text-muted-foreground">Telefon: +47 45786703</p>
                <p className="text-muted-foreground">
                  E-post: kontakt@oceanedge.no
                </p>
              </div>
            </div>
            <div className="h-64 lg:h-[450px] lg:w-[500px] rounded-lg overflow-hidden shadow-md">
              <Kart />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-0 md:px-12 lg:px-20 py-20 md:py-32 bg-white">
        <div className="container flex flex-col items-center text-center space-y-6">
          <div className="md:px-10 lg:px-25 inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-primary dark:text-primary-foreground">
            Vår visjon
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Styrke Bedrifter Med Innovative Nettsider
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground dark:text-muted-foreground">
            Hos OceanEdge er vi drevet av en lidenskap for teknologi og et
            engasjement for å hjelpe bedrifter å blomstre i den digitale
            tidsalderen. Vår misjon er å utvikle toppmoderne nettsideløsninger
            som effektiviserer driften, øker produktiviteten og fremmer
            innovasjon for våre kunder.
          </p>
        </div>
      </section>
      <section className="w-full px-0 md:px-12 lg:px-20 py-20 md:py-32 bg-gray-950 text-white">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Veiledende Prinsipper Som Definerer Vår Kultur
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-4">
              <RocketIcon className="w-12 h-12" />
              <h3 className="text-xl font-bold">Innovasjon</h3>
              <p className="text-muted-foreground">
                Innovasjon handler om å skape nye løsninger. Målet er å leverer
                unike nettsider med avansert teknologi for å gi våre kunder et
                konkurransefortrinn.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <UsersIcon className="w-12 h-12" />
              <h3 className="text-xl font-bold">Samarbeid</h3>
              <p className="text-muted-foreground">
                Vi tror på kraften i teamarbeid og fremmer en kultur med åpen
                kommunikasjon og gjensidig støtte.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <BoltIcon className="w-12 h-12" />
              <h3 className="text-xl font-bold">Fortreffelighet</h3>
              <p className="text-muted-foreground">
                Vi er forpliktet til å levere eksepsjonelle resultater og
                kontinuerlig forbedre våre produkter og tjenester.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-0 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-primary dark:text-primary-foreground">
            Vårt team
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Møt personene bak OceanEdge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/silas1.png"
                width="120"
                height="120"
                alt="Silas Kaae Klaveness"
                className="rounded-full"
                loading="lazy"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Silas Kaae Klaveness</h3>
                <p className="fond-bold text-muted-foreground">
                  Daglig leder, Nettsideutvikler
                </p>
              </div>
              <p className="text-muted-foreground">
                Silas er grunnleggeren og utvikleren for Oceanedge. Han
                kombinerer sin lidenskap for IT med militær disiplin og
                samarbeidsevner. Hans erfaring med lover og forskrifter sikrer
                profesjonelle og pålitelige nettsideløsninger for bedrifter.
              </p>
              <p className="text-muted-foreground">
                Kontakt:{" "}
                <a
                  href="mailto:silas@oceanedge.no"
                  className="text-blue-600 underline"
                >
                  silas@oceanedge.no
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/ruben1.png"
                width="120"
                height="120"
                alt="Ruben Fuglset"
                className="rounded-full"
                loading="lazy"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Ruben Fuglset</h3>
                <p className="text-muted-foreground">
                  Salgs- og Kundeservicerepresentant
                </p>
              </div>
              <p className="text-muted-foreground">
                Ruben har omfattende erfaring innen salg og kundeservice, med
                sterke kommunikasjonsevner. Han utmerker seg i å bygge
                kundeforhold og levere løsninger som overgår forventningene, noe
                som bidrar til økt kundelojalitet og selskapets vekst.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/krisstoffer.png"
                width="120"
                height="120"
                alt="Kristoffer Halden"
                className="rounded-full"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Kristoffer Halden</h3>
                <p className="text-muted-foreground">
                  Markedsførings- og medieansvarlig
                </p>
              </div>
              <p className="text-muted-foreground">
                Kristoffer har omfattende erfaring innen digital markedsføring
                gjennom Facebook og Instagram. Han har hatt suksess med egen
                dropshipping-nettside. Kristoffer utvikler strategier som
                tiltrekker nye kunder og øker bedriftens synlighet online, noe
                som bidrar til selskapets vekst.
              </p>
              <p className="text-muted-foreground">
                Kontakt:{" "}
                <a
                  href="mailto:kriss@oceanedge.no"
                  className="text-blue-600 underline"
                >
                  kriss@oceanedge.no
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BoltIcon(props) {
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

function RocketIcon(props) {
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

function UsersIcon(props) {
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
