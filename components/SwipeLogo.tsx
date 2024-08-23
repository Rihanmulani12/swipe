"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SwipeLogo() {
  return (
    <div className="
    flex flex-row pt-10 items-center h-30 w-50 mr-20  overflow-hidden rounded-md">
      <h1 className="ml-10 pl-10 pt-5 md:text-1xl text-2xl lg:text-2xl font-bold font-roboto text-center text-sky-300 ">
        <span ><img className="absolute left-11 top-14 w-10 h-15" src="./logo.png"></img> </span>
        SWiPE
      </h1>
      <div className=" absolute ">
        {/* Gradients */}
        <div className="absolute   bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px]  blur-lg" />

        <div className="absolute   bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-3/4 blur-sm" />
        <div className="absolute  bg-gradient-to-r from-transparent via-sky-100 to-transparent  w-3/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={0.8}
          particleDensity={1700}
          className="w-30 h-20 ml-5"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="relative bg-dark-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]">
        </div>
      </div>
    </div>
  );
}
