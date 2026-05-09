import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <span className="notfound-emoji">🗺️</span>
        <h1>404</h1>
        <h2>Halaman Tidak Ditemukan</h2>
        <p>
          Sepertinya kamu tersesat di gunung yang salah. <br />
          Halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <Link to="/" className="notfound-btn">
          ← Kembali ke Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;