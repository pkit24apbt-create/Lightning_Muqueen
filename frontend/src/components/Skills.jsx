import SectionHead from './SectionHead.jsx';
import { skills, tools } from '../data.js';

export default function Skills() {
  return (
    <section className="tint" id="skills">
      <div className="wrap">
        <SectionHead eyebrow="What we're good at" title="Skills and" script="tools" />
        <div className="skills">
          <ul className="skill-list" aria-label="Team skills">
            {skills.map((s) => (
              <li key={s.name}>
                <div>
                  <b>{s.name}</b> <span>· {s.detail}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="toolbox" aria-label="Tools we use">
            {tools.map((t) => (
              <span key={t.name}>
                <b>{t.kind}</b>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}