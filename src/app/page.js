import About from '@/components/home/About'
import Categories from '@/components/home/Categories'
import FAQ from '@/components/home/FAQ'
import Hero from '@/components/home/Hero'
import HowWeWork from '@/components/home/HowWeWork'
import Industries from '@/components/home/Industries'
import Marquee from '@/components/home/Marquee'
import Products from '@/components/home/Products'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import RackShowcase from '@/components/home/RackShowcase'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import YoutubeShorts from '@/components/home/YoutubeShorts'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Products />
      <YoutubeShorts />
      <About />
      <Categories />
      {/* <RackShowcase /> */}
      <WhyChooseUs />
      <HowWeWork />
      <Industries />
      <Testimonials />
      <FAQ />
      <ProjectsGallery />
    </>
  )
}