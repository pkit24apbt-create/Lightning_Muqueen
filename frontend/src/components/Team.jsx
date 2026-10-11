import { useState } from 'react';
import SectionHead from './SectionHead.jsx';
import { team } from '../data.js';

// Shows the member's photo, or their initials if the photo is missing or fails to load.
function Avatar({ member }) {
  const [failed, setFailed] = useState(false);

  if (!member.photo || failed) {
    return (
      <div className="avatar" aria-hidden="true">
        {member.initials}
      </div>
    );
  }

  const position = member.photoPosition || '50% 30%';
  return (
    <div className="avatar">
      <img
        src={member.photo}
        alt={`Photo of ${member.name}`}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{
          objectPosition: position,
          transform: `scale(${member.photoZoom || 1})`,
          transformOrigin: position,
        }}
      />
    </div>
  );
}

export default function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <SectionHead eyebrow="The people" title="Meet our" script="team" />
        <div className="crew">
          {team.map((m) => (
            <article className="member" key={m.name}>
              <Avatar member={m} />
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