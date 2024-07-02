"use client";
import { useState } from "react";

export default function Component() {
  return (
    <div className="container mx-auto max-w-3xl py-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Hvordan leverer vi tjenesten vår?
        </h1>
        <p className="mt-2 text-muted-foreground">
          Steg-for-steg prosess for å lage din nettside.
        </p>
      </div>
      <div className="grid gap-8">
        <Step
          stepNumber="1"
          title="Definer din ønskede nettside"
          description="Vi arrangerer et møte hvor du beskriver dine krav og mål for nettsiden, samt eventuelle medier som skal inkluderes."
          icon={<CheckIcon className="h-6 w-6 text-primary" />}
        />
        <Step
          stepNumber="2"
          title="Mottak av designutkast"
          description="Du mottar et designutkast av nettsiden, og vi diskuterer eventuelle justeringer som må gjøres."
          icon={<CheckIcon className="h-6 w-6 text-primary" />}
        />
        <Step
          stepNumber="3"
          title="Integrasjon av funksjonalitet"
          description="Når designet er godkjent, implementerer vi funksjonaliteten som nettsiden trenger."
          icon={<CircleIcon className="h-6 w-6 text-primary" />}
        />
        <Step
          stepNumber="4"
          title="Testing av nettsiden"
          description="Du får muligheten til å teste nettsiden og gi tilbakemelding før lansering."
          icon={<CircleIcon className="h-6 w-6 text-muted" />}
        />
        <Step
          stepNumber="5"
          title="Levering og hostingalternativer"
          description="Vi tilbyr to alternativer: enten kan vi hoste og vedlikeholde nettsiden for en pris basert på omfanget, eller vi kan levere filene og gi opplæring i hvordan du selv kan hoste nettsiden mot en engangssum."
          icon={<CircleIcon className="h-6 w-6 text-muted" />}
        />
      </div>
    </div>
  );
}

function Step({ stepNumber, title, description, icon }) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div>
        <h3 className="text-lg font-semibold">
          Steg {stepNumber}: {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
