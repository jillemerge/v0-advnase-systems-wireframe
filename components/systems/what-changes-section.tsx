import { Clock, Settings, BarChart3 } from "lucide-react"

const advantages = [
  {
    icon: Clock,
    title: "Get Time Back",
    description: "Launch in hours. Update in minutes. On your timeline.",
  },
  {
    icon: Settings,
    title: "You're in Control",
    description:
      "Make changes directly. No specialists, no gatekeepers, no waiting.",
  },
  {
    icon: BarChart3,
    title: "Proof, Not Guesswork",
    description: "See exactly what's working and act on it today.",
  },
]

export function WhatChangesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-foreground text-balance">
          The advantages that come standard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-[#27272A] rounded-2xl p-7 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3F3F46] flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-[#A1A1AA]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
