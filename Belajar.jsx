import { Link } from "react-router-dom";
import materiList from "../data/materi";
import "./Belajar.css";

const STATUS = {
  belum: { label: "Belum Dipelajari", emoji: "○", cls: "status-belum" },
  belajar: { label: "Sedang Dipelajari", emoji: "📖", cls: "status-belajar" },
  hafal: { label: "Sudah Hafal", emoji: "✅", cls: "status-hafal" },
};

function Belajar({ progres, toggleProgres }) {
  const hafal = Object.values(progres).filter((s) => s === "hafal").length;
  const belajar = Object.values(progres).filter((s) => s === "belajar").length;
  const total = materiList.length;
  const persen = Math.round((hafal / total) * 100);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Progres Belajarku</h1>
        <div className="divider" />
        <p>Tandai materi yang sudah kamu pelajari dan hafal. Progresmu tersimpan selama sesi ini.</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-card">
        <div className="progress-header">
          <span className="progress-title">Tingkat Hafalan</span>
          <span className="progress-persen">{persen}%</span>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${persen}%` }} />
        </div>
        <div className="progress-stats">
          <span className="ps-item ps-hafal">✅ {hafal} Hafal</span>
          <span className="ps-item ps-belajar">📖 {belajar} Dipelajari</span>
          <span className="ps-item ps-belum">○ {total - hafal - belajar} Belum</span>
        </div>
      </div>

      {/* Daftar Materi */}
      <div className="belajar-list">
        {materiList.map((m) => {
          const status = progres[m.id] || "belum";
          const info = STATUS[status];

          return (
            <div className={`belajar-item ${info.cls}`} key={m.id}>
              <div className="belajar-left">
                <p className="arabic belajar-arab" style={{ color: m.warnaAksen }}>
                  {m.arab}
                </p>
                <div className="belajar-info">
                  <h3>{m.nama}</h3>
                  <p className="belajar-kategori">{m.kategori}</p>
                  <p className="belajar-singkat">{m.singkat}</p>
                </div>
              </div>
              <div className="belajar-right">
                <Link to={`/materi/${m.id}`} className="detail-link">
                  Baca Materi
                </Link>
                <div className="status-btns">
                  <button
                    className={`sbtn ${status === "belajar" ? "sbtn--active" : ""}`}
                    onClick={() => toggleProgres(m.id, status === "belajar" ? "belum" : "belajar")}
                  >
                    📖 Sedang Belajar
                  </button>
                  <button
                    className={`sbtn sbtn--hafal ${status === "hafal" ? "sbtn--hafal-active" : ""}`}
                    onClick={() => toggleProgres(m.id, status === "hafal" ? "belum" : "hafal")}
                  >
                    ✅ Sudah Hafal
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Belajar;