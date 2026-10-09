import Logo from './Logo.jsx';
import { motto } from '../data.js';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <svg className="waves" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
        <path d="M760 -10c40 90 120 120 200 150s150 90 260 60" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity=".75" />
        <path d="M-20 430c120-40 230 20 320 80s170 70 250 40" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity=".75" />
        <path d="M860 620c60-80 150-110 240-90s110-40 140-80" fill="none" stroke="#e5e4c9" strokeWidth="2" opacity=".5" />
      </svg>
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Design · Development · Documentation</p>
          <p className="team">
            Team
            <br />
            Lightning McQueen
          </p>
          <h1>
            We design and build web software that <em>works</em>, delivered on time.
          </h1>
          <p className="tag">
            We are a small digital studio. We plan, design, build, test and document web applications for
            businesses that want a reliable team.
          </p>
          <div className="cta-row">
            <a className="btn btn-cream" href="#services">
              Our services
            </a>
            <a className="btn btn-outline" href="#contact">
              Get a quote
            </a>
          </div>
        </div>
        <div className="badge-card">
          <Logo size={180} label="Team Lightning McQueen logo" />
          <p className="wm">
            Team Lightning
            <br />
            McQueen
          </p>
          <p className="motto-label">Team Motto</p>
          <p className="motto">“{motto}”</p>
        </div>
      </div>
    </header>
  );
}