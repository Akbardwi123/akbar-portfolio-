export type Lang = 'id' | 'en';

export const personalInfo = {
  name: 'Akbar Dwi Pebriansyah',
  title: {
    id: 'Junior Web Developer | Laravel & Node.js',
    en: 'Junior Web Developer | Laravel & Node.js',
  },
  tagline: {
    id: 'Membangun Solusi Digital yang Berdampak',
    en: 'Building Digital Solutions That Matter',
  },
  subtitle: {
    id: 'Siswa SMK dengan pengalaman nyata membangun aplikasi web end-to-end menggunakan Laravel dan Node.js.',
    en: 'Vocational student with real-world experience building end-to-end web applications using Laravel and Node.js.',
  },
  phone: '+6281212845581',
  email: 'akbardwipebriansyah@gmail.com',
  github: 'github.com/Akbardwi123',
  githubUrl: 'https://github.com/Akbardwi123',
  location: {
    id: 'Pangandaran, Jawa Barat',
    en: 'Pangandaran, West Java, Indonesia',
  },
  whatsapp: 'https://wa.me/6281212845581',
};

export const stats = [
  { value: '4', label: { id: 'Bulan Magang', en: 'Months Internship' }, suffix: '' },
  { value: '1300', label: { id: 'Git Commits', en: 'Git Commits' }, suffix: '+' },
  { value: '3', label: { id: 'Proyek Aktif', en: 'Active Projects' }, suffix: '' },
  { value: '14', label: { id: 'Branch Aktif', en: 'Active Branches' }, suffix: '' },
];

export const about = {
  title: { id: 'Tentang Saya', en: 'About Me' },
  description: {
    id: `Saya adalah siswa tingkat akhir SMK jurusan Pengembangan Perangkat Lunak dan Gim dengan pengalaman nyata membangun aplikasi web end-to-end. Selama 4 bulan magang di lingkungan kerja profesional, saya terlibat langsung dalam proses perencanaan, pengembangan, hingga pengujian fitur menggunakan Laravel dan Node.js.`,
    en: `I am a final-year vocational school student majoring in Software and Game Development with real-world experience building end-to-end web applications. During my 4-month internship in a professional environment, I was directly involved in planning, developing, and testing features using Laravel and Node.js.`,
  },
  description2: {
    id: `Saya memiliki pemahaman kuat pada pengelolaan data berstandar industri serta pendekatan problem-solving yang terstruktur. Selalu proaktif dalam mempelajari teknologi baru dan siap berkontribusi dalam tim yang dinamis.`,
    en: `I have a strong understanding of industry-standard data management and a structured problem-solving approach. Always proactive in learning new technologies and ready to contribute to a dynamic team.`,
  },
};

export const experiences = [
  {
    id: 1,
    role: { id: 'Junior Web Developer (Magang)', en: 'Junior Web Developer (Internship)' },
    company: 'PT CIGS Indonesia Digital',
    location: { id: 'Cimahi Tengah, Jawa Barat', en: 'Cimahi Tengah, West Java' },
    period: 'Nov 2025 – Feb 2026',
    duration: { id: '4 Bulan', en: '4 Months' },
    project: 'RentDago',
    projectDesc: { id: 'Platform penyewaan multimedia', en: 'Multimedia rental platform' },
    highlights: {
      id: [
        'Mengembangkan platform penyewaan multimedia "RentDago" dalam tim 5 developer dengan alur kerja Git standar industri (1.300+ commits, 14 branch aktif).',
        'Bertanggung jawab penuh pada modul manajemen inventaris secara full-stack menggunakan Laravel dan Blade Template.',
        'Merancang dan mengoptimalkan fitur CRUD barang, pengelolaan kategori, serta sistem pelacakan ketersediaan barang secara real-time.',
        'Mengeksekusi pengujian berkala dan perbaikan bug intensif pada lingkungan staging sebelum dirilis ke produksi.',
      ],
      en: [
        'Developed "RentDago" multimedia rental platform in a 5-developer team using industry-standard Git workflow (1,300+ commits, 14 active branches) with pull requests and code reviews.',
        'Took full ownership of the inventory management module full-stack using Laravel and Blade Template.',
        'Designed and optimized item CRUD features, category management, and real-time item availability tracking system.',
        'Executed periodic testing and intensive bug fixing in staging environment before releasing to production.',
      ],
    },
    tech: ['Laravel', 'PHP', 'Blade Template', 'MySQL', 'Git', 'GitHub'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'WA Gateway SaaS Dashboard',
    date: { id: 'Maret 2026', en: 'March 2026' },
    featured: true,
    github: 'https://github.com/Akbardwi123/wa-gateway-saas',
    description: {
      id: 'Platform SaaS manajemen & otomasi WhatsApp massal berbasis arsitektur dual-service: Laravel 12 (Dashboard Utama & Payment Gateway) dan Node.js Express (WhatsApp Gateway Microservice).',
      en: 'WhatsApp mass message automation & management SaaS platform powered by a dual-service architecture: Laravel 12 (Main Dashboard & Payment Gateway) and Node.js Express (WhatsApp Gateway Microservice).',
    },
    highlights: {
      id: [
        'Mengembangkan sistem penagihan otomatis yang terintegrasi langsung dengan Payment Gateway Xendit SDK.',
        'Merancang microservice Node.js menggunakan library @whiskeysockets/baileys untuk penanganan WebSocket WhatsApp Web API secara efisien.',
        'Membangun komunikasi status koneksi WhatsApp & notifikasi real-time via Laravel Reverb (Websockets) dan Laravel Echo.',
        'Menerapkan antrean asinkron (Laravel Queue Database Driver) untuk optimasi transaksi pengiriman pesan massal.',
      ],
      en: [
        'Developed automated subscription billing integrated with Xendit Payment Gateway SDK.',
        'Designed a Node.js Express microservice using @whiskeysockets/baileys for efficient WhatsApp Web WebSocket connection handling.',
        'Built real-time connection status updates & notifications using Laravel Reverb (Websockets) and Laravel Echo.',
        'Applied asynchronous queue processing via Laravel Queue to manage bulk messaging throughput efficiently.',
      ],
    },
    tech: ['Laravel 12', 'Node.js', 'Express.js', 'Websockets (Reverb)', 'MySQL', 'Xendit API', 'Baileys API', 'Tailwind CSS', 'Alpine.js'],
    icon: '💬',
  },
  {
    id: 2,
    title: 'Mock API Generator',
    date: { id: 'April 2026', en: 'April 2026' },
    featured: false,
    github: 'https://github.com/Akbardwi123/mock-api-generator',
    description: {
      id: 'Developer tool berbasis Node.js (TypeScript) untuk membuat mock API endpoint secara mandiri tanpa dependensi penuh pada backend.',
      en: 'Node.js (TypeScript)-based developer tool to create mock API endpoints independently without full backend dependency.',
    },
    highlights: {
      id: [
        'Mendukung metode HTTP lengkap (GET, POST, PUT, DELETE) dengan konfigurasi response yang fleksibel.',
        'Memangkas waktu tunggu antar tim frontend dan backend agar pengembangan berjalan paralel.',
        'Mempercepat siklus pengembangan dengan mengeliminasi bottleneck ketergantungan antar tim.',
      ],
      en: [
        'Supports full HTTP methods (GET, POST, PUT, DELETE) with flexible response data configuration.',
        'Reduced wait time between frontend and backend teams enabling parallel development cycles.',
        'Accelerated feature development by eliminating cross-team dependency bottlenecks.',
      ],
    },
    tech: ['Node.js', 'TypeScript', 'REST API', 'Developer Tools'],
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Aplikasi Pengaduan Sarana Sekolah',
    date: { id: 'Februari 2026', en: 'February 2026' },
    featured: false,
    github: 'https://github.com/Akbardwi123/Aplikasi-Pengaduan-Sarana-Sekolah',
    description: {
      id: 'Sistem manajemen keluhan fasilitas sekolah dengan autentikasi multi-role, dashboard admin, dan pelacakan status pengaduan.',
      en: 'School facility complaint management system with multi-role authentication, admin dashboard, and complaint status tracking.',
    },
    highlights: {
      id: [
        'Membangun sistem keluhan fasilitas dengan autentikasi multi-role dan dashboard admin.',
        'Mengimplementasikan pelacakan status pengaduan bertahap untuk transparansi antara siswa, guru, dan manajemen.',
        'Menambahkan fitur pelaporan dan notifikasi digital untuk akuntabilitas penanganan keluhan.',
      ],
      en: [
        'Built facility complaint system with multi-role authentication and admin dashboard.',
        'Implemented step-by-step complaint status tracking for transparency between students, teachers, and management.',
        'Added digital reporting and notification features for complaint handling accountability.',
      ],
    },
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade Template', 'Bootstrap'],
    icon: '🏫',
  },
];

export const certifications = [
  {
    id: 1,
    title: {
      id: 'Pemrograman Dasar Berstandar Industri',
      en: 'Industry-Standard Basic Programming',
    },
    type: { id: 'Sertifikat Industri', en: 'Industry Certificate' },
    issuer: 'Dicoding Indonesia',
    number: 'DCD-SMK/2025/X/074',
    validUntil: { id: 'Oktober 2028', en: 'October 2028' },
    grade: { id: 'Sangat Kompeten', en: 'Highly Competent' },
    description: {
      id: 'Uji kompetensi resmi berbasis SKKNI untuk keahlian Artificial Intelligence (Subbidang Data Science) dan Data Analitik.',
      en: 'Official SKKNI-based competency test for Artificial Intelligence (Data Science Sub-field) and Data Analytics.',
    },
    color: '#6366f1',
  },
  {
    id: 2,
    title: { id: 'Belajar Dasar AI', en: 'AI Fundamentals' },
    type: { id: 'Sertifikat Kompetensi', en: 'Competency Certificate' },
    issuer: 'Dicoding Academy',
    number: '07Z6J4DGJXQR',
    validUntil: { id: 'Oktober 2028', en: 'October 2028' },
    grade: null,
    description: {
      id: 'Penguasaan dasar-dasar kecerdasan buatan dan machine learning.',
      en: 'Mastery of artificial intelligence and machine learning fundamentals.',
    },
    color: '#8b5cf6',
  },
  {
    id: 3,
    title: { id: 'Belajar Dasar Data Science', en: 'Data Science Fundamentals' },
    type: { id: 'Sertifikat Kompetensi', en: 'Competency Certificate' },
    issuer: 'Dicoding Academy',
    number: '1OP8J005VPQK',
    validUntil: { id: 'September 2028', en: 'September 2028' },
    grade: null,
    description: {
      id: 'Penguasaan dasar-dasar ilmu data, analisis, dan visualisasi data.',
      en: 'Mastery of data science fundamentals, analysis, and data visualization.',
    },
    color: '#a78bfa',
  },
];

export const skills = {
  title: { id: 'Keahlian Teknis', en: 'Technical Skills' },
  categories: [
    {
      name: { id: 'Backend', en: 'Backend' },
      icon: '⚙️',
      color: '#6366f1',
      items: ['Laravel (PHP)', 'Node.js', 'Express.js', 'RESTful API'],
    },
    {
      name: { id: 'Frontend', en: 'Frontend' },
      icon: '🎨',
      color: '#8b5cf6',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Blade Template'],
    },
    {
      name: { id: 'Database & Tools', en: 'Database & Tools' },
      icon: '🗄️',
      color: '#a78bfa',
      items: ['MySQL', 'Relational DB Design', 'Git', 'GitHub', 'Postman', 'Laragon'],
    },
    {
      name: { id: 'Metodologi', en: 'Methodology' },
      icon: '🧠',
      color: '#c4b5fd',
      items: ['AI-Assisted Development', 'Data Science Fundamentals', 'Agile / Git Flow', 'Code Review'],
    },
    {
      name: { id: 'Soft Skills', en: 'Soft Skills' },
      icon: '🤝',
      color: '#818cf8',
      items: ['Problem Solving', 'Fast Learner', 'Team Collaboration', 'Time Management', 'Proactive'],
    },
  ],
};

export const education = {
  title: { id: 'Pendidikan', en: 'Education' },
  school: 'SMK Negeri 1 Padaherang',
  major: {
    id: 'Pengembangan Perangkat Lunak dan Gim',
    en: 'Software and Game Development',
  },
  location: { id: 'Jawa Barat, Indonesia', en: 'West Java, Indonesia' },
  graduated: { id: 'Lulus: Mei 2026', en: 'Graduated: May 2026' },
  description: {
    id: 'Menyelesaikan studi dengan fokus pada pengembangan aplikasi web, pemrograman berorientasi objek, dan rekayasa perangkat lunak.',
    en: 'Completed studies with focus on web application development, object-oriented programming, and software engineering.',
  },
};

export const navLinks = [
  { href: '#about', label: { id: 'Tentang', en: 'About' } },
  { href: '#experience', label: { id: 'Pengalaman', en: 'Experience' } },
  { href: '#projects', label: { id: 'Proyek', en: 'Projects' } },
  { href: '#certifications', label: { id: 'Sertifikat', en: 'Certs' } },
  { href: '#skills', label: { id: 'Keahlian', en: 'Skills' } },
  { href: '#contact', label: { id: 'Kontak', en: 'Contact' } },
];
