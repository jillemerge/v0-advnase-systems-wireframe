import { HeroSection } from "@/components/systems/hero-section"
import { ValuePropsSection } from "@/components/systems/value-props-section"
import { WhatChangesSection } from "@/components/systems/what-changes-section"
import { HowItWorksSection } from "@/components/systems/how-it-works-section"
import { ServiceModelSection } from "@/components/systems/service-model-section"
import { CTASection } from "@/components/systems/cta-section"

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ValuePropsSection />
      <WhatChangesSection />
      <HowItWorksSection />
      <ServiceModelSection />
      <CTASection />
    </main>
  )
}
