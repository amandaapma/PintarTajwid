import "./About.css";

function About() {
  const fitur = [
    { icon: "📚", judul: "Materi Lengkap", desc: "Hukum tajwid dari nun sukun, mad, hingga ghunnah tersedia lengkap dan terstruktur." },
    { icon: "🗂️", judul: "Per Kategori", desc: "Materi dikelompokkan berdasarkan kategori agar mudah dipelajari secara bertahap." },
    { icon: "✅", judul: "Lacak Progres", desc: "Tandai materi yang sedang dipelajari atau sudah hafal untuk memantau perkembanganmu." },
    { icon: "📖", judul: "Teks Arab", desc: "Setiap materi dilengkapi contoh tulisan Arab asli dengan font Amiri yang tajam dan indah." },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <p className="about-bismillah arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <h1>Tentang PintarTajwid</h1>
        <div className="divider" />
        <p>
          Aplikasi kamus tajwid digital yang dirancang untuk membantu siapa saja
          belajar dasar-dasar ilmu tajwid secara mandiri dan terstruktur.
        </p>
      </div>

      {/* Misi Section */}
      <div className="about-misi">
        <div className="misi-text">
          <h2>Misi Kami</h2>
          <p>
            Membaca Al-Qur'an dengan baik dan benar adalah kewajiban setiap Muslim. Namun
            tidak semua orang memiliki akses ke guru tajwid atau pesantren. PintarTajwid
            hadir sebagai solusi digital yang bisa diakses kapan saja dan di mana saja.
          </p>
          <p style={{ marginTop: "14px" }}>
            Aplikasi ini dibuat sebagai proyek tugas program Studi Independen,
            menggunakan React dengan React Router dan state management untuk pengalaman
            belajar yang interaktif.
          </p>
        </div>
        
        <div className="misi-quote">
          <p className="arabic misi-arab">
            وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
          </p>
          <p className="misi-terjemah">
            "Dan bacalah Al-Qur'an itu dengan perlahan-lahan."
          </p>
          <p className="misi-sumber">— QS. Al-Muzzammil: 4</p>
        </div>
      </div>

      {/* Fitur Section */}
      <div className="about-fitur">
        <h2 className="section-title">Fitur Aplikasi</h2>
        <div className="divider" style={{ margin: "12px 0 28px 0" }} />
        <div className="fitur-grid">
          {fitur.map((f, i) => (
            <div className="fitur-card" key={i}>
              <span className="fitur-icon">{f.icon}</span>
              <h3>{f.judul}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;