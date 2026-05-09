import "./Contact.css";

function Contact() {
  const kontak = [
    { icon: "📧", label: "Email", value: "amandaapmaa@email.com", link: "mailto:amandaapmaa@email.com" },
    { icon: "🐙", label: "GitHub", value: "github.com/amandaapma", link: "https://github.com/amandaapma" },
  ];

  const referensi = [
    { nama: "Ilmu Tajwid Lengkap — Moh. Wahyudi", link: "#" },
    { nama: "Al-Qur'an Digital — quran.com", link: "https://quran.com" },
    { nama: "Panduan Tajwid — tajwid.id", link: "#" },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Kontak & Referensi</h1>
        <div className="divider" />
        <p>
          Hubungi pengembang atau lihat sumber referensi materi tajwid yang
          digunakan dalam aplikasi ini.
        </p>
      </div>

      <div className="contact-layout">
        {/* Kolom Kiri: Info & Ref */}
        <div>
          <h2 className="contact-section-title">Hubungi Pengembang</h2>
          <div className="contact-cards">
            {kontak.map((k, i) => (
              <a href={k.link} className="contact-card" key={i} target="_blank" rel="noreferrer">
                <span className="contact-icon">{k.icon}</span>
                <div className="contact-info">
                  <span className="contact-label">{k.label}</span>
                  <span className="contact-value">{k.value}</span>
                </div>
                <span className="contact-arrow">→</span>
              </a>
            ))}
          </div>

          <h2 className="contact-section-title" style={{ marginTop: "36px" }}>Referensi Materi</h2>
          <div className="ref-list">
            {referensi.map((r, i) => (
              <a href={r.link} className="ref-item" key={i} target="_blank" rel="noreferrer">
                <span className="ref-icon">📖</span>
                <span>{r.nama}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Form Pesan */}
        <div className="contact-form-box">
          <h2>Kirim Pesan</h2>
          <p className="form-sub">Ada pertanyaan atau saran? Kirim pesanmu di sini.</p>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nama</label>
              <input type="text" placeholder="Nama kamu" className="form-input" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="email@contoh.com" className="form-input" />
            </div>
            <div className="form-group">
              <label>Pesan</label>
              <textarea placeholder="Tulis pesanmu..." className="form-input form-textarea" rows={4} />
            </div>
            <button type="submit" className="send-btn">Kirim Pesan ✉️</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;