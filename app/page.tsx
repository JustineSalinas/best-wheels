import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import InventorySection from '@/components/InventorySection'
import Tagline from '@/components/Tagline'
import WhyUs from '@/components/WhyUs'
import BenefitsSection from '@/components/BenefitsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <InventorySection />
        <Tagline />
        <WhyUs />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
