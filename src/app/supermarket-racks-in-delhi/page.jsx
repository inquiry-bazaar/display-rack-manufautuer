import AreasWeServe from '@/components/delhi/AreasWeServe'
import DelhiFAQ from '@/components/delhi/DelhiFAQ'
import DelhiHero from '@/components/delhi/DelhiHero'
import DelhiProjects from '@/components/delhi/DelhiProjects'
import DelhiPromise from '@/components/delhi/DelhiPromise'
import DelhiTestimonials from '@/components/delhi/DelhiTestimonials'
import HowItWorksDelhi from '@/components/delhi/HowItWorksDelhi'
import Products from '@/components/delhi/Products'
import RackPricingSection from '@/components/delhi/RackPricingSection'
import StatsSection from '@/components/delhi/StatsSection'
import WhyChooseUs from '@/components/delhi/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
   <>
   <DelhiHero/>
   <StatsSection/>
   <WhyChooseUs/>
   <AreasWeServe/>
   <Products/>
   <RackPricingSection/>
   <DelhiPromise/>
   <HowItWorksDelhi/>
   <DelhiProjects/>
   <DelhiTestimonials/>
   <DelhiFAQ/>
   </>
  )
}
