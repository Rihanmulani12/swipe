'use client'

import { ContactUs } from '@/components/ContactUs'
import { Footer } from '@/components/Footer'
import { SwipeLogo } from '@/components/SwipeLogo'


function Contact() {
  return (
    <>
    <div className="w-full h-none bg-black-100 ">

      <SwipeLogo/>
    </div>
    
    <div className=' dark:bg-black-100 min-h-screen pt-40 pb-20  px-4 sm:px-6 lg:px-8'>
        <ContactUs />
       
    </div>
    <Footer/>

    
    </>
  )
}

export default Contact