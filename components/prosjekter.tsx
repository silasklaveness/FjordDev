import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type PortfolioItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
};

const PortfolioItem = ({
  title,
  description,
  imageUrl,
  websiteUrl,
}: PortfolioItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col justify-center space-y-4 mb-8 min-h-[400px]">
      {/* Added min-h-[400px] to ensure consistent size */}
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            key="iframe"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-25"
          >
            <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-lg">
              <button
                onClick={() => setIsExpanded(false)}
                className="h-10 w-[75px] absolute top-4 ml-2 bg-black text-white rounded-xl"
              >
                Lukk
              </button>
              <iframe
                src={websiteUrl}
                className="w-full h-[80vh] rounded-b-xl"
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="image"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative cursor-pointer"
            onClick={handleClick}
          >
            <Image
              src={imageUrl}
              alt={title}
              width={550}
              height={310}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Portfolio = () => (
  <section
    id="portfolio"
    className="px-0 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50"
  >
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Våre Prosjekter
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sjekk ut noen av våre siste webutviklingsprosjekter. Klikk på
            bildene for å teste nettsidene.😊
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-20">
        <PortfolioItem
          title="okBenzo Sandefjord frisør"
          description="En moderne og responsiv nettside for en ledende
                      frisørsalong.👑"
          imageUrl="/okbenzopc.png"
          websiteUrl="https://okbenzo.vercel.app/" // Replace with the actual URL
        />
        <PortfolioItem
          title="Ukjent"
          description="Ingen andre prosjekter å vise enn så lenge... Her vil muligens ditt prosjekt vises."
          imageUrl="/placeholder.svg"
          websiteUrl="https://www.oceanedge.no/kontakt" // Replace with the actual URL
        />
      </div>
    </div>
  </section>
);

export default Portfolio;
