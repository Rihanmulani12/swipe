"use client";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle: string;
  para : string
}


export function ReviewsCard({
  title,subtitle , para} : Props) {
  return (
    <div className="max-w-xs w-full group/card bg-dark-200 pt-0">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://media.istockphoto.com/id/962737798/photo/dark-blue-background.webp?b=1&s=612x612&w=0&k=20&c=aHkr7zmFtpTYcazng18fjl-bpKRm-xZz5Zrg5xYI-bs=)] bg-cover bg-center"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
            {title}
            </p>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>
        <div className="text content">
          
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
         {para}
          </p>
        </div>
      </div>
    </div>
  );
}


export const AllReviewsCard = () =>{
   return (
       
    <div className="border-none flex flex-row gap-4 justify-center items-center dark:bg-black-100 bg-slate-100 rounded-none py-12 md:py-16 px-4  overflow-hidden">


    <ReviewsCard
    title="Vimal Panjwani" subtitle="Founder & CEO - AgriVijay"  para="We have been using Swipe for AgriVijay - Invoicing along with book keeping and the experience has been amazing. Their 10 sec Invoicing and Quotation creation feature is true and best. I am sure they are going to disrupt the market with their unique set of benefits."
     />

<ReviewsCard
    title="Dinesh Thirumurthy" subtitle="Sri Ganesh Store"  para="Discovered Swipe recently. Total kick-ass billing software. Making my life easy and one temple very happy."
     />

<ReviewsCard
    title="Rishabh Nagpal " subtitle="Co-Founder - Parksmart | IIT Delhi"  para="Amazing Product. Have been using it for last few months and it has solved all my invoicing woes! Kudos to the team :)"
     />

<ReviewsCard
    title="Gaurang Shetty " subtitle="Chief Innovation Catalyst, riidl"  para="Swipe has helped our startup incubator 'riidl.org' to streamline our invoices , generate quotations quickly and instantly send the same over WhatsApp. Our support staff was able to use it on the go without any formal training. It’s simple to understand and has been super useful! I am sure swipe is going to be a market leader and add value to many."
     />

    </div>

   )
}
