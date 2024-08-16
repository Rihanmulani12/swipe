import React from 'react';
import { Features } from './Features';
import Button from './Button';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import Image from 'next/image';

function ComplateFtCard() {
  return (

    <div>
    <div>
      <Features 
        title="Create invoices in less than 10 seconds" 
        subtitle="Swipe helps you track your sales, manage inventory, customers & vendors and be in control of your business. Create GST compliant invoices & share with customers easily."
        buttonComponent={<Button onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank")} title="Create Invoices free" svgElement={<IoLogoGooglePlaystore />} />} 
        img={<Image src="/ft1.png" alt="Feature Image" width={300} height={200} />}
      />
    </div>

    <div>
      <Features 
        title="Share invoices on WhatsApp & Email" 
        subtitle="Swipe helps you reach your customers and vendors wherever they are. Share invoices and purchase orders on WhatsApp and Email."
        buttonComponent={<Button onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank")} title="Get Started With Swipe" svgElement={<IoLogoGooglePlaystore />} />} 
        img={<Image src="/ft2.png" alt="Feature Image" width={300} height={200} />}
      />
    </div>

    <div>
      <Features 
        title="GST filings made easy" 
        subtitle="Using Swipe, you can quickly generate GST reports to instantly file your returns"
        buttonComponent={<Button onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank")} title="Get GST Reports in One Click" svgElement={<IoLogoGooglePlaystore />} />} 
        img={<Image src="/ft3.png" alt="Feature Image" width={300} height={200} />}
      />
    </div>

    <div>
      <Features 
        title="Manage inventory" 
        subtitle="Swipe Inventory is designed to help you spend less time in front of the screen and more time with your customers. Download reports on current inventory and update inventory quantities in bulk, which is helpful when adding new inventory."
        buttonComponent={<Button onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank")} title="Manage Inventory for Free" svgElement={<IoLogoGooglePlaystore />} />} 
        img={<Image src="/ft4.png" alt="Feature Image" width={300} height={200} />}
      />
    </div>

    <div>
      <Features 
        title="Get payments faster" 
        subtitle="With Swipe you can send payment links and even QR codes so that customers can pay you quickly. Send payment reminders easily. Make payments to your suppliers conveniently from your trusted UPI apps."
        buttonComponent={<Button  onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank")} title="Try Swipe Payments" svgElement={<IoLogoGooglePlaystore />} />} 
        img={<Image src="/ft5.png" alt="Feature Image" width={300} height={200} />}
      />
    </div>


    <div>
      <Features 
        title="Get your store Online" 
        subtitle="With Swipe you can setup your online store and grow your business. Set up your online store with products, images, prices & exclusive offers. Directly share your store link with customers to receive online orders and payments!"
        buttonComponent={<Button onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank")} title="Get Online Store Now" svgElement={<IoLogoGooglePlaystore />} />} 
        img={<Image src="/ft6.png" alt="Feature Image" width={300} height={200} />}
      />
    </div>

    <div>
      <Features 
        title="Powerful business analytics and Reports" 
        subtitle="Swipe automatically generates all the business analytics you will ever need to answer any question about the product/categorywise sales or to understand your users and payments."
        buttonComponent={<Button onClick={() => window.open("https://play.google.com/store/apps/details?id=in.swipe.app", "_blank")} title="Get Sales Reports" svgElement={<IoLogoGooglePlaystore />} />} 
        img={<Image src="/ft7.png" alt="Feature Image" width={300} height={200} />}
      />
    </div>
    </div>
   
    
  );
}

export default ComplateFtCard;
