"use client";

import Button from "./Button";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TextCard } from "./TextCard";
import { InvoiceFormats } from "./InvoiceFormats";
import PartnerCard from "./PartnerCard";
import ComplateFtCard from "./ComplateFtCard";


const AppStoreButton = () => {

  const handler = () => {
    window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank");
  };

  const handler2 = () => {
    window.open("https://apps.apple.com/in/app/swipe-invoicing-and-payments/id6451307318", "_blank");
  }
  return (

    <div className="relative bg-white dark:bg-black-100">

      <div className="flex justify-center py-12 ">
        <Button onClick={handler} title="Google Play Store" className="mr-2" svgElement={<IoLogoGooglePlaystore />} />
        <Button onClick={handler2} title="Apple App Store" svgElement={<FaApple />} />
      </div>

      <div className="flex justify-center py-0">
        <TextCard />
      </div>

    

      <div className="flex justify-center py-12">
 
      
     

  
        
      </div>

      <div className="flex justify-center">
        <InvoiceFormats />
      </div>

      <PartnerCard />

      <ComplateFtCard />
    </div>
  );
};

export default AppStoreButton;
