import Carousel from '@widgets/Carousel'
import Welcome from '@widgets/Welcome'
import React from 'react'

export default function LandingPage() {
  return (
    <main className='w-full'>
      <Carousel/>
      <Welcome/>
    </main>
  )
}
