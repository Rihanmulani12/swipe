"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-sm max-h-full h-96 px-0 py-0 md:text-xl lg:text-1xl font-bold text-neutral-500 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
       Create your Invoices, Purchases & Quotations in less than 10 seconds.
       <br/>
       Share on WhatsApp with payment links and get paid faster!
       {" "}
       <br/>
        <Highlight className="text-black dark:text-white">
        Simple GST Billing, Invoiceing, Accounting, Payments
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
