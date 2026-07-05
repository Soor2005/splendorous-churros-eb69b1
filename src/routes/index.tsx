import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { ProductPreview } from '../components/ProductPreview'
import { Features } from '../components/Features'
import { HowItWorks } from '../components/HowItWorks'
import { Stats } from '../components/Stats'
import { Roadmap } from '../components/Roadmap'
import { BuiltFor } from '../components/BuiltFor'
import { BetaProgram } from '../components/BetaProgram'
import { FAQ } from '../components/FAQ'
import { PrivacyPromise } from '../components/PrivacyPromise'
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
        <ProductPreview />
        <Features />
        <HowItWorks />
        <Stats />
        <Roadmap />
        <BuiltFor />
        <BetaProgram />
        <FAQ />
        <PrivacyPromise />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
