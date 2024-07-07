"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "@/components/fjorddevbot"; // Adjust the import path as needed
import { motion } from "framer-motion";
import Button2 from "@/components/ui/button2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Kart from "@/components/kart";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.3 } },
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop, showScroll]);

  return (
    <div className="h-full">
      <div className="flex flex-col min-h-[100dvh]">
        {showModal && <Modal handleClose={toggleModal} />}
        <main className="flex-1">
          <motion.section
            id="hero"
            className="bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container px-4 md:px-6 md:mx-6 lg:mx-10">
              <motion.div
                className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                    variants={fadeInUp}
                  >
                    Løft Din Digitale Tilstedeværelse
                  </motion.h1>

                  <motion.p
                    className="text-gray-400 md:text-xl"
                    variants={fadeInUp}
                  >
                    Frigjør kraften i moderne webutvikling med våre tjenester.
                  </motion.p>
                  <motion.div
                    className="flex flex-col gap-2 min-[400px]:flex-row"
                    variants={fadeInUp}
                  >
                    <Button2 />
                    <Link
                      href="/omoss"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Finn ut mer
                    </Link>

                    <button
                      onClick={toggleModal}
                      className="hidden h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                      BOT
                    </button>
                  </motion.div>
                </div>
                <motion.div variants={fadeInUp}>
                  <Image
                    src="/hjembilde.png"
                    width="550"
                    height="550"
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="services"
            className="bg-gray-100 dark:bg-gray-800 text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="mw-auto mh-auto p-8 bg-gray-950 shadow-lg">
              <h1 className="text-3xl font-extrabold text-center mb-12 text-white">
                Våre Tjenester
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center p-6 bg-black border border-white shadow-lg hover:bg-gray-800 transition-colors duration-300">
                  <DribbbleIcon className="mx-auto mb-4 w-20 h-20 text-white" />
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white ">
                    Nettsidedesign
                  </h2>
                  <p className="mb-4 text-white">
                    Skape visuelt imponerende og brukervennlige nettsteder.
                  </p>
                </div>
                <div className="text-center p-6 bg-black border border-white rounded-lg shadow-md transition-colors duration-300 ">
                  <WebhookIcon className="mx-auto mb-4 w-20 h-20 text-white" />
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                    Webutvikling
                  </h2>
                  <p className="mb-4 text-white">
                    Integrasjon av moderne løsninger i din nettside for å hjelpe
                    din virksomhet.
                  </p>
                </div>
                <div className="text-center p-6 bg-black border border-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300">
                  <SearchCodeIcon className="mx-auto mb-4 w-20 h-20 text-white" />
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                    SEO Optimalisering
                  </h2>
                  <p className="mb-4 text-white">
                    Forbedre din nettsides synlighet og rangering i søkemotorer
                    for å tiltrekke flere besøkende.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            id="portfolio"
            className="py-12 md:py-24 lg:py-32 bg-black text-gray-50"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container px-4 md:px-6 md:mx-10 lg:mx-24">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center"
                variants={fadeInUp}
              >
                <div className="space-y-2">
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    variants={fadeInUp}
                  >
                    Tidligere Prosjekter
                  </motion.h2>
                  <motion.p
                    className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    variants={fadeInUp}
                  >
                    Sjekk ut noen av våre siste webutviklingsprosjekter.
                  </motion.p>
                </div>
              </motion.div>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="max-w-5xl mx-auto"
              >
                <SwiperSlide>
                  <motion.div
                    className="grid lg:grid-cols-2 gap-6 py-12 lg:gap-12"
                    variants={fadeInUp}
                  >
                    <Image
                      src="/okbenzopc.png"
                      width="550"
                      height="310"
                      alt="Portfolio"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="grid gap-4">
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">
                            okBenzo Frisør Sandefjord
                          </h3>
                          <p className="text-gray-400">
                            En moderne og responsiv nettside for en ledende
                            frisørsalong.👑
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div
                    className="grid lg:grid-cols-2 gap-6 py-12 lg:gap-12"
                    variants={fadeInUp}
                  >
                    <Image
                      src="/okbenzopc.png"
                      width="550"
                      height="310"
                      alt="Portfolio"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="grid gap-4">
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">
                            Ikke noen flere prosjekter enn så lenge.
                          </h3>
                          <p className="text-gray-400">😊</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
              <motion.div
                className="flex justify-center mt-8"
                variants={fadeInUp}
              >
                <Link href="/prosjekter" prefetch={false}>
                  <span className="inline-flex items-center justify-center rounded-md bg-gray-50 px-8 py-3 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                    Se Alle Prosjekter
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="about"
            className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32 text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4"
                variants={fadeInUp}
              >
                <div className="space-y-2">
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    variants={fadeInUp}
                  >
                    Om Oss
                  </motion.h2>
                  <motion.p
                    className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                    variants={fadeInUp}
                  >
                    Oceanedge er en nyutviklet og foreløpig lokal
                    teknologibedrift som spesialiserer seg på å levere
                    innovative nettsideløsninger.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
                variants={fadeInUp}
              >
                <div className="h-64 lg:h-[450px] lg:w-[500px] rounded-lg overflow-hidden shadow-md">
                  <Kart />
                </div>
                <motion.div
                  className="flex flex-col justify-center space-y-4 mx-auto lg:mx-0"
                  variants={fadeInUp}
                >
                  <div className="grid gap-4">
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Vår visjon</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Styrke bedrifter med innovative nettsider.
                      </p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Våre verdier</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Innovasjon, Samarbeid og en forpliktelse til
                        fortreffelighet i alt vi gjør.
                      </p>
                    </motion.div>
                    <motion.div className="grid gap-1" variants={fadeInUp}>
                      <h3 className="text-xl font-bold">Oss</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Engasjerte webutviklere som kontinuerlig holder seg
                        oppdatert på de nyeste teknologiene og metodene.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <Link href="/omoss" prefetch={false}>
              <span className="inline-flex items-center justify-center rounded-md bg-gray-50 px-8 py-3 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                Les mer
              </span>
            </Link>
          </motion.section>
        </main>
        <button
          className={`fixed bottom-5 right-5 z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 ${
            showScroll ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
}

function DribbbleIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

function SearchCodeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m13 13.5 2-2.5-2-2.5" />
      <path d="m21 21-4.3-4.3" />
      <path d="M9 8.5 7 11l2 2.5" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  );
}

function WebhookIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
