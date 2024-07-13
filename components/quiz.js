// components/Quiz.js
"use client";
import { useState } from "react";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);

  const handleAnswer = (points) => {
    setScore(score + points);
    setStep(step + 1);
  };

  const getEstimate = () => {
    if (score <= 4) {
      return "2000 - 4000 NOK";
    } else if (score <= 6) {
      return "4000 - 6000 NOK";
    } else if (score <= 7) {
      return "10000 - 20000 NOK";
    } else if (score <= 9) {
      return "20000 - 30000 NOK";
    } else {
      return "30000+ NOK";
    }
  };

  if (step === 5) {
    return (
      <div className="text-center p-4">
        <h2 className="text-3xl font-bold mb-4">
          Estimert kostnad: {getEstimate()}
        </h2>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={() => {
            setStep(1);
            setScore(0);
          }}
        >
          Start på nytt
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 sm:p-16 lg:p-24">
      {step === 1 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Hvor mange sider vil nettsiden ha?
          </h2>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(1)}
          >
            1-5 sider
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(2)}
          >
            6-10 sider
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(3)}
          >
            11-20 sider
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(4)}
          >
            Mer enn 20 sider
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Hvor avansert design trenger du?
          </h2>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(1)}
          >
            Veldig enkelt
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(2)}
          >
            Moderat
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(3)}
          >
            Avansert
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(4)}
          >
            Veldig avansert
          </button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Trenger du e-handelsfunksjonalitet?
          </h2>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(1)}
          >
            Nei
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(2)}
          >
            Ja, grunnleggende
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(3)}
          >
            Ja, avansert
          </button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Trenger du tilpasset utvikling (f.eks. API-integrasjoner)?
          </h2>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(1)}
          >
            Nei
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(2)}
          >
            Ja, noen
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 m-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(3)}
          >
            Ja, mange
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
