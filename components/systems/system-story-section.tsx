"use client"

import { useEffect, useRef, useState } from "react"
import { SystemDiagram } from "./system-diagram"

const frames = [
  {
    headline: "Dynamic Creative. This Is What You're Shopping For.",
    copy: "Content in, creative out, insights to keep improving. Every DCO platform has some version of this.",
  },
  {
    headline: "To Use It, You Need to Connect Your Stuff",
    copy: "Your ad copy, promotions, data feeds, and designs all need to flow into the system.",
  },
  {
    headline: "And Get It Where It Needs to Go",
    copy: "Display, social, video, digital out-of-home — wherever your audience is.",
  },
  {
    headline: "With Logic That Makes It Relevant",
    copy: "DSP audiences, site behavior, business rules — the targeting that makes dynamic creative actually dynamic.",
  },
  {
    headline: "Here's What Competitors Don't Give You",
    copy: "A way for business people to actually interact with the workflow. Order intake, templates, campaign boards, and reporting.",
  },
  {
    headline: "This Is the System",
    copy: "People, process, and technology. Everything you need to launch, update, and prove what's working.",
  },
]

export function SystemStorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFrame, setActiveFrame] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollHeight = container.scrollHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollHeight))
      const frame = Math.min(Math.floor(progress * frames.length), frames.length - 1)
      setActiveFrame(frame)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative" style={{ height: `${frames.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 bg-background">
        <div className="max-w-6xl mx-auto w-full">
          {/* Frame Content */}
          <div className="text-center mb-12">
            <div className="min-h-[120px] flex flex-col items-center justify-center">
              {frames.map((frame, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 max-w-2xl px-4 ${
                    activeFrame === index
                      ? "opacity-100 translate-y-0"
                      : activeFrame > index
                        ? "opacity-0 -translate-y-8"
                        : "opacity-0 translate-y-8"
                  }`}
                >
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">{frame.headline}</h2>
                  <p className="text-lg text-muted-foreground text-balance">{frame.copy}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagram */}
          <SystemDiagram activeFrame={activeFrame + 1} />

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {frames.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeFrame === index ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
