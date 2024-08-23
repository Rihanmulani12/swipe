
"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function InvoiceFormats() {
  const cards = data.map((card, index) => (
    //@ts-ignore
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-[1/4] py-10">
     <TextGenerateEffect
            words="Our Awesome Invoice Formats"
            className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10"
          />
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-1xl mb-4"
          >
          
            <Image
              src="https://getswipe.in/static/img/templates-new/temp-1.webp"
              alt="Macbook mockup from Aceternity UI"
              height="300"
              width="300"
              fill
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
   
  
    src: "https://getswipe.in/static/img/templates-new/temp-1.webp",
    fill : true,
    
    content: <DummyContent />,
  },
  {
    

    src: "https://getswipe.in/static/img/templates-new/temp-7.webp",
    content: <DummyContent />,
  },

  {

    src: "https://getswipe.in/static/img/templates-new/temp-10.webp",
    content: <DummyContent />,
  },
  {
    src : "https://getswipe.in/static/img/templates-new/temp-12.webp",
    content : <DummyContent />
  },
  {
    src :"https://getswipe.in/static/img/templates-new/temp-13.webp",
    content : <DummyContent/>

  }
 
];
