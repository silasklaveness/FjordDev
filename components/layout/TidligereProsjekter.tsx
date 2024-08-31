"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Define the structure of the project object
interface Project {
  id: number;
  image: string;
  title: string;
  link: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    image: "/okbenzopc.png",
    title: "Projekt for frisør",
    link: "/tjenester",
  },
  {
    id: 2,
    image: "/okbenzopc.png",
    title: "Projekt for frisør",
    link: "/tjenester",
  },
  {
    id: 3,
    image: "/okbenzopc.png",
    title: "Projekt for frisør",
    link: "/tjenester",
  },
  {
    id: 4,
    image: "/okbenzopc.png",
    title: "Projekt for frisør",
    link: "/tjenester",
  },
];

export default function TidligereProsjekter() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const startTimer = () => {
      timeoutRef.current = setTimeout(nextProject, 5000);
    };

    startTimer();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      prevProject();
    } else if (info.offset.x < -100) {
      nextProject();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-black text-gray-50">
      <div className="container px-4 md:px-6 max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
            Tidligere Prosjekter
          </h2>
          <p className="max-w-[900px] text-gray-400 text-sm md:text-base lg:text-lg">
            Utforsk våre siste webutviklingsprosjekter i vår interaktive
            karusell.
          </p>
        </div>
        <div
          className="mt-6 md:mt-8 relative w-full"
          style={{ aspectRatio: "16/9" }}
        >
          <motion.div
            className="w-full h-full overflow-hidden touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
              >
                <Link
                  href={projects[currentIndex].link}
                  className="block w-full h-full relative group"
                >
                  <div className="w-full h-full relative overflow-hidden rounded-lg">
                    <Image
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg md:text-xl lg:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {projects[currentIndex].title}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <Button
            onClick={prevProject}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300"
            size="icon"
            variant="outline"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous project</span>
          </Button>
          <Button
            onClick={nextProject}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300"
            size="icon"
            variant="outline"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next project</span>
          </Button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              size="sm"
              variant={index === currentIndex ? "default" : "outline"}
              className="w-2 h-2 rounded-full p-0"
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
