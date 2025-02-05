import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import footer1 from '../assets/footer1.png'
import footer2 from '../assets/footer2.png'
import footer3 from '../assets/footer3.png'

const Footer = () => {
  return (
   <footer className='bg-muted text-muted-foreground bg-red-50'>
    <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-4 gap-8'>  
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500'>Quick Link</h3>
                <ul className='space-y-2'>
                    <li>Home</li>
                    <li>Inventory</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500'>Contact Us</h3>
                <div className='flex gap-2'>
                    <MapPin className='text-red-500'/>
                    <div>
                        <p>123 Supercar street</p>
                        <p>City, state 12345</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <Phone className='text-red-500 my-4'/>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Mail className='text-red-500 my-4'/>
                    <p>email: info@supercars.com</p>
                </div>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500'>Opening Hours</h3>
                <p>Monday - Friday: 11am - 10pm</p>
                <p>Saturday - Sunday: 10am - 11pm</p>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4 text-red-500'>Follow Us</h3>
                <div className='flex space-x-4'>
                       <img src={footer1} alt="" className='w-5 h-5'/>
                       <img src={footer3} alt=""className='w-5 h-5' />
                       <img src={footer2} alt=""className='w-5 h-5' />

                </div>
            </div>
        </div>
        <div className="mt-8 border-muted-foreground/20 pt-8 text-center">
        <p>&copy; {new Date().getFullYear
            ()} Your <span className='text-red-500 font-semibold'>Super</span>Cars. All rights reserved</p>
        </div>
    </div>
   </footer>
  )
}

export default Footer