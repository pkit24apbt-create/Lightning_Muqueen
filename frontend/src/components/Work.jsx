import SectionHead from './SectionHead.jsx';
import { caseStudy } from '../data.js';

export default function Work() {
  return (
    <section className="sky" id="work">
      <div className="wrap">
        <SectionHead eyebrow="Our work · Case study" title="SafeStack" />
        <div className="case">
          <div className="screen" role="img" aria-label="SafeStack home screen preview">
            <div className="bar">
              <i></i>
              <i></i>
              <i></i>
              <span>safestack · home</span>
            </div>
            <div className="view">
              <span className="pill">Warehouse health &amp; safety</span>
              <h4>
                Train your team.
                <br />
                <em>Keep everyone safe.</em>
              </h4>
              <p>
                Interactive safety training for warehouse teams: hazard awareness, assessments and certification,
                all in one place.
              </p>
            </div>
          </div>
          <div className="case-info">
            <p className="lede">{caseStudy.summary}</p>
            <dl>
              {caseStudy.details.map((d) => (
                <div key={d.label} style={{ display: 'contents' }}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}