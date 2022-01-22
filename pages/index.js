import Head from 'next/head'
import Navigation from '../components/Navigation'
import LandingPage from '../components/LandingPage'
import Social from '../components/Social'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Services from '../components/Services'
export default function Home() {
  return (
    <div className="">
      <Navigation />
      <LandingPage />
      <Services />
      <Social />
      <Slider />
      <Footer />
    </div>
  )
}
