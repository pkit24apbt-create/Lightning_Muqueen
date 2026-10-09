import SectionHead from './SectionHead.jsx';
import { team } from '../data.js';

export default function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <SectionHead eyebrow="The people" title="Meet our" script="team" />
        <div className="crew">
          {team.map((m) => (
            <article className="member" key={m.name}>
              <div className="avatar" aria-hidden="true">
                {m.initials}
              </div>
              <p className="name">{m.name}</p>
              <p className="role">{m.role}</p>
              <p className="bio">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}