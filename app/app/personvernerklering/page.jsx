export default function Component() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Personvernerklæring</h1>
          <p className="mt-2 text-muted-foreground">
            Denne personvernerklæringen forklarer hvordan vi behandler og
            beskytter dine personopplysninger.
          </p>
        </div>
        <div className="grid gap-6">
          <div>
            <h2 className="text-xl font-semibold">Datainnsamling</h2>
            <p className="mt-2 text-muted-foreground">
              Vi samler inn personopplysninger som navn, e-postadresse og annen
              informasjon du oppgir når du bruker våre tjenester eller kontakter
              oss.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Bruk av informasjon</h2>
            <p className="mt-2 text-muted-foreground">
              Vi bruker dine personopplysninger for å levere og forbedre våre
              tjenester, kommunisere med deg og overholde lovkrav.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Deling med tredjepart</h2>
            <p className="mt-2 text-muted-foreground">
              Ved behov deler vi dine personopplysninger med tredjeparts
              tjenesteleverandører som hjelper oss med å levere våre tjenester.
              Vi deler ikke informasjon med andre uten ditt samtykke, med mindre
              det er påkrevd i henhold til lov.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Rettigheter til innsyn og sletting
            </h2>
            <p className="mt-2 text-muted-foreground">
              Du har rett til å be om innsyn i, retting av og sletting av dine
              personopplysninger. Ta kontakt med oss hvis du ønsker å utøve
              disse rettighetene.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Sikkerhetstiltak</h2>
            <p className="mt-2 text-muted-foreground">
              Vi har iverksatt tekniske, administrative og fysiske
              sikkerhetstiltak for å beskytte dine personopplysninger mot
              uautorisert tilgang, bruk eller avsløring.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Dataoverføringer utenfor EØS
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hvis vi overfører personopplysninger utenfor EØS, sikrer vi at
              nødvendige beskyttelsestiltak er på plass for å beskytte dine data
              i samsvar med GDPR.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Barns personvern</h2>
            <p className="mt-2 text-muted-foreground">
              Våre tjenester er ikke rettet mot barn under 16 år, og vi samler
              ikke bevisst inn personopplysninger fra barn uten foreldres
              samtykke.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Kontakt oss</h2>
            <p className="mt-2 text-muted-foreground">
              Hvis du har spørsmål eller bekymringer knyttet til vår behandling
              av personopplysninger, ta gjerne kontakt med oss på
              <a
                href="mailto:development@oceanedge.no"
                className="text-blue-600 underline"
              >
                {" "}
                development@oceanedge.no
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
