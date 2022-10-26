import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

//CSS
import './ProjectDetails.css'

export const MeterProject = () => {
  return (
    <div className='energy-meter-project'>
      <Navbar />
      <section className='project-details'>
        <h1>Energy consumption reading and billing Dashboard</h1>
      </section>
      <Footer />
    </div>
  )
}
