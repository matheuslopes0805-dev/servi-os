"use client"

export function TechBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Grid pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating lines */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="20%" x2="40%" y2="80%" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
        <line x1="60%" y1="10%" x2="90%" y2="60%" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
        <line x1="20%" y1="90%" x2="80%" y2="30%" stroke="currentColor" strokeWidth="0.5" className="text-primary/15" />
        <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
      </svg>

      {/* Glow circles */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      {/* Dot matrix */}
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Circuit-like elements */}
      <svg className="absolute bottom-0 left-0 h-1/2 w-1/3 opacity-15" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 280 L 20 200 L 80 200 L 80 120 L 140 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
        <circle cx="140" cy="120" r="4" fill="currentColor" className="text-primary" />
        <circle cx="20" cy="280" r="4" fill="currentColor" className="text-primary" />
        <path d="M 60 280 L 60 240 L 120 240 L 120 180" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
        <circle cx="120" cy="180" r="4" fill="currentColor" className="text-primary" />
      </svg>

      <svg className="absolute top-0 right-0 h-1/2 w-1/3 opacity-15" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
        <path d="M 180 20 L 180 100 L 120 100 L 120 180 L 60 180" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
        <circle cx="60" cy="180" r="4" fill="currentColor" className="text-primary" />
        <circle cx="180" cy="20" r="4" fill="currentColor" className="text-primary" />
        <path d="M 140 20 L 140 60 L 80 60 L 80 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
        <circle cx="80" cy="120" r="4" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  )
}
