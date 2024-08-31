"use client";

import { useState } from "react";
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

export default function Component() {
  const [designComplexity, setDesignComplexity] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(5);
  const [ecommerce, setEcommerce] = useState(false);
  const [cms, setCms] = useState(false);
  const [seo, setSeo] = useState(false);

  const calculateCost = () => {
    let baseCost = 5000;
    baseCost += designComplexity * 1000;
    baseCost += numberOfPages * 500;
    if (ecommerce) baseCost += 10000;
    if (cms) baseCost += 5000;
    if (seo) baseCost += 3000;
    return baseCost;
  };

  const totalCost = calculateCost();

  return (
    <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-gray-900 border-gray-800 mt-[80px] md:mt-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white ">
              Nettside kostnadskalkulator
            </CardTitle>
            <CardDescription className="text-gray-400">
              Estimer kostnaden for en ny nestside basert på dine ønsker.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="design-complexity" className="text-gray-200">
                Design komplisitet (1-10)
              </Label>
              <Slider
                id="design-complexity"
                min={1}
                max={10}
                step={1}
                value={[designComplexity]}
                onValueChange={(value) => setDesignComplexity(value[0])}
                className="bg-gray-700"
              />
              <p className="text-sm text-gray-400">
                Antall: {designComplexity}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="number-of-pages" className="text-gray-200">
                Antall sider
              </Label>
              <Slider
                id="number-of-pages"
                min={1}
                max={20}
                step={1}
                value={[numberOfPages]}
                onValueChange={(value) => setNumberOfPages(value[0])}
                className="bg-gray-700"
              />
              <p className="text-sm text-gray-400">Antall: {numberOfPages}</p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="ecommerce"
                checked={ecommerce}
                onCheckedChange={setEcommerce}
              />
              <Label htmlFor="ecommerce" className="text-gray-200">
                E-commerce funksjonalitet
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="cms" checked={cms} onCheckedChange={setCms} />
              <Label htmlFor="cms" className="text-gray-200">
                Content Managment System (CMS)
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="seo" checked={seo} onCheckedChange={setSeo} />
              <Label htmlFor="seo" className="text-gray-200">
                Search Engine Optimalisering (SEO)
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full text-center">
              <h3 className="text-2xl font-bold text-white">
                Estimert kostnad
              </h3>
              <p className="text-4xl font-bold text-green-400">
                {totalCost} KR
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Dette er et estiamt og vil reelt variere svært mye.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
