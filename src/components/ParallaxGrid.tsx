export default function ParallaxGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-dracula-bg"
    >
      <div
        className="absolute inset-[-20%] opacity-55"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,233,253,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,233,253,0.028) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(40,42,54,0.58)',
        }}
      />
    </div>
  );
}
