'use client';
import React from 'react'

import Hero from '@/components/Hero';
import Fonts from "@/components/Fonts";
import Arrivals from './Arrivals/page';
// import Products from "@/app/products-details/page";
import Top_sell from './Sell/page'; 


// import Top_sell from "@/app/products-details/sell";
import Brands from './Brands/page';

import Rating from "@/components/Rating";



const page = () => {
  return (
    <div>
   <div>
      <main>
       <Hero />
       <Fonts />
       <Arrivals />
    {/* <Products /> */}
       <Top_sell/>
    
      {/* <Top_sell /> */}
     
      <Brands/>
      <Rating/>
   
      </main>
    </div>
    </div>
  )
}

export default page
