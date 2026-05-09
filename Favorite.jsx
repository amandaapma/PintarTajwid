import { Link } from "react-router-dom";
import "./Favorite.css";

function Favorite({ favorites, removeFavorite }) {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>❤️ Gunung Favorit</h1>
        <div className="divider" />
        <p>
          Daftar gunung yang telah kamu simpan. Klik detail untuk info
          lengkap, atau hapus dari daftar favoritmu.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <span className="empty-emoji">🏔️</span>
          <h2>Belum Ada Favorit</h2>
          <p>
            Kamu belum menambahkan gunung ke favorit. <br />
            Yuk jelajahi dan simpan gunung pilihanmu!
          </p>
          <Link to="/" className="explore-btn">
            Jelajahi Gunung →
          </Link>
        </div>
      ) : (
        <>
          <p className="fav-count">
            {favorites.length} gunung tersimpan
          </p>
          <div className="fav-grid">
            {favorites.map((gunung) => (
              <div className="fav-card" key={gunung.id}>
                <div className="fav-card-img">
                  <img src={gunung.gambar} alt={gunung.nama} />
                </div>
                <div className="fav-card-body">
                  <span className="fav-card-lokasi">📍 {gunung.lokasi}</span>
                  <h3>{gunung.nama}</h3>
                  <p className="fav-card-tinggi">⬆️ {gunung.ketinggian}</p>
                  <div className="fav-card-actions">
                    <Link to={`/gunung/${gunung.id}`} className="fav-detail-btn">
                      Lihat Detail
                    </Link>
                    <button
                      className="fav-remove-btn"
                      onClick={() => removeFavorite(gunung.id)}
                    >
                      🗑️ Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorite;