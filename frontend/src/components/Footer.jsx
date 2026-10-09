import { team } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <span className="wm">Team Lightning McQueen</span>
        <span>
          © {year} · {team.map((m) => m.name).join(' · ')}
        </span>
      </div>
    </footer>
  );
}