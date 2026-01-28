import { HeroSection } from "@/components/systems/hero-section"
import { ValuePropsSection } from "@/components/systems/value-props-section"
import { SystemStorySection } from "@/components/systems/system-story-section"
import { ThreeStepSection } from "@/components/systems/three-step-section"
import { ServiceModelSection } from "@/components/systems/service-model-section"
import { CTASection } from "@/components/systems/cta-section"

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ValuePropsSection />
      <SystemStorySection />
      <ThreeStepSection />
      <ServiceModelSection />
      <CTASection />
    </main>
  )
}
