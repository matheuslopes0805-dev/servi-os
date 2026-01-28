"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Desenvolvedor Web
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Matheus Lopes
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Especialista em Criação de Sites
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Transformo suas ideias em realidade. A inovação e a elegância da tecnologia dando uma nova cara à sua empresa.   
          Design moderno, elegante, tudo o que uma empresa precisa. Resultados que impulsionam seu negócio!
        </p>
        
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            Faça seu Orçamento
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
