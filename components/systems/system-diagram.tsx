"use client"

import { Zap, FileText, Database, Palette, Monitor, Share2, Video, Radio, Users, Globe, Briefcase, FileStack, Columns, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SystemDiagramProps {
  activeFrame: number
}

export function SystemDiagram({ activeFrame }: SystemDiagramProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Audience & Messaging Targets - Top */}
      <div
        className={cn(
          "mb-6 transition-all duration-700",
          activeFrame >= 4 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
      >
        <div className="bg-background border border-border rounded-xl p-4 max-w-md mx-auto shadow-sm">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 text-center">
            Audience & Messaging Targets
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <DiagramItem icon={Users} label="DSP Audiences" small />
            <DiagramItem icon={Globe} label="Site Behavior" small />
            <DiagramItem icon={Briefcase} label="Business Rules" small />
          </div>
        </div>
        {/* Connector Line Down */}
        <div className="w-px h-6 bg-primary/40 mx-auto" />
        <div className="w-3 h-3 border-l-2 border-b-2 border-primary/40 rotate-[-45deg] mx-auto -mt-1.5" />
      </div>

      {/* Main Row: Content In → Engine → Creative Out */}
      <div className="flex items-center justify-center gap-4 md:gap-8">
        {/* Content In - Left Side */}
        <div
          className={cn(
            "flex flex-col gap-3 transition-all duration-700",
            activeFrame >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}
        >
          <DiagramItem icon={FileText} label="Ad Copy & Promotions" />
          <DiagramItem icon={Database} label="Data Feeds" />
          <DiagramItem icon={Palette} label="Designs" />
        </div>

        {/* Connector Lines Left */}
        <div
          className={cn(
            "flex flex-col gap-3 transition-all duration-700",
            activeFrame >= 2 ? "opacity-100" : "opacity-0"
          )}
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className="w-8 md:w-16 h-px bg-border" />
              <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-transparent border-l-primary/50" />
            </div>
          ))}
        </div>

        {/* Creative Engine - Center */}
        <div
          className={cn(
            "transition-all duration-700",
            activeFrame >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-primary/10 border-2 border-primary/30 flex flex-col items-center justify-center shadow-lg">
            <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary mb-2" />
            <span className="text-sm md:text-base font-semibold text-foreground">Creative Engine</span>
            <span className="text-xs text-muted-foreground">Advanse</span>
          </div>
        </div>

        {/* Connector Lines Right */}
        <div
          className={cn(
            "flex flex-col gap-3 transition-all duration-700",
            activeFrame >= 3 ? "opacity-100" : "opacity-0"
          )}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-r-[8px] border-transparent border-r-primary/50 rotate-180" />
              <div className="w-8 md:w-16 h-px bg-border" />
            </div>
          ))}
        </div>

        {/* Creative Out - Right Side */}
        <div
          className={cn(
            "flex flex-col gap-3 transition-all duration-700",
            activeFrame >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}
        >
          <DiagramItem icon={Monitor} label="Display" />
          <DiagramItem icon={Share2} label="Social" />
          <DiagramItem icon={Video} label="Video" />
          <DiagramItem icon={Radio} label="DOOH" />
        </div>
      </div>

      {/* Business Process - Bottom (The Key Reveal) */}
      <div
        className={cn(
          "mt-6 transition-all duration-700",
          activeFrame >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        {/* Connector Line Up */}
        <div className="w-3 h-3 border-r-2 border-t-2 border-primary/40 rotate-[-45deg] mx-auto mb-[-6px]" />
        <div className="w-px h-6 bg-primary/40 mx-auto" />
        
        <div
          className={cn(
            "bg-primary/5 border-2 rounded-xl p-4 max-w-lg mx-auto shadow-md",
            activeFrame >= 5 ? "border-primary/50 shadow-primary/10" : "border-border"
          )}
        >
          <p className="text-xs font-medium text-primary uppercase tracking-wide mb-3 text-center">
            Business Process
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <DiagramItem icon={FileStack} label="Order Intake" small highlight={activeFrame >= 5} />
            <DiagramItem icon={Columns} label="Template Library" small highlight={activeFrame >= 5} />
            <DiagramItem icon={Briefcase} label="Campaign Boards" small highlight={activeFrame >= 5} />
            <DiagramItem icon={BarChart3} label="Reporting" small highlight={activeFrame >= 5} />
          </div>
        </div>
      </div>
    </div>
  )
}

function DiagramItem({
  icon: Icon,
  label,
  small,
  highlight,
}: {
  icon: typeof Zap
  label: string
  small?: boolean
  highlight?: boolean
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-background rounded-lg border px-3 py-2 shadow-sm",
        small ? "text-xs" : "text-sm",
        highlight ? "border-primary/40 bg-primary/5" : "border-border"
      )}
    >
      <Icon className={cn("text-primary shrink-0", small ? "w-3.5 h-3.5" : "w-4 h-4")} />
      <span className="whitespace-nowrap font-medium">{label}</span>
    </div>
  )
}
