// Company logo: green shield badge, cream "LM", gold lightning bolt.
export default function Logo({ size = 40, label }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <path d="M60 4 108 20v38c0 30-21 50-48 58C33 108 12 88 12 58V20z" fill="#02553a" />
      <path d="M60 13 99 26v32c0 24-17 41-39 48-22-7-39-24-39-48V26z" fill="none" stroke="#e5e4c9" strokeWidth="2.5" />
      <text x="26" y="78" fontFamily="Kumar One, Rockwell, Georgia, serif" fontSize="40" fill="#e5e4c9">
        LM
      </text>
      <path
        d="M70 18 50 62h14l-8 40 30-50H70l10-34z"
        fill="#e2b33c"
        stroke="#02553a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}