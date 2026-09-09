import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p className="muted">Designed & built with attention — Hyderabad</p>
    </footer>
  );
}
