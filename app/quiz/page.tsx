import React from "react";
import Quiz from "@/components/quiz";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 sm:p-12 lg:p-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Nettside Prisestimat Quiz
        </h1>
        <Quiz />
      </div>
    </div>
  );
};

export default page;
