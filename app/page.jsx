import React from 'react'
import { Button } from '@/components/ui/button';
import {FiDownload} from "react-icons/fi";
import Socail from '@/components/ui/Socail';
import Stats from '@/components/ui/Stats';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Computer Scientiest</span>
            <h1 className='h1'>
                Hello I'm <br/> <span className='text-accent'>Haroon Mohy Ud Din</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel in various programming languages and tecnologies.
            </p>
            
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                 variant="outline"
                 size="lg"
                 className="uppercase flex items-center gap-2" 
                  >
                    <span>Download CV</span>
                    <FiDownload className='text-xl'/>
              </Button>
            <div className='mb-8 xl:mb-0'>
                <Socail   
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-between items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
            </div>
            
            </div>
          </div>

          </div> 

      </div>
        <Stats />
    </section>
  )
}

export default Home