import Image from "next/image"
export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[color:var(--background)] to-[color:var(--muted)]/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          About <span className="text-[color:var(--primary)]">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--tertiary)] p-1">
              <div className="bg-[color:var(--background)] rounded-3xl p-4 h-96 flex items-center justify-center">
                <Image
                  src="/saya3.png"
                  alt="Foto Saya"
                  width={340}
                  height={340}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-[color:var(--muted-foreground)] mb-6 leading-relaxed">
              Mahasiswa Pendidikan Teknik Informatika yang memiliki minat dalam pengembangan perangkat lunak dan teknologi 
              informasi. Memiliki dasar pemrograman serta kemampuan problem solving dalam menyelesaikan permasalahan program 
              secara logis dan terstruktur. Terbiasa mempelajari teknologi baru, mampu bekerja secara terorganisir, serta 
              memiliki kemampuan komunikasi dan kerja sama tim yang baik.
            </p>
            
            {/* <p className="text-lg text-[color:var(--muted-foreground)] mb-8 leading-relaxed">
              Aktif sebagai anggota teknis di organisasi robotik Universitas Negeri Padang dengan fokus sebagai programmer robot,
              khususnya dalam pengembangan sistem berbasis mikrokontroler, dan integrasi perangkat lunak dengan perangkat keras. 
              Memiliki ketertarikan pada bidang machine learning, artificial intelligence, computer vision, serta pengolahan data, 
              yang dikembangkan melalui project perkuliahan maupun project pribadi. Memiliki semangat belajar yang tinggi dan 
              antusias untuk terus mengembangkan kemampuan di bidang teknologi dan inovasi digital.
            </p> */}
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[color:var(--primary)] flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground)] mb-1">Robotics</h3>
                  <p className="text-[color:var(--muted-foreground)]">
                    Fokus pada pengembangan robot sebagai programmer, termasuk sistem kontrol, mikrokontroler, 
                    dan integrasi perangkat keras dengan perangkat lunak.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[color:var(--accent)] flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground)] mb-1">IoT Systems</h3>
                  <p className="text-[color:var(--muted-foreground)]">
                    Mengembangkan sistem berbasis Internet of Things (IoT) menggunakan sensor, ESP32, monitoring data, 
                    dan komunikasi perangkat secara real-time
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[color:var(--quaternary)] flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-[color:var(--foreground)] mb-1">Machine Learning</h3>
                  <p className="text-[color:var(--muted-foreground)]">
                    Pengolahan data untuk membangun sistem prediksi, computer vision, dan analisis data berbasis AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-6">
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

        </div>
    </section>
  )
}
