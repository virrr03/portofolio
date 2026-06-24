export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <span className="inline-block px-4 py-2 rounded-full bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Delvira
          <span className="block text-[color:var(--primary)]">Khulkhairat</span>
          {/* <span className="block">Developer</span> */}
        </h1>
        
        <p className="text-lg sm:text-xl text-[color:var(--muted-foreground)] mb-12 max-w-2xl mx-auto leading-relaxed">
          Mahasiswa Pendidikan Teknik Informatika yang memiliki minat dalam pengembangan perangkat lunak dan teknologi informasi
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            View My Work
          </button>
          {/* <button className="btn-accent">
            Get in Touch
          </button> */}
        </div>

        {/* Decorative elements */}
        
        {/* <div className="mt-20 flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Experience
          </h2>

          <div className="p-6 rounded-2xl bg-[color:var(--secondary)]/20 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[color:var(--primary)] mb-2">
                Anggota Teknis Robotika
              </h3>
              <p className="font-bold text-[color:var(--muted-foreground)] mb-2">
                Unit Kegiatan Robotika Universitas Negeri Padang
              </p>
              <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                Berperan sebagai anggota teknis pada bidang pemrograman robot dengan fokus pada pengembangan sistem kontrol, mikrokontroler.
              </p>
            </div>

            <div className="text-sm text-[color:var(--primary)] font-medium whitespace-nowrap">
              2023 - Sekarang
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[color:var(--accent)]/20 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[color:var(--accent)] mb-2">
                Koordinator Tim Teknis
              </h3>
              <p className="font-bold text-[color:var(--muted-foreground)] mb-2">
                Unit Kegiatan Robotika Universitas Negeri Padang
              </p>
              <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                menyusun perencanaan riset jangka panjang dan pendek, mengatur alur roadmap riset tim, serta mengevaluasi progres riset anggota tim secara berkala.
              </p>
            </div>

            <div className="text-sm text-[color:var(--accent)] font-medium whitespace-nowrap">
              Sep 2024 - Jan 2025
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[color:var(--quaternary)]/20 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[color:var(--quaternary)] mb-2">
                Bendahara Umum 1
              </h3>
              <p className="font-boldtext-[color:var(--muted-foreground)] mb-2">
                Unit Kegiatan Robotika Universitas Negeri Padang
              </p>
              <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                Bertanggung jawab dalam pengelolaan administrasi dan keuangan ekstrnal organisasi.
              </p>
            </div>

            <div className="text-sm text-[color:var(--quaternary)] font-medium whitespace-nowrap">
              Jan 2025 - Jan 2026
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[color:var(--primary)]/20 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[color:var(--primary)] mb-2">
                Peserta MSIB PT Stechoq Robotika Indonesia
              </h3>
              <p className="font-bold text-[color:var(--muted-foreground)] mb-2">
                PT Stechoq Robotika Indonesia - Yogyakarta
              </p>
              <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                Mengikuti program Studi Independent bersertifikat dengan fokus pada bidang Artificial intelligence for medical
              </p>
            </div>

            <div className="text-sm text-[color:var(--primary)] font-medium whitespace-nowrap">
              Sep 2024 - Des 2025
            </div>
          </div>

        </div> */}
      </div>
    </section>
  )
}
