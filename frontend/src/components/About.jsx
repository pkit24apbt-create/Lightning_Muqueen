import SectionHead from './SectionHead.jsx';
import { mission, visionStory, values } from '../data.js';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead eyebrow="Who we are" title="About" script="us" />
        <div className="identity">
          <div className="mission">
            <p className="eyebrow">Our mission</p>
            <blockquote>
              {mission.before}
              <span>{mission.highlight}</span>
              {mission.after}
            </blockquote>
          </div>
          <div className="vv">
            {visionStory.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="values">
          {values.map((v) => (
            <div key={v.title}>
              <b>{v.title}</b>
              <span>{v.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}