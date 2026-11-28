import StatsSection from '@/components/delhi/StatsSection'
import NodiaFAQ from '@/components/noida/NodiaFAQ'
import NoidaAreas from '@/components/noida/NoidaAreas'
import NoidaPackages from '@/components/noida/NoidaPackages'
import NoidaPlanningGuide from '@/components/noida/NoidaPlanningGuide'
import NoidaContactSection from '@/components/noida/NoidaContactSection'
import NoidaRackChecklist from '@/components/noida/NoidaRackChecklist'
import RackProductGuide from '@/components/noida/RackProductGuide'
import React from 'react'
import NoidaHero from '@/components/noida/NoidaHero'

export default function page() {
  return (
   <>
   <NoidaHero/>
   <StatsSection/>
   <NoidaPackages/>
   <NoidaRackChecklist/>
   <RackProductGuide/>
   <NoidaAreas/>
   <NoidaPlanningGuide/>
   <NodiaFAQ/>
   <NoidaContactSection/>
   </>
  )
}
