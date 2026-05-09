import { Link } from "react-router-dom";
import materiList from "../data/materi";
import "./Home.css";

// Kelompokkan materi berdasarkan kategori
function groupByKategori(list) {
  return list.reduce((acc, item) => {
    if (!acc[item.kategori]) acc[item.kategori] = [];
    acc[item.kategori].push(item);
    return acc;
  }, {});
}

function Home() {
  const grouped = groupByKategori(materiList);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <div className="home-hero">
        <p className="hero-tag">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <h1>Kamus Hukum Tajwid Digital</h1>
        <div className="divider" />
        <p className="hero-sub">
          Pelajari ilmu tajwid dengan mudah dan terstruktur. Mulai dari
          hukum nun sukun, mad, hingga ghunnah — semua ada di sini.
        </p>
        <Link to="/belajar" className="hero-cta">
          Mulai Belajar →
        </Link>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-num">{materiList.length}</span>
          <span className="stat-label">Materi</span>
        </div>
        <div className="stat-div" />
        <div className="stat-item">
          <span className="stat-num">{Object.keys(grouped).length}</span>
          <span className="stat-label">Kategori</span>
        </div>
        <div className="stat-div" />
        <div className="stat-item">
          <span className="stat-num">Gratis</span>
          <span className="stat-label">Selamanya</span>
        </div>
      </div>

      {/* Materi per Kategori */}
      {Object.entries(grouped).map(([kategori, items]) => (
        <div className="kategori-section" key={kategori}>
          <h2 className="kategori-title">{kategori}</h2>
          <div className="divider" style={{ margin: "10px 0 24px", marginLeft: 0 }} />
          <div className="materi-grid">
            {items.map((m) => (
              <Link to={`/materi/${m.id}`} className="materi-card" key={m.id}>
                <div className="card-top" style={{ background: m.warna }}>
                  <p className="arabic card-arab" style={{ color: m.warnaAksen, fontSize: "2rem" }}>
                    {m.arab}
                  </p>
                </div>
                <div className="card-body">
                  <h3 className="card-nama">{m.nama}</h3>
                  <p className="card-singkat">{m.singkat}</p>
                  <div className="card-huruf">
                    {m.huruf.slice(0, 4).map((h, i) => (
                      <span className="huruf-chip arabic" key={i}
                        style={{ borderColor: m.warnaAksen, color: m.warnaAksen }}>
                        {h}
                      </span>
                    ))}
                    {m.huruf.length > 4 && (
                      <span className="huruf-chip" style={{ color: m.warnaAksen, borderColor: m.warnaAksen }}>
                        +{m.huruf.length - 4}
                      </span>
                    )}
                  </div>
                  <span className="card-link">Pelajari →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;