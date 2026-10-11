// Company logo: the team's gear badge, saved as frontend/public/logo.png
export default function Logo({ size = 40, label }) {
  return (
    <img
      className="logo-img"
      src="/logo.png"
      width={size}
      height={size}
      alt={label || ''}
      aria-hidden={label ? undefined : true}
    />
  );
}