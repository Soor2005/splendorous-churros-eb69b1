import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/terms')({
  component: Terms,
})

function Terms() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-40">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-6 leading-relaxed text-white/60">
          By joining the Flow Ledger beta and using the application, you agree to use
          it responsibly and in accordance with applicable laws. Full terms of
          service will be published here before general release.
        </p>
      </main>
      <Footer />
    </div>
  )
}
