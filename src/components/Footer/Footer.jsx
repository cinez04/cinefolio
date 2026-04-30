// src/components/Footer/Footer.jsx
import "./Footer.css";
import CONFIG from "../../data/config";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ✏️ Nickname is pulled from CONFIG.nickname in src/data/config.js */}
      © {new Date().getFullYear()} {CONFIG.nickname} · Built with 💙
    </footer>
  );
}
