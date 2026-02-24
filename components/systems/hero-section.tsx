"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 relative bg-[#1C1C1E] overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-2xl relative z-10">
        <p className="text-sm font-semibold tracking-wide uppercase mb-5 text-[#E879A8]">
          More Than DCO
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] text-balance">
          Creative freedom without creative complexity
        </h1>

        <p className="text-lg md:text-xl text-[#A1A1AA] mb-10 leading-relaxed max-w-lg">
          A complete system built around your workflow, not a platform you have to figure out.
        </p>

        <Button
          size="lg"
          className="text-base px-8 py-5 h-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Get Started
        </Button>
      </div>
    </section>
  )
}
