import Carousel from '@widgets/Carousel'
import CounterFrame from '@widgets/CounterFrame'
import OurCourses from '@widgets/OurCourses'
import Welcome from '@widgets/Welcome'
import React from 'react'

export default function LandingPage() {
  return (
    <main className='w-full'>
      <Carousel/>
      <Welcome/>
      <OurCourses/>
      <CounterFrame/>
    </main>
  )
}
