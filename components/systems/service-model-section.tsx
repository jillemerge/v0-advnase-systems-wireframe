import { Users, Wrench, ArrowUpRight, Clock } from "lucide-react"

export function ServiceModelSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              The Perfect Blend of Tech and Service
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Once you launch, we don't disappear. Our team builds and maintains your templates, handles requests on demand, and keeps your library growing. This isn't customer support — it's team extension.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-primary" />
                </div>
                <span>Template builds</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span>On-demand requests</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
                <span>Continuous growth</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-background rounded-2xl border border-border p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Your Extended Team</h3>
                  <p className="text-sm text-muted-foreground">Always available, always improving</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm">Template maintenance</span>
                  <span className="text-xs text-primary font-medium">Included</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm">Custom requests</span>
                  <span className="text-xs text-primary font-medium">Included</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm">Library expansion</span>
                  <span className="text-xs text-primary font-medium">Included</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
