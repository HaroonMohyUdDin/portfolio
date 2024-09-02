"use client"

import React from 'react';
import Link from 'next/link';
import {motion} from "framer-motion";
import{BsArrowDownRight} from "react-icons/bs";

const services=[
  {
    num: '01',
    title: "Web Development",
    description:"Build and optimize websites using HTML, CSS, Javascript, React.Js and Next.Js"
  },
  {
  num: '02',
  title: "Mobile Application Development",
  description:"Build and optimize Mobile Application using Flutter and Kotlin"
  },
  
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col nustify-center py-12 xl:py-0'>
      <div className='conatiner mx-auto'>
        <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition: {delay:2.4, duration:0.4,ease:  "easeInOut"}
        }}
          className='grid grid-cols-1 md:grid_cols-2 gap-[60px]'
        >
          {services.map((service,index)=>{
            return( 
              <div key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'
              >
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover tansition-all duration-500'>
                    {service.num}</div>
                  <Link href= "services.href"
                  className="w-20 h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                  <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                    {service.title}</h2>
                  <p className='text-white/60'>{service.description}</p>
                  <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
          </motion.div> 

      </div>

    </section>
  )
}

export default Services;