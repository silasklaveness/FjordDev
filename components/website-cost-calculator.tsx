"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function WebsiteCostCalculator() {
  const [designComplexity, setDesignComplexity] = useState(5)
  const [numberOfPages, setNumberOfPages] = useState(5)
  const [ecommerce, setEcommerce] = useState(false)
  const [cms, setCms] = useState(false)
  const [seo, setSeo] = useState(false)

  const calculateCost = () => {
    let baseCost = 500
    baseCost += designComplexity * 100
    baseCost += numberOfPages * 50
    if (ecommerce) baseCost += 1000
    if (cms) baseCost += 500
    if (seo) baseCost += 300
    return baseCost
  }

  const totalCost = calculateCost()

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Website Cost Calculator</CardTitle>
          <CardDescription>Estimate the cost of your new website based on your requirements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="design-complexity">Design Complexity (1-10)</Label>
            <Slider
              id="design-complexity"
              min={1}
              max={10}
              step={1}
              value={[designComplexity]}
              onValueChange={(value) => setDesignComplexity(value[0])}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">Current: {designComplexity}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="number-of-pages">Number of Pages</Label>
            <Slider
              id="number-of-pages"
              min={1}
              max={20}
              step={1}
              value={[numberOfPages]}
              onValueChange={(value) => setNumberOfPages(value[0])}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">Current: {numberOfPages}</p>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="ecommerce" checked={ecommerce} onCheckedChange={setEcommerce} />
            <Label htmlFor="ecommerce">E-commerce Functionality</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="cms" checked={cms} onCheckedChange={setCms} />
            <Label htmlFor="cms">Content Management System (CMS)</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="seo" checked={seo} onCheckedChange={setSeo} />
            <Label htmlFor="seo">Search Engine Optimization (SEO)</Label>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full text-center">
            <h3 className="text-2xl font-bold">Estimated Cost</h3>
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">${totalCost}</p>
            <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">
              This is a rough estimate. Actual costs may vary based on specific requirements and chosen development team.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}