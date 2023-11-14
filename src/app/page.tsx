import React, { useState } from 'react'
import Navbar from './_components/navbar'
import { ModeToggle } from './_components/mode-toggle'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import Intro from './_components/introSec'
import About from './_components/aboutSec'



export default function Home() {
  return (
    <main className="">
      <div className='absolute z-10'>
      <Navbar />
      <ModeToggle />
      </div>
      <Intro/>
      <About/>
      

    </main>
  );
}
