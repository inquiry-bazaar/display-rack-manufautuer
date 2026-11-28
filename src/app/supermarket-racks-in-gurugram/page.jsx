import StatsSection from '@/components/delhi/StatsSection'
import DarkStoreSection from '@/components/gurugram/DarkStoreSection'
import GurugramAreas from '@/components/gurugram/GurugramAreas'
import GurugramFAQ from '@/components/gurugram/GurugramFAQ'
import GurugramHero from '@/components/gurugram/GurugramHero'
import GurugramPlanningGuide from '@/components/gurugram/GurugramPlanningGuide'
import GurugramProjects from '@/components/gurugram/GurugramProjects'
import GurugramStoreTypes from '@/components/gurugram/GurugramStoreTypes'
import GurugramTestimonials from '@/components/gurugram/GurugramTestimonials'
import PremiumFinishes from '@/components/gurugram/PremiumFinishes'
import React from 'react'

export default function page() {
  return (
   <>
   <GurugramHero/>
   <StatsSection/>
   <GurugramStoreTypes/>
   <PremiumFinishes/>
   <DarkStoreSection/>
   <GurugramAreas/>
   <GurugramProjects/>
   <GurugramPlanningGuide/>
   <GurugramFAQ/>
   <GurugramTestimonials/>
   

   </>
  )
}
