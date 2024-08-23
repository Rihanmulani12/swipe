"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import Button from "./Button";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AllReviewsCard } from "./ReviewsCard";



const featuresList = [
  "Create invoice within 10 seconds",
  "Customize invoices",
  "Multiple invoice templates",
  "Delivery Challan",
  "GSTR report",
  "Credit note",
  "Share invoices on WhatsApp and Email",
  "Payment reminders",
  "Integrated payment gateway",
  "Payment ledger",
  "POS billing",
  "Thermal printing",
  "Edit bills",
  "Purchase orders and purchase invoices",
  "Generate Estimates/Quotation",
  "Generate ProForma Invoices",
  "Stock and Inventory Management",
  "Unlimited Logins",
  "Unlimited Customers",
  "Unlimited Products/ Bulk Upload",
  "Multiple User/Business accounts",
  "User Role Settings",
  "Multiple GSTs Accounting",
  "Multiple Pricing (Wholesale/Retail)",
  "Customer/Vendor details",
  "Manage Expenses",
  "Profit/Loss statement",
  "Real-time Analytics",
  "Online Store",
  "Add Product Variants",
  "E-way Bills",
  "E-Invoices",
  "TDS NEW",
  "Cess NEW",
  "Recurring Invoices/Subscriptions NEW",
  "SMS Campaigns NEW",
  "Export/SEZ Invoices NEW",
  "Bill of Supply NEW",
  "Serial Number & IMEI NEW",
  "Batch & Expiry NEW",
  "Manufacturing & Grouping NEW",
  "Tally Integration NEW",
  "Advanced Column Linking NEW",
];




const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white ">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};


export function WhySwipe() {
  return (
    <CardSpotlight className="flex flex-col justify-center items-center rounded-none bg-black-100 overflow-hidden">
      <p className="text-xl font-bold relative z-20 mt-2 text-white px-4 py-2">
        Why Swipe?
      </p>
      <div className="text-neutral-200 mt-4 relative z-20 px-4">
        <ul className="list-none mt-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuresList.map((feature, index ) => (
            <Step
              key={index}
              title={feature}
              // @ts-ignore
              className= "text-sm md:text-base px-2 py-1 border border-neutral-700 rounded-md hover:bg-neutral-800 transition duration-300"
            />
          ))}
        </ul>
      </div>

      <h1 className="mt-10 pb-5 relative z-10 text-lg md:text-xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold bg-transparent">
        Get started in less than 60 seconds
      </h1>
      <div className="py- relative z-10 flex justify-center  dark:bg-black-100 ">
        <Button onClick={() => window.open("https://apps.apple.com/in/app/swipe-ai/id6449124803")}
          title="Google App Store"
          className="mr-2"
          svgElement={<IoLogoGooglePlaystore />}
        />
        <Button onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app")} title="Apple Play Store" svgElement={<FaApple />} />
      </div>


      <h1 className="pt-20 mt-0 relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-600  text-center font-sans font-bold bg-transparent">
      Our Awesome Testimonials
      </h1>

      <AllReviewsCard/>
    </CardSpotlight>
  );
}
