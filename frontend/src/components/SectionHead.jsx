// Shared section heading: small eyebrow label, Kumar One heading with an optional script word, optional intro.
export default function SectionHead({ eyebrow, title, script, lede }) {
  return (
    <div className="sec-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title}
        {script && (
          <>
            {' '}
            <em>{script}</em>
          </>
        )}
      </h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}