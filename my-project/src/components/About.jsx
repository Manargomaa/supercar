import { motion } from 'framer-motion'
import { FadeLeft } from '../utility/Aninmation'
import sec2 from '../assets/sec2.png'
import { ChevronRight} from 'lucide-react'
const About = () => {
  return (
    <div className="bg-slate-50 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
      <div className='flex gep-6 flex-col lg:flex-row h-screen gap-6 lg:h-[650px] justify-center items-center'> 
        <div className="lg:w-1/2 w-80">
    <motion.img 
   initial={{opacity:0,x:-200, scale:0.7}}
   whileInView={{opacity:1,x:0, scale:1}}
   transition={{duration:1.8, delay:0.8}}
    src={sec2} alt="" />
    </div>
    <div className="lg:w-1/2 flex flex-col px-8 space-y-5 justfiy-center">
                  <motion.h3
                 inherit={{opacity:0,x:200}}
                 whileInView={{opacity:1 ,x:0}}
                 transition={{duration:0.8, delay:0.1}}
                   className='text-red-500  text-lg text-xl'>On Demand Purchase________</motion.h3>
                  <motion.h1
                  variants={FadeLeft(0.9)}
                  initial="hidden"
                  animate="visible" className='text-4xl lg:text-6xl  font-bold text-black'>Experience the Thrill of <span className='text-red-500'>Super Cars</span> </motion.h1>
                  <motion.p 
                  variants={FadeLeft(1)}
                  initial="hidden"
                  animate="visible"
                  className='text-black text-sn'>Discover the most exclusive and hidh-performance vehices.From blistering speed to unparalleled luxury, our super cars redefine the limits of automotive engineering.
                  </motion.p>
                  <div className="flex gap-4 items-center ">
                    <motion.button 
                    variants={FadeLeft(1.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-red-500 text-white rounded-full px-4  flex py-2 font-semibold'>Explore Models <ChevronRight/></motion.button>
                    <motion.button
                    variants={FadeLeft(1.2)}
                    initial="hidden"
                    animate="visible"
                    className='bg-white text-red-500 rounded-full px-4 py-2 font-semibold items-center border border-red-500'>Book a Test drive</motion.button>
                  </div>
              
                </div>
    
    </div>
      </div>
  
    </div>
  
  

  )
}

export default About