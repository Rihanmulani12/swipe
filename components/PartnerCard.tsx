

import React from 'react';

function PartnerCard() {
  return (
    <div className="text-center rounded-lg shadow-lg py-10 px-10">
      <div className="flex items-center justify-center mb-4 ">
        <span className="text-sm font-medium text-white-100">Backed by</span>
        <img className="ml-2 w-24 h-8 bg-sky-200"  src="https://getswipe.in/static/img/ycombinator.svg" alt="Y Combinator" />
      </div>

      <h3 className="text-sm font-semibold text-white-100 mb-4">Partnered with</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <img className="w-32 h-12 lazyloaded" src="https://getswipe.in/static/img/partners-new/icici.webp" alt="ICICI Bank" />
        <img className="w-32 h-12 lazyloaded" src="https://getswipe.in/static/img/partners-new/axisbank.webp" alt="AXIS Bank" />
        <img className="w-32 h-12 lazyloaded" src="https://getswipe.in/static/img/partners-new/razorpay.webp" alt="Razorpay" />
        <img className="w-32 h-12 lazyloaded" src="https://getswipe.in/static/img/partners-new/phonepe.webp" alt="PhonePe" />
        <img className="w-32 h-12 lazyloaded" src="https://getswipe.in/static/img/partners-new/shiprocket_new.webp" alt="Shiprocket" />
      </div>
    </div>
  );
}

export default PartnerCard;

