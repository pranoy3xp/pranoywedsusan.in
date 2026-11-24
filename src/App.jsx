import Hero from './components/Hero.jsx'
import Invitation from './components/Invitation.jsx'
import Celebrations from './components/Celebrations.jsx'
import Blessing from './components/Blessing.jsx'
import Countdown from './components/Countdown.jsx'
import Wishes from './components/Wishes.jsx'
import Footer from './components/Footer.jsx'
import MusicToggle from './components/MusicToggle.jsx'
import FloatingPetals from './components/FloatingPetals.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <FloatingPetals />
      <main>
        <Hero />
        <Invitation />
        <Celebrations />
        <Blessing />
        <Countdown />
        <Wishes />
      </main>
      <Footer />
      <MusicToggle />
    </>
  )
}
