import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { main } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full h-full p-6 bg-black'>
      <img 
      src='/oppenheimer.png'
      alt='hero bg'
      className='object-cover w-screen h-[95vh] z-10 '
      />
      <Navbar />
      <Hero />
    </main>
    
  )
}
