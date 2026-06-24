import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--background)]/80 border-b border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[color:var(--primary)]">Port</span>
          <span className="text-[color:var(--accent)]">folio</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="btn-primary text-sm">
            Contact
          </Link>
        </nav>

        <button className="md:hidden p-2 rounded-lg hover:bg-[color:var(--muted)]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
