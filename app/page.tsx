import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import InventorySection from '@/components/InventorySection'
import HowToBuySection from '@/components/HowToBuySection'
import FinancingCalculator from '@/components/FinancingCalculator'
import TestimonialsSection from '@/components/TestimonialsSection'
import BankPartnersStrip from '@/components/BankPartnersStrip'
import Tagline from '@/components/Tagline'
import WhyUs from '@/components/WhyUs'
import BenefitsSection from '@/components/BenefitsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <HowToBuySection />
        <InventorySection />
        <FinancingCalculator />
        <TestimonialsSection />
        <BankPartnersStrip />
        <Tagline />
        <WhyUs />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
      <ScrollToTop />
    </>
  )
}
