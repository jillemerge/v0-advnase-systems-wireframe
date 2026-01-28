import { Settings, LayoutGrid, Monitor, ArrowRight, Database, Briefcase, Sparkles, Share2 } from "lucide-react"

const steps = [
  {
    badge: "We Remove the Complexity",
    icon: Settings,
    title: "Advanse CS Team",
    description: "We build templates to your specs.",
  },
  {
    badge: "Templates Make It Simple",
    icon: LayoutGrid,
    title: "Template Library",
    description: "We publish them to your template library.",
  },
  {
    badge: "You Get Creative Freedom",
    icon: Monitor,
    title: "Business Studio",
    description: "Business teams get creative on demand and update when they want.",
  },
]

const workflowItems = [
  { icon: Database, label: "Content Sources" },
  { icon: Briefcase, label: "Business Rules" },
  { icon: Sparkles, label: "AI" },
  { icon: Share2, label: "Distribution" },
]

export function ThreeStepSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Dynamic Done With You</h2>
          <p className="text-lg text-muted-foreground text-balance">
            We remove the complexity. You get creative freedom.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-card rounded-xl border border-border p-6 h-full shadow-sm">
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {step.badge}
                </span>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-background rounded-full border border-border items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Workflow Hub Foundation */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:w-1/3">
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                And We Make Exact Fit to Your Workflow
              </span>
              <h3 className="text-xl font-semibold">Workflow Hub</h3>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workflowItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-background rounded-lg border border-border px-4 py-3"
                  >
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
