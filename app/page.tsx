import Link from 'next/link';
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Nav";

import { WhySwipe } from "@/components/WhySwipe";


export default function Home() {
  return (
    <div className="w-full h-screen">
      <FloatingNavDemo />
      <Hero />
      <WhySwipe/>
      <Footer/>
      
      
 
    
    </div>
  );
}
