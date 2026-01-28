"use client"

import { Mail, MessageCircle, Instagram, ArrowUpRight } from "lucide-react"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "matheuslopes0805@gmail.com",
    href: "mailto:matheuslopes0805@gmail.com"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 (21) 99957-1526",
    href: "https://wa.me/5521999571526"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@matheuslp1",
    href: "https://www.instagram.com/matheuslp1?igsh=OTllcm9hN205Nno1&utm_source=qr"
  }
]

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Vamos conversar
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
            >
              <div className="absolute top-4 right-4 opacity-0 -translate-x-2 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
              <p className="text-foreground font-medium break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* CTA Message */}
        <div className="mt-16 text-center p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm">
          <p className="text-xl md:text-2xl text-foreground font-medium mb-4">
            Seu projeto ou sonho começa aqui
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada grande jornada digital começa com uma conversa. 
            Estou pronto para ouvir suas ideias e transformá-las em realidade.
          </p>
        </div>
      </div>
    </section>
  )
}
