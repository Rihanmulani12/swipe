import { InvoiceFormats } from '@/components/InvoiceFormats';
import React from 'react'
import { SwipeLogo } from '@/components/SwipeLogo';
import { Footer } from '@/components/Footer';

function Templates () {
  return (
    <>
    <div className="w-full h-none bg-black-100 ">

      <SwipeLogo/>
    </div>
    <div className="w-full h-max  bg-black-100 ">
        <InvoiceFormats/>
    </div>
    <Footer/>
    </>
  )
}

export default Templates;