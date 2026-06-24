import Link from 'next/link'
import { Instagram, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Let&apos;s Work <span className="text-[color:var(--primary)]">Together</span>
        </h2>
        
        <p className="text-lg text-[color:var(--muted-foreground)] mb-12 leading-relaxed">
          Saya senang belajar dan mengeksplorasi hal-hal baru di bidang teknologi. 
          Jika ingin berdiskusi, berbagi ide, atau sekadar terhubung dan berkolaborasi dalam sebuah project, 
          jangan ragu untuk menghubungi saya.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full border-2 border-[color:var(--border)] bg-[color:var(--input)] focus:outline-none focus:border-[color:var(--primary)] transition-colors"
          />
          <button className="btn-primary">
            Send Message
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-[color:var(--foreground)] mb-2">Email</h3>
            <p className="text-[color:var(--muted-foreground)]">delvikhaiiirr1203@gmail.com</p>
            <p className="text-[color:var(--muted-foreground)]">delvirakhulkhairat12@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-[color:var(--foreground)] mb-2">Phone</h3>
            <p className="text-[color:var(--muted-foreground)]">082261525352</p>
          </div>
          <div>
            <h3 className="font-semibold text-[color:var(--foreground)] mb-2">Location</h3>
            <p className="text-[color:var(--muted-foreground)]">Padang, Sumatera Barat</p>
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          <Link
            href="https://www.instagram.com/delvira.kh?igsh=OTdmdnM0Zzc0ZHZp"
            target="_blank"
            className="w-10 h-10 rounded-full bg-[color:var(--quaternary)] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          >
            <Instagram size={20} />
          </Link>

          <Link
            href="www.linkedin.com/in/delvira-khulkhairat-7406381bb"
            target="_blank"
            className="w-10 h-10 rounded-full bg-[color:var(--tertiary)] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
