export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--muted)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-[color:var(--foreground)] mb-4">Portfolio</h3>
            <p className="text-[color:var(--muted-foreground)] text-sm">
              Creating beautiful digital experiences with design and development.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-[color:var(--foreground)] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">About</a></li>
              <li><a href="#projects" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[color:var(--foreground)] mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              
              <li><a href="#" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">Linkedin</a></li>
              <li><a href="#" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[color:var(--border)] pt-8 text-center text-sm text-[color:var(--muted-foreground)]">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
