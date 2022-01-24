import Head from 'next/head'
import Navigation from '../components/Navigation'
import LandingPage from '../components/LandingPage'
import Social from '../components/Social'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Features from './../components/Features';
export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <Services />
      <Features/>
      <Social />
      <Slider />
    </div>
  )
}
