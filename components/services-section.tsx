"use client"

import { useState } from "react"
import { Monitor, ShoppingCart, Layout, ExternalLink } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão projetadas para capturar leads e transformar visitantes em clientes. Design persuasivo e otimizado para resultados.",
    features: ["Alta conversão", "SEO otimizado", "Design responsivo"]
  },
  {
    icon: Monitor,
    title: "Sites Institucionais",
    description: "Presença digital profissional para sua empresa. Sites elegantes que transmitem credibilidade e fortalecem sua marca no mercado.",
    features: ["Design exclusivo", "CMS integrado", "Múltiplas páginas"]
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description: "E-commerce completo para vender online. Plataformas robustas com gestão de produtos, pagamentos e integração com marketplaces.",
    features: ["Pagamento seguro", "Gestão de estoque", "Integrações"]
  }
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="servicos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            O que faço
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em desenvolvimento web para cada necessidade do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={scrollToContact}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-left transition-all duration-300 hover:border-primary/50 hover:bg-card/80 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-lg bg-primary/5 opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : ''}`} />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
