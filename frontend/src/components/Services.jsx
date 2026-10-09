import SectionHead from './SectionHead.jsx';
import Icon from './Icon.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <section className="tint" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="What we offer"
          title="Our"
          script="services"
          lede="Hire us for a full project or for one part of it."
        />
        <div className="services">
          {services.map((s) => (
            <article className="svc" key={s.title}>
              <div className="ic">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}