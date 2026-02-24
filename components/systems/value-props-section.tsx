"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const flyWheelNodes = [
  {
    id: "create",
    title: "Create",
    description: "Personalized at scale. Launch ready in minutes",
    position: "top-left" as const,
  },
  {
    id: "connect",
    title: "Connect",
    description: "Your content, feeds, & assets, all in one place",
    position: "top-right" as const,
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Every channel from one system. Display, social, video, DOOH",
    position: "bottom-right" as const,
  },
  {
    id: "optimize",
    title: "Optimize",
    description: "Element-level insights you can act on now",
    position: "bottom-left" as const,
  },
]

// Arrow path segments for each node - the arrow leading INTO that node highlights
const arrowSegments = [
  { id: "create", path: "M 200 265 Q 230 155 340 130", arrow: "335,135 335,125 348,130", highlightNode: "create" },
  { id: "connect", path: "M 410 130 Q 530 155 555 265", arrow: "550,260 560,260 555,273", highlightNode: "connect" },
  { id: "deliver", path: "M 545 345 Q 520 445 410 475", arrow: "415,470 415,480 402,475", highlightNode: "deliver" },
  { id: "optimize", path: "M 345 475 Q 230 445 205 345", arrow: "200,350 210,350 205,337", highlightNode: "optimize" },
]

export function ValuePropsSection() {
  const [activeNode, setActiveNode] = useState("create")

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
          Give your creative the same power you give your media
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
          Content in, creative out, with insights to keep improving.
        </p>
      </div>

      {/* Flywheel Cycle Diagram */}
      <div className="max-w-5xl mx-auto">
        {/* Desktop: interactive cycle diagram */}
        <div className="hidden md:block relative" style={{ height: 620 }}>
          {/* SVG arrows */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 760 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Orbit circle */}
            <circle
              cx="380"
              cy="305"
              r="185"
              stroke="#d4d4d8"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />

            {arrowSegments.map((seg) => {
              const isActive = activeNode === seg.highlightNode
              return (
                <g key={seg.id}>
                  <path
                    d={seg.path}
                    stroke={isActive ? "#6B7280" : "#d4d4d8"}
                    strokeWidth={isActive ? 3 : 1.5}
                    fill="none"
                    opacity={isActive ? 0.9 : 0.35}
                    className="transition-all duration-500"
                  />
                  <polygon
                    points={seg.arrow}
                    fill={isActive ? "#6B7280" : "#d4d4d8"}
                    opacity={isActive ? 0.9 : 0.4}
                    className="transition-all duration-500"
                  />
                </g>
              )
            })}
          </svg>

          {/* Center hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-28 h-28 rounded-full bg-[#e8e8ea] border-4 border-[#d4d4d8] flex items-center justify-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#d4d4d8] flex items-center justify-center">
                <Plus className="w-8 h-8 text-[#6B7280]" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Node labels positioned around the orbit */}
          {flyWheelNodes.map((node) => {
            const isActive = activeNode === node.id
            const positionClasses = {
              "top-left": "left-[40px] top-[80px]",
              "top-right": "right-[40px] top-[80px]",
              "bottom-right": "right-[40px] bottom-[60px]",
              "bottom-left": "left-[40px] bottom-[60px]",
            }
            const alignClasses = {
              "top-left": "text-left",
              "top-right": "text-right",
              "bottom-right": "text-right",
              "bottom-left": "text-left",
            }

            return (
              <button
                type="button"
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`absolute ${positionClasses[node.position]} ${alignClasses[node.position]} max-w-[200px] cursor-pointer transition-all duration-500 bg-transparent border-none p-0 ${
                  isActive ? "opacity-100" : "opacity-35 hover:opacity-60"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-1 transition-colors duration-500 ${
                    isActive ? "text-foreground" : "text-foreground"
                  }`}
                >
                  {node.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-500 ${
                    isActive ? "text-muted-foreground" : "text-muted-foreground"
                  }`}
                >
                  {node.description}
                </p>
              </button>
            )
          })}
        </div>

        {/* Mobile: stacked interactive cards */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Center icon */}
          <div className="w-20 h-20 rounded-full bg-[#e8e8ea] border-4 border-[#d4d4d8] flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#d4d4d8] flex items-center justify-center">
              <Plus className="w-6 h-6 text-[#6B7280]" strokeWidth={2.5} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            {flyWheelNodes.map((node) => {
              const isActive = activeNode === node.id
              return (
                <button
                  type="button"
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`flex flex-col gap-1 rounded-xl border p-5 text-left transition-all duration-400 cursor-pointer bg-transparent ${
                    isActive
                      ? "border-foreground/20 opacity-100"
                      : "border-border opacity-40"
                  }`}
                >
                  <h3 className="text-base font-bold text-foreground">
                    {node.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {node.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center mt-16 text-lg text-muted-foreground">
          The system that gets better{" "}
          <span className="font-semibold text-primary">
            with every campaign
          </span>
        </p>
      </div>
    </section>
  )
}
