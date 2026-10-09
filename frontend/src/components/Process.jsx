import SectionHead from './SectionHead.jsx';
import { processSteps } from '../data.js';

export default function Process() {
  return (
    <section className="sky" id="process">
      <div className="wrap">
        <SectionHead
          eyebrow="How we work"
          title="Our"
          script="process"
          lede="We work in agile sprints and check in with you after each one, so you see progress early and nothing surprises you at the end."
        />
        <div className="laps">
          {processSteps.map((step) => (
            <div className="lap" key={step.n}>
              <span className="n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}