"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Mail, Phone, Send } from "lucide-react";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!consent) {
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
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <Card className="w-full max-w-4xl mx-auto bg-gray-800 border-gray-700 shadow-2xl mt-[80px]">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Kontakt oss
          </CardTitle>
          <CardDescription className="text-gray-400">
            Har du et prosjekt eller spørsmål? Fyll ut følgende skjema eller
            kontakt oss direkte gjennom kontaktinformasjon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="fullname"
                  className="text-sm font-medium text-gray-300"
                >
                  Navn
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Skriv inn ditt navn"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Epost
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Skriv inn din epost"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Melding
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Skriv inn din melding her"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 min-h-[120px]"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-300">
                  Jeg samtykker til at mine personopplysninger blir behandlet i
                  samsvar med{" "}
                  <a
                    href="/personvernerklering"
                    className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    personvernerklæringen
                  </a>
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send melding
              </Button>
            </form>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Kontaktinformasjon
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a
                      href="mailto:development@oceanedge.no"
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      development@oceanedge.no
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a
                      href="tel:+4745786703"
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      +47 45786703
                    </a>
                  </div>
                </div>
              </div>
              {error.length > 0 && (
                <div
                  className="bg-red-500 bg-opacity-20 border border-red-600 text-red-100 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Feil!</strong>
                  <ul className="mt-2 list-disc list-inside">
                    {error.map((e, index) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
              {success && (
                <div
                  className="bg-green-500 bg-opacity-20 border border-green-600 text-green-100 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Suksess!</strong>
                  <p className="mt-2">{successMessage}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
