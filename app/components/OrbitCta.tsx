export default function OrbitCta({ href = "/contacto", className = "" }: { href?: string; className?: string }) {
  const pathId = `orbit-${className.replace(/[^a-z0-9]/gi, "") || "cta"}`;
  return (
    <a className={`orbit-cta ${className}`.trim()} href={href} aria-label="Coordinar una demo">
      <svg className="orbit-cta-copy" viewBox="0 0 160 160" aria-hidden="true">
        <defs><path id={pathId} d="M 80,80 m -57,0 a 57,57 0 1,1 114,0 a 57,57 0 1,1 -114,0" /></defs>
        <text><textPath href={`#${pathId}`} startOffset="0%">COORDINAR UNA DEMO · COORDINAR UNA DEMO · </textPath></text>
      </svg>
      <span className="orbit-cta-core" aria-hidden="true">↗</span>
    </a>
  );
}
