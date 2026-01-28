"use client"

import { Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-wide text-primary uppercase mb-4">
          The Dynamic Creative System
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          More Than DCO
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed">
          Everyone sells you dynamic creative. We give you a system to actually use it.
        </p>
        
        <div className="mb-16">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Zap className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <Button size="lg" className="text-lg px-8 py-6 h-auto">
          Get Started
        </Button>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
      </div>
    </section>
  )
}
