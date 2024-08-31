import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32">
      <main className="flex flex-col items-center mt-6">
        <h1 className="text-2xl font-bold">Hosting & Vedlikehold</h1>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 mt-6 md:grid-cols-3">
          <Card className="border border-yellow-500">
            <CardHeader className="text-center bg-yellow-500">
              <CardTitle className="text-white">Standard</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center p-4">
              <div className="text-4xl font-bold">300-600kr</div>
              <div className="text-2xl">Måned</div>
              <p className="mt-4">For bedrifter som har enkle nettsider.</p>
              <ul className="list-disc text-left mt-4 ml-6">
                <li>Garanti for oppetid</li>
                <li>Automatiske Oppdateringer</li>
                <li>Brannmur og DDoS-beskyttelse</li>
                <li>Månedlig sikkerhetskopier</li>
                <li>Grunnleggende SEO-oppsett</li>
                <li>Teknisk support</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center p-4 text-yellow-500">
              <Button className="bg-white text-black">Kontakt oss</Button>
            </CardFooter>
          </Card>

          <Card className="border border-pink-500">
            <CardHeader className="text-center bg-pink-500">
              <CardTitle className="text-white">Premium</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center p-4">
              <div className="text-4xl font-bold">999-1500kr</div>
              <div className="text-2xl">Måned</div>
              <p className="mt-4">
                For mellomstore bedrifter som ønsker økt ytelse og sikkerhet.
              </p>
              <ul className="list-disc text-left mt-4 ml-6">
                <li>Alt i Standard-pakken</li>
                <li>Ubegrenset båndbredde</li>
                <li>Avansert sikkerhetsovervåkning</li>
                <li>Ukentlige sikkerhetskopier</li>
                <li>Prioritert teknisk support</li>
                <li>Ytelsesoptimalisering</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center p-4 text-pink-500">
              <Button className="bg-white text-black">Kontakt oss</Button>
            </CardFooter>
          </Card>

          <Card className="border border-teal-500">
            <CardHeader className="text-center bg-teal-500">
              <CardTitle className="text-white">Platinium</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center p-4">
              <div className="text-4xl font-bold">2000-4000kr</div>
              <div className="text-2xl">Måned</div>
              <p className="mt-4">
                For store bedrifter som ønsker fullstendig administrasjon og
                optimalisering.
              </p>
              <ul className="list-disc text-left mt-4 ml-6">
                <li>Alt i Premium-pakken</li>
                <li>Dedikert server</li>
                <li>24/7 overvåkning og support</li>
                <li>Tilpassede sikkerhetsløsninger</li>
                <li>Månedlige rapporter og analyser</li>
                <li>Fullstendig nettsideadministrasjon</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center p-4 text-teal-500">
              <Button className="bg-white text-black">Kontakt oss</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </section>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ReplaceIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M14 4c0-1.1.9-2 2-2" />
      <path d="M20 2c1.1 0 2 .9 2 2" />
      <path d="M22 8c0 1.1-.9 2-2 2" />
      <path d="M16 10c-1.1 0-2-.9-2-2" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
      <rect width="8" height="8" x="2" y="14" rx="2" />
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
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

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
