import HomePage from '@/components/Hompage'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import Service from '@/components/Service'
import About from '@/components/About'    
import React from 'react'
import CategoriesSection from '@/components/Categories'
import Courses from '@/components/Courses'
import FaqSection from '@/components/Faq'
import Footer from '@/components/Footer'
import JobOpportunities from '@/components/Opportunities'
import ServicesSection from '@/components/Services'

function page() {
  return (
    <div>
     <Navbar/>
     <Slider/>
     <Service/>
     <About/>
     <CategoriesSection/>
     <Courses/>
     <ServicesSection/>
     <JobOpportunities/>
     <FaqSection/>
     <Footer/>
    
    </div>
  )
}

export default page