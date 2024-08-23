"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButtons";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AppStoreButton from "./AppStoreButton";
import { SwipeLogo } from "./SwipeLogo";
import { FlipWord } from "./FlipWord";

const Hero = () => {
  const handleClick = async () => {
    window.open("https://app.getswipe.in/auth/login", "_blank");
  }

  return (
    <>

    
   
    <div className="pt-10  relative overflow-hidden">
  
      <div>
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight className="absolute top-10 left-full" fill="purple" />
        <Spotlight className="absolute left-80 top-28" fill="blue" />
      </div>

      {/**
       *  Updated background and grid styling to fit screen
       */}

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // Changed background to blend with the container
          className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="absolute top-20 left-0 right-0 bottom-0">
        <FlipWord />
      </div>
    

      <div className="absolute top-0 left-0">
        <SwipeLogo />
  
      </div>
      
     

      <div className="flex justify-center relative my-20 pt-5 z-10">
      
      
        <div className="max-w-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center pb-10">
          <TextGenerateEffect
            words="Create your Invoices, Purchases & Quotations in less than 10 seconds. Share on WhatsApp with payment links and get paid faster!"
            className="text-center text-[40px] md:text-xl lg:text-xl pb-20"
          />

        

        
          <a href="#about">
            <MagicButton
             otherClasses=""
              title="Sign Up For Free"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={handleClick}
            />
          </a>
        </div>
      </div>
      <AppStoreButton />
    </div>
    </>
  );
};

export default Hero;
