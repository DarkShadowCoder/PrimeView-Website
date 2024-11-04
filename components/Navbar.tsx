import React from 'react'


function Navbar() {
  return (
    <div className='text-white absolute z-20 top-0 mx-4 my-8 w-screen h-16 flex justify-between items-center'>
      <div className='text-xl'>
        <a href="#">PrimeView</a>
      </div>
      <div className='w-[70%] text-3xl h-full items-center flex justify-end pr-20 gap-24'>
        <a href="" className='align-center font-semibold'>Home</a>
        <a href="" className='align-center font-normal'>Movies</a>
        <a href="" className='align-center font-normal'>Shows</a>
        <a href="" className='align-center font-normal'>Apps</a>
        <a href="" className='align-center font-normal'>Library</a>
        <img src="/user.png" alt="user" className='rounded-full w-12 h-12'/>
      </div>
    </div>
  )
}

export default Navbar