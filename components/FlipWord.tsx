import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWord() {
  const words = ["GST Billing", "Invoice", "Payments", "Einvoicing"];

  return (
    <div className="h-[30rem] flex justify-center items-center pb-40 mt-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Simple
        <FlipWords words={words} /> <br />

      </div>
    </div>
  );
}
