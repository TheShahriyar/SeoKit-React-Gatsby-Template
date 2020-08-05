import React from "react"
import Header from "../components/Header"
import Slideshow from "../components/Slideshow"
import FeatureSection from "../components/FeatureSection"
import CallToAction1 from "../components/CallToAction1"
import ImageContentSection from "../components/ImageContentSection"
import ServiceSection from "../components/ServiceSection"
import BlogSection from "../components/BlogSection"
import CallToAction2 from "../components/CallToAction2"

const Homepage1 = () => {
  return (
    <>
      <Header />
      <Slideshow />
      <FeatureSection />
      <CallToAction1 />
      <ImageContentSection />
      <ServiceSection />
      <CallToAction2 />
      <BlogSection />
    </>
  )
}

export default Homepage1
