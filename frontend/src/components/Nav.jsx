import Logo from './Logo.jsx';
import { navLinks } from '../data.js';

export default function Nav() {
  return (
    <nav className="top" aria-label="Main">
      <div className="wrap">
        <a className="brand" href="#top">
          <Logo size={40} />
          <span className="wm">Team Lightning McQueen</span>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="#contact">
          Start a project
        </a>
      </div>
    </nav>
  );
}