"use client"

import { useState } from "react"
import { Monitor } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Fashion",
    category: "Loja Virtual",
    color: "from-cyan-500/20 to-blue-500/20",
    image: "/portfolio/ecommerce.jpg"
  },
  {
    title: "Escritório de Advocacia",
    category: "Site Institucional",
    color: "from-emerald-500/20 to-teal-500/20",
    image: "/portfolio/lawfirm.jpg"
  },
  {
    title: "Startup Tech",
    category: "Landing Page",
    color: "from-blue-500/20 to-indigo-500/20",
    image: "/portfolio/startup.jpg"
  }
]

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Trabalhos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Portfólio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de projetos que demonstram qualidade, criatividade e atenção aos detalhes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/3] rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
              
              {/* Browser Mockup */}
              <div className="absolute inset-4 rounded-md border border-border/50 bg-background/80 flex flex-col overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/50 border-b border-border/50">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-2">
                    <div className="h-4 w-32 mx-auto rounded bg-muted/50" />
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="flex-1 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Overlay on hover */}
              <div className={`absolute inset-0 bg-background/90 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center p-4">
                  <Monitor className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
                  <span className="text-sm text-primary">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
