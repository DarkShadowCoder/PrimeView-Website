import React from 'react'

function Hero() {
  return (
    <div className='z-20 w-1/2 text-white absolute top-56 left-8 flex pl-2'>
      <div className='flex flex-col gap-6 justify-center'>
        <h1 className='text-8xl font-bold text-left'>OPPENHEIMER</h1>
        <span className='text-2xl font-medium text-left'>2023 | Thriller, Historical Drama | 3hr 00m | 8.3/10</span>
        <div className=' flex justify-start items-center gap-10 font-medium mt-4'>
          <button type="button" className=' h-auto text-lg bg-white text-black px-14 py-2 flex items-center justify-center rounded-lg hover:bg-transparent duration-300 hover:text-white hover:border-white hover:border hover:ease-linear'>Watch Now</button>
          <button className='h-auto text-lg border-white border text-white px-14 py-2 flex items-center justify-center rounded-lg hover:bg-transparent duration-300 hover:text-black hover:bg-white hover:border hover:ease-linear'> More Info</button>
        </div>
      </div>
    </div>
    
  )
}

export default Hero