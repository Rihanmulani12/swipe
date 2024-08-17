"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FaIndianRupeeSign } from "react-icons/fa6";

export function Pricing() {
    return (
      <div className="flex items-start h-5/6 justify-center space-x-3 bg-slate-800 dark:bg-black-100 pt-40 pb-20 ">
        <div className="flex justify-center items-center h-full ml-10">
          <CardSpotlight className=" w-85 pb-8">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              PRO Plans
            </p>
            <div className="text-sm text-neutral-200 mt-4 relative z-20">
              Perfect plan for small businesses.
              <div className="flex justify-center items-center px-5 py-5">
                <FaIndianRupeeSign className="text-3xl" />
                <span className="text-3xl">1899</span>
                <span className="text-sm ml-1">/year</span>
                <div className="flex justify-center items-center space-x-1">
                  <FaIndianRupeeSign className="text-xl ml-2" />
                  <span className="text-xl line-through">2999</span>
                  <span className="text-sm ml-1">/year</span>
                </div>
              </div>
              <ul className="list-none text-sm text-neutral-200 mt-1 py-2 px-4">
                <Step title="Enter your email address" />
                <Step title="Create a strong password" />
                <Step title="Two-factor authentication" />
                <Step title="Verify your identity" />
                <Step title="Everything in FREE +" />
                <Step title="1 Business account" />
                <Step title="Branding" />
                <Step title="No Swipe logo on Bills" />
                <Step title="12+ Invoice templates" />
                <Step title="Collect Online Payments" />
                <Step title="GSTR-1, 40+ Reports" />
                <Step title="Variants" />
                <Step title="Bulk edits" />
                <Step title="Convert to Docs" />
                <Step title="Swipe Drive with 512MB" />
                <Step title="Priority Support" />
                <Step title="iOS App access" />
              </ul>
            </div>
          </CardSpotlight>
        </div>
  
        <div className="flex justify-center items-center h-full">
          <CardSpotlight className=" w-85 pb-72">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              JET Plans
            </p>
            <div className="text-sm text-neutral-200 mt-4 relative z-20">
              Precise plan for businesses with movement.
              <div className="flex justify-center items-center px-5 py-5">
                <FaIndianRupeeSign className="text-xl ml-2" />
                <span className="text-3xl">3299</span>
                <span className="text-sm ml-1">/year</span>
                <div className="flex justify-center items-center space-x-1">
                  <FaIndianRupeeSign className="text-xl ml-2" />
                  <span className="text-xl line-through">4999</span>
                  <span className="text-sm ml-1">/year</span>
                </div>
              </div>
              <ul className="list-none text-neutral-200 mt-1 py-2 px-4">
                <Step title="Everything in PRO +" />
                <Step title="1 Business account" />
                <Step title="Admin + 2 users" />
                <Step title="E-way Bills" />
                <Step title="Unlimited on Web/ Android/ iOS" />
                <Step title="Bulk downloads" />
                <Step title="Swipe Drive with 1 GB" />
                <Step title="Multiple Price lists" />
                <Step title="User Activity" />
              </ul>
            </div>
          </CardSpotlight>
        </div>
  
        <div className="items-center h-90 ">
          <CardSpotlight className=" w-90 pb-40">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              RISE Plan
            </p>
            <div className="text-sm text-neutral-200 mt-4 relative z-20">
              Powerful plan for growing businesses.
              <div className="flex justify-center items-center px-5 py-5">
                <FaIndianRupeeSign className="text-3xl" />
                <span className="text-3xl">3999</span>
                <span className="text-sm ml-1">/year</span>
                <div className="flex justify-center items-center space-x-1">
                  <FaIndianRupeeSign className="text-xl ml-2" />
                  <span className="text-xl line-through">5999</span>
                  <span className="text-sm ml-1">/year</span>
                </div>
              </div>
              <ul className="list-none text-sm text-neutral-200 mt-1 py-2 px-4">
                <Step title="Everything in JET +" />
                <Step title="1 Business account" />
                <Step title="Admin + 2 users" />
                <Step title="POS Billing" />
                <Step title="Batch & Expiry" />
                <Step title="New features on Swipe" />
                <Step title="Serial Number/IMEI Tracking" />
                <Step title="Subscription/Recurring" />
                <Step title="Product Grouping" />
                <Step title="Manufacturing Inventory" />
                <Step title="Additional CESS" />
                <Step title="Bank Reconciliation" />
                <Step title="Beta" />
              </ul>
            </div>
          </CardSpotlight>
        </div>
      </div>
    );
  }
  

  

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start mb-3 text-center text-extra-sm">
      <CheckIcon />
      <p className="text-white-500 ">{title}</p>
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

export default Pricing;
