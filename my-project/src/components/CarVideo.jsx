import React from 'react'
import video from '../assets/redcarv.mp4'
const CarVideo = () => {
  return (
    <div>
        <video src={video} className='w-full' autoPlay loop muted/>
    </div>
  )
}

export default CarVideo