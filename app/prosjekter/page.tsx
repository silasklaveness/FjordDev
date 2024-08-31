"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Prosjekter() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 mt-[80px]">
          Tidligere Prosjekter
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Sjekk ut noen av våre siste webutviklingsprosjekter. Klikk på bildene
          for å teste nettsidene. 😊
        </p>

        <div className="space-y-16">
          <ProjectCard
            title="okBenzo Sandefjord frisør"
            description="En moderne og responsiv nettside for en ledende frisørsalong. 👑"
            imageSrc="/okbenzopc.png"
            imageAlt="okBenzo Sandefjord frisør website screenshot"
          />

          {/* Add more ProjectCard components here for other projects */}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            className="bg-white text-black py-2 px-4 rounded-full flex items-center"
            onClick={() => window.open("https://okbenzo.no", "_blank")}
          >
            Se prosjekt
            <ArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
