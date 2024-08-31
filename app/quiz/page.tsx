"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PrisEstimator() {
  const [designComplexity, setDesignComplexity] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(5);
  const [ecommerce, setEcommerce] = useState(false);
  const [cms, setCms] = useState(false);
  const [seo, setSeo] = useState(false);

  const calculateCost = () => {
    let baseCost = 3000;
    baseCost += designComplexity * 700;
    baseCost += numberOfPages * 300;
    if (ecommerce) baseCost += 10000;
    if (cms) baseCost += 5000;
    if (seo) baseCost += 1500;
    return baseCost;
  };

  const totalCost = calculateCost();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 text-white p-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-2xl"
      >
        <Card className="bg-white/10 backdrop-blur-lg border-none shadow-2xl mt-[80px]">
          <CardHeader>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CardTitle className="text-3xl font-bold text-white">
                Nettside Kostnadskalkulator
              </CardTitle>
              <CardDescription className="text-gray-200 mt-2">
                Estimer kostnaden for en ny nettside basert på dine ønsker.
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="space-y-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="space-y-2">
                <Label
                  htmlFor="design-complexity"
                  className="text-gray-200 text-lg"
                >
                  Design kompleksitet
                </Label>
                <Slider
                  id="design-complexity"
                  min={1}
                  max={10}
                  step={1}
                  value={[designComplexity]}
                  onValueChange={(value) => setDesignComplexity(value[0])}
                  className="bg-white/20"
                />
                <p className="text-sm text-gray-300">
                  Nivå: {designComplexity}
                </p>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="number-of-pages"
                  className="text-gray-200 text-lg"
                >
                  Antall sider
                </Label>
                <Slider
                  id="number-of-pages"
                  min={1}
                  max={20}
                  step={1}
                  value={[numberOfPages]}
                  onValueChange={(value) => setNumberOfPages(value[0])}
                  className="bg-white/20"
                />
                <p className="text-sm text-gray-300">Antall: {numberOfPages}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Switch
                    id="ecommerce"
                    checked={ecommerce}
                    onCheckedChange={setEcommerce}
                  />
                  <Label htmlFor="ecommerce" className="text-gray-200">
                    E-commerce funksjonalitet
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Switch id="cms" checked={cms} onCheckedChange={setCms} />
                  <Label htmlFor="cms" className="text-gray-200">
                    Content Management System (CMS)
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Switch id="seo" checked={seo} onCheckedChange={setSeo} />
                  <Label htmlFor="seo" className="text-gray-200">
                    Search Engine Optimalisering (SEO)
                  </Label>
                </div>
              </div>
            </motion.div>
          </CardContent>
          <CardFooter>
            <motion.div
              className="w-full text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white">
                Estimert kostnad
              </h3>
              <motion.p
                className="text-5xl font-bold text-green-400 mt-2"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                {totalCost.toLocaleString()} KR
              </motion.p>
              <p className="text-sm text-gray-300 mt-4">
                Dette er et estimat og kan variere basert på spesifikke krav.
              </p>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
