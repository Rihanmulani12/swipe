"use client";

import ComplateFtCard from "@/components/ComplateFtCard";
import { SwipeLogo } from "@/components/SwipeLogo";
import { Footer } from '../../components/Footer';

function whySwipe() {
  return (
    <>
      <div>
        <div className="w-full h-none bg-black-100 ">
          <SwipeLogo />
        </div>
        <div className="w-full  bg-slate-900">
          <ComplateFtCard />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default whySwipe;
