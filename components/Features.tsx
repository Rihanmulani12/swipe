"use client";

import React from 'react';

interface FeaturesProps {
  title: string;
  subtitle: string;
  buttonComponent: React.ReactNode;
  img: React.ReactNode;
}

export const Features: React.FC<FeaturesProps> = ({ title, subtitle, buttonComponent, img }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-12 bg-white dark:bg-black-100">
      <div className="max-w-lg text-center md:text-left md:mr-8">
        <h2 className="text-1xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          {title}
        </h2>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm py-2">
          {subtitle}
        </p>
        {buttonComponent}
      </div>
      <div className="mt-8 md:mt-0">
        {img}
      </div>
    </div>
  );
};
