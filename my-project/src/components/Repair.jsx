import React from 'react'
import repair from '../assets/repair.png'
import repair1 from '../assets/repair1.png'
import repair2 from '../assets/repair2.png'
import repair3 from '../assets/repair3.png'
import repair4 from '../assets/repair4.png'
import {motion} from 'framer-motion'

const Repair = () => {
  return (
    <div className='relative bg-red-50 mt-10 lg:mt-0'>
        <div className='max-w-7xl h-[650px] relative mx-auto pt-10'>
             <motion.div 
             initial={{opacity:0 , y:200}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:1, delay:0.5}}
             className='flex flex-col'>
                <img src={repair} alt=""  />
                <div className='p-2 md:flex flex-col hidden  space-y w-52 mx-auto text-center justfy-center absolute top-0 left-72'>
                    <div className='bg-orange-50 mx-auto rounded-full '>
                      <img src={repair1} alt="" className='w-20 p-2' />
                    </div>
                    <h3>Battery Repair</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='p-2 md:flex flex-col hidden space-y w-52 mx-auto text-center justfy-center absolute top-48 right-0'>
                    <div className='bg-orange-50 mx-auto rounded-full '>
                      <img src={repair2} alt="" className='w-20 p-2' />
                    </div>
                    <h3>Battery Repair</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>   
                  <div className='p-2 md:flex flex-col hidden  space-y w-52 mx-auto text-center justfy-center absolute top-52 left-0'>
                    <div className='bg-orange-50 mx-auto rounded-full '>
                      <img src={repair3} alt=""  className='w-20 p-2'/>
                    </div>
                    <h3 className='font-semibold'>Tyre Repair</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    <h4 className='text-red-500'>Read More</h4>

                </div> 
                    <div className='p-2 md:flex flex-col hidden  space-y w-52 mx-auto text-center justfy-center absolute top-0 right-72'>
                    <div className='bg-orange-50 mx-auto rounded-full '>
                      <img src={repair4} alt=""className='w-20 p-2' />
                    </div>
                    <h3 className='font-semibold'>Engine Repair</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
             </motion.div>
        </div>
       
    </div>
  )
}

export default Repair