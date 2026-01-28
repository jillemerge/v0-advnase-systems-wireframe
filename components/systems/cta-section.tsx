import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
          See It Work. Then Decide.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 text-balance leading-relaxed">
          No 60-day implementation. No 12-month contract. $0 setup.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-primary mb-10">
          <span>$950/month</span>
          <span className="text-base font-normal text-muted-foreground">· Cancel anytime</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6 h-auto w-full sm:w-auto">
            Get Started
          </Button>
          <Link
            href="#"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Template Library →
          </Link>
        </div>
      </div>
    </section>
  )
}
