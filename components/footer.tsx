export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              ML<span className="text-primary">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              Matheus Lopes
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Transformando ideias em realidade
          </p>
          
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
