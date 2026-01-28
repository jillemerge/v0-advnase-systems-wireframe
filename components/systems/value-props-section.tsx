import { Clock, ArrowLeftRight, Unlock, BarChart3 } from "lucide-react"

const valueProps = [
  {
    icon: Clock,
    title: "Time Back",
    description: "Launch in hours, not months. Update in minutes, not weeks.",
  },
  {
    icon: ArrowLeftRight,
    title: "Control Shifts",
    description: "Business users make changes directly. No specialists required.",
  },
  {
    icon: Unlock,
    title: "Access, Not Gatekeeping",
    description: "Self-service that actually means you can do it yourself.",
  },
  {
    icon: BarChart3,
    title: "Proof, Not Guesswork",
    description: "Element-level insights so you know what's working.",
  },
]

export function ValuePropsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">
          What Changes When You Have a Real System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <prop.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
