import React from 'react'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import car4 from '../assets/car4.png'
import car5 from '../assets/car5.png'
import car6 from '../assets/car6.png'
import { desc } from 'framer-motion/client'
import { ChevronRight } from 'lucide-react'
import Cards from './Cards'


const Inventory = () => {
    const cars =[
        {
            id:1,
            name:"Lamborghini Huracan Evo",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            price:"Rs. 3.71 - 4.29 Crore",
            img:car1
       },
       {
           id:2,
           name:"Lamborghini Huracan Evo",
           desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
           price:"Rs. 3.71 - 4.29 Crore",
           img:car2
      },
      {
       id:3,
       name:"Lamborghini Huracan Evo",
       desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
       price:"Rs. 3.71 - 4.29 Crore",
       img:car3
  },
  {
    id:4,
    name:"Lamborghini Huracan Evo",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    price:"Rs. 3.71 - 4.29 Crore",
    img:car4
},     {
    id:5,
    name:"Lamborghini Huracan Evo",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    price:"Rs. 3.71 - 4.29 Crore",
    img:car5
},     {
    id:6,
    name:"Lamborghini Huracan Evo",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    price:"Rs. 3.71 - 4.29 Crore",
    img:car6
},


    ]
  return (
    <div className='bg-slate-50 py-10 px-5 lg:px-0'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col space-y-3 text-center'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Our Inventory</h1>
                <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-10'>
                    {
                        cars.map((item) => {
                            return <Cards key={item.id} item={item}/>
                        })
                    }

                </div>
                <div className='pt-10'>
                    <button className='px-4 py-2 border border-red-500 text-red-500 mx-auto flex rounded-lg'>See All <ChevronRight/></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Inventory