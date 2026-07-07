import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { Countdown } from '../components/Countdown'
import { Features } from '../components/Features'
import { ProductPreview } from '../components/ProductPreview'
import { HowItWorks } from '../components/HowItWorks'
import { Stats } from '../components/Stats'
import { BuiltFor } from '../components/BuiltFor'
import { Roadmap } from '../components/Roadmap'
import { BetaProgram } from '../components/BetaProgram'
import { PrivacyFirst } from '../components/PrivacyFirst'
import { FAQ } from '../components/FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <Countdown />
        <Features />
        <ProductPreview />
        <HowItWorks />
        <Stats />
        <BuiltFor />
        <Roadmap />
        <BetaProgram />
        <PrivacyFirst />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
