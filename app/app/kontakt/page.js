"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consent) {
      setError(["Du må godta personvernerklæringen"]);
      setSuccess(false);
      setSuccessMessage("");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(success ? [] : msg);
    setSuccess(success);
    setSuccessMessage(success ? msg[0] : "");

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
      setConsent(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-950 text-white">
      <div className="container max-w-6xl mx-auto p-6 space-y-6">
        <div className="text-center mb-8 lg:mb-10">
          <h1 className="text-3xl font-bold">Kontakt oss</h1>
          <p className="text-muted-foreground">
            Har du et prosjekt eller spørsmål? Fyll ut følgende skjema eller
            kontakt oss direkte gjennom kontaktinformasjon.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-sm font-medium">
                Navn
              </Label>
              <Input
                id="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Skriv inn ditt navn"
                className="bg-[#2d2d2d] border-[#3f3f3f] text-white focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Epost
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Skriv inn din epost"
                className="bg-[#2d2d2d] border-[#3f3f3f] text-white focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Melding
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Skriv inn din melding her"
                className="bg-[#2d2d2d] border-[#3f3f3f] text-white focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mr-2"
                required
              />
              <label htmlFor="consent" className="text-sm">
                Jeg samtykker til at mine personopplysninger blir behandlet i
                samsvar med{" "}
                <a
                  href="/personvernerklering"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  personvernerklæringen
                </a>
                .
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Send
            </Button>
          </form>
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold">Kontaktinformasjon</h3>
            <p className="text-muted-foreground">
              Epost:{" "}
              <a
                href="mailto:development@oceanedge.no"
                className="text-blue-600 underline"
              >
                development@oceanedge.no
              </a>
            </p>
            <p className="text-muted-foreground">
              Telefon:{" "}
              <a href="tel:+4745786703" className="text-blue-600 underline">
                +47 45786703
              </a>
            </p>
            <div className="flex flex-col mt-4">
              {error.length > 0 && (
                <div className="bg-red-700 text-white font-bold px-4 py-2">
                  {error.map((e, index) => (
                    <div key={index}>{e}</div>
                  ))}
                </div>
              )}
              {success && (
                <div className="bg-green-700 text-white font-bold px-4 py-2">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
