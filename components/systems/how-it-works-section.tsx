const steps = [
  {
    number: "01",
    title: "We Build It",
    description:
      "We configure your templates, connect your content sources, and set up your creative supply chain. You don't touch a platform. You don't learn software.",
    imagePlaceholder: "Platform screenshot — template configuration",
    imagePosition: "left" as const,
  },
  {
    number: "02",
    title: "You Launch It",
    description:
      "Your team picks from your template library, makes changes in Business Studio, and launches campaigns across every channel. Minutes, not months.",
    imagePlaceholder: "Platform screenshot — Business Studio",
    imagePosition: "right" as const,
  },
  {
    number: "03",
    title: "It Gets Smarter",
    description:
      "Every campaign generates insights. See what's working down to the element level. Update creative in real time. Your system improves with every campaign.",
    imagePlaceholder: "Platform screenshot — performance dashboard",
    imagePosition: "left" as const,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Dynamic Done With You
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-24 md:gap-32">
          {steps.map((step) => {
            const imageBlock = (
              <div className="flex-1 min-w-0">
                <div className="aspect-video rounded-2xl bg-secondary border border-border flex items-center justify-center">
                  <p className="text-sm text-muted-foreground px-6 text-center">
                    {step.imagePlaceholder}
                  </p>
                </div>
              </div>
            )

            const textBlock = (
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <span className="text-sm font-mono font-semibold text-primary mb-3">
                  {step.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            )

            return (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
              >
                {step.imagePosition === "left" ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
