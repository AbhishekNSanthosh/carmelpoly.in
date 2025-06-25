import CampusGallery from '@widgets/(Home)/CampusGallery'
import Carousel from '@widgets/(Home)/Carousel'
import CounterFrame from '@widgets/(Home)/CounterFrame'
import OurCourses from '@widgets/(Home)/OurCourses'
import Welcome from '@widgets/(Home)/Welcome'
import React from 'react'

export default function LandingPage() {
  return (
    <main className='w-full'>
      <Carousel/>
      <Welcome/>
      <OurCourses/>
      <CounterFrame/>
      <CampusGallery/>
    </main>
  )
}
