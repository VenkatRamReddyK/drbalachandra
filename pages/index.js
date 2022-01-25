import LandingPage from '../components/LandingPage'
import Social from '../components/Social'
import Slider from '../components/Slider'
import Services from '../components/Services'
import Features from './../components/Features';
import AnyOther from './../components/AnyOther';
export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <Services />
      <Features />
      <Social />
      <Slider />
      <AnyOther />
    </div>
  )
}
