import { useParams, Link } from "react-router-dom";
import materiList from "../data/materi";
import "./DetailMateri.css";

function DetailMateri({ progres, toggleProgres }) {
  const { id } = useParams();
  const materi = materiList.find((m) => m.id === id);

  if (!materi) {
    return (
      <div className="notfound-wrap">
        <span style={{ fontSize: "3.5rem" }}>📖</span>
        <h2>Materi tidak ditemukan</h2>
        <p>ID materi yang kamu cari tidak tersedia.</p>
        <Link to="/" className="back-btn">← Kembali ke Home</Link>
      </div>
    );
  }

  const status = progres[materi.id] || "belum";

  // Navigasi prev/next
  const idx = materiList.findIndex((m) => m.id === id);
  const prev = materiList[idx - 1];
  const next = materiList[idx + 1];

  return (
    <div className="detail-page page-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{materi.kategori}</span>
        <span>/</span>
        <span>{materi.nama}</span>
      </div>

      {/* Header */}
      <div className="detail-header" style={{ background: materi.warna }}>
        <p className="detail-kategori" style={{ color: materi.warnaAksen }}>
          {materi.kategori}
        </p>
        <h1 className="detail-nama">{materi.nama}</h1>
        <p className="arabic detail-arab" style={{ color: materi.warnaAksen, fontSize: "2.8rem" }}>
          {materi.arab}
        </p>
        <p className="detail-singkat">{materi.singkat}</p>
      </div>

      <div className="detail-body">
        {/* Huruf-huruf */}
        <section className="detail-section">
          <h2>Huruf-hurufnya</h2>
          <div className="huruf-grid">
            {materi.huruf.map((h, i) => (
              <div className="huruf-box" key={i}
                style={{ background: materi.warna, borderColor: materi.warnaAksen }}>
                <span className="arabic huruf-besar" style={{ color: materi.warnaAksen }}>
                  {h}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Penjelasan */}
        <section className="detail-section">
          <h2>Penjelasan</h2>
          <p className="detail-text">{materi.penjelasan}</p>
        </section>

        {/* Cara Baca */}
        <section className="detail-section">
          <h2>Cara Membaca</h2>
          <div className="cara-baca-box">
            <span className="cb-icon">🗣️</span>
            <p>{materi.caraBaca}</p>
          </div>
        </section>

        {/* Contoh */}
        <section className="detail-section">
          <h2>Contoh dalam Al-Qur'an</h2>
          <div className="contoh-box" style={{ borderColor: materi.warnaAksen }}>
            <p className="arabic contoh-arab" style={{ color: materi.warnaAksen }}>
              {materi.contohArab}
            </p>
            <p className="contoh-latin">"{materi.contohLatin}"</p>
            <p className="contoh-arti">Artinya: <em>{materi.contohArti}</em></p>
          </div>
        </section>

        {/* Progres */}
        <section className="detail-section">
          <h2>Tandai Progresmu</h2>
          <div className="progres-actions">
            <button
              className={`prog-btn ${status === "belajar" ? "prog-btn--belajar-active" : "prog-btn--belajar"}`}
              onClick={() => toggleProgres(materi.id, status === "belajar" ? "belum" : "belajar")}
            >
              📖 {status === "belajar" ? "Sedang Dipelajari ✓" : "Tandai Sedang Belajar"}
            </button>
            <button
              className={`prog-btn ${status === "hafal" ? "prog-btn--hafal-active" : "prog-btn--hafal"}`}
              onClick={() => toggleProgres(materi.id, status === "hafal" ? "belum" : "hafal")}
            >
              ✅ {status === "hafal" ? "Sudah Hafal ✓" : "Tandai Sudah Hafal"}
            </button>
          </div>
        </section>
      </div>

      {/* Navigasi Prev/Next */}
      <div className="detail-nav">
        {prev ? (
          <Link to={`/materi/${prev.id}`} className="nav-btn nav-prev">
            ← {prev.nama}
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/materi/${next.id}`} className="nav-btn nav-next">
            {next.nama} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}

export default DetailMateri;