import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
})

function Privacy() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-40">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 leading-relaxed text-white/60">
          Flow Ledger is currently in closed beta. The app tracks activity locally on
          your device first, to generate productivity insights, and we do not sell
          your data. A full, detailed privacy policy will be published here before
          public launch.
        </p>
      </main>
      <Footer />
    </div>
  )
}
