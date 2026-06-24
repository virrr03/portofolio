const projects = [
  {
    id: 1,
    title: 'Grocery Mobile App',
    description: 'Aplikasi grosir online berbasis Flutter dengan fitur katalog produk, manajemen keranjang belanja, dan antarmuka mobile yang responsif.',
    tags: ['Flutter', 'Mobile App', 'Firebase', 'UI Design'],
    color: 'primary',
  },
  {
    id: 2,
    title: 'RFID Attendance System Integration',
    description: 'Sistem absensi berbasis RFID yang terintegrasi dengan Laravel untuk pengelolaan data kehadiran secara real-time dan terstruktur.',
    tags: ['Laravel', 'RFID', 'IoT', 'Database'],
    color: 'secondary',
  },
  {
    id: 3,
    title: 'KRI 2024 - Divisi KRAI',
    description: 'Pengembangan koneksi dan komunikasi controller robot menggunakan Stick PS4 pada kontrol robot 1 pada kompetisi KRI 2024 divisi KRAI tingkat nasional.',
    tags: ['Robotics', 'Arduino', 'C++'],
    color: 'accent',
  },
  {
    id: 4,
    title: 'Eye Disease - Sistem klasifikasi Penyakit Mata',
    description: 'Sistem klasifikasi penyakit mata berbasis citra menggunakan model Convolutional Neural Network (CNN) dengan arsitektur MobileNet untuk menghasilkan prediksi penyakit mata.',
    tags: ['Machine Learning', 'python','CNN', 'MobileNet', 'Computer Vision'],
    color: 'quaternary',
  },
  {
    id: 5,
    title: 'Sistem Prediksi Cuaca dengan Model Hibrid RNN-ANFIS',
    description: 'Sistem prediksi cuaca berbasis IoT menggunakan model hybrid RNN-ANFIS untuk memprediksi kondisi cuaca berdasarkan data sensor secara real-time.',
    tags: ['IoT', 'RNN', 'ANFIS', 'Next.js', 'python', 'Arduino'],
    color: 'tertiary',
  },
  
]

const colorMap = {
  primary: '--primary',
  secondary: '--secondary',
  accent: '--accent',
  quaternary: '--quaternary',
  tertiary: '--tertiary',
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Featured <span className="text-[color:var(--primary)]">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: `var(${colorMap[project.color as keyof typeof colorMap]})` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[color:var(--card-foreground)]">
                    {project.title}
                  </h3>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </div>
                
                <p className="text-[color:var(--card-foreground)]/80 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[color:var(--card)] text-[color:var(--foreground)] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
