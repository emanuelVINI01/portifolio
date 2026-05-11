'use client';

import Image from 'next/image';

interface Tech {
  name: string;
  icon: string;
  color: string;
  radius: number;
  speed: number;
  startAngle: number;
}

const TECHS: Tech[] = [
  { name: 'React', icon: 'R', color: '#61DAFB', radius: 84, speed: 12, startAngle: 0 },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6', radius: 84, speed: 15, startAngle: 120 },
  { name: 'Tailwind', icon: 'TW', color: '#38BDF8', radius: 84, speed: 18, startAngle: 240 },
  { name: 'Next.js', icon: 'N', color: '#F8F8F2', radius: 118, speed: 22, startAngle: 45 },
  { name: 'Fastify', icon: 'F', color: '#F1FA8C', radius: 118, speed: 25, startAngle: 135 },
  { name: 'Node.js', icon: 'NO', color: '#50FA7B', radius: 118, speed: 28, startAngle: 225 },
  { name: 'Prisma', icon: 'PR', color: '#BD93F9', radius: 118, speed: 31, startAngle: 315 },
  { name: 'PostgreSQL', icon: 'PG', color: '#8BE9FD', radius: 148, speed: 34, startAngle: 0 },
  { name: 'Zod', icon: 'ZO', color: '#FF79C6', radius: 148, speed: 37, startAngle: 90 },
  { name: 'Playwright', icon: 'PW', color: '#50FA7B', radius: 148, speed: 40, startAngle: 180 },
  { name: 'Framer Motion', icon: 'FM', color: '#BD93F9', radius: 148, speed: 43, startAngle: 270 },
];

function TechNode({ tech, paused }: { tech: Tech; paused: boolean }) {
  return (
    <div
      className="absolute flex items-center justify-center rounded-full border text-[10px] font-bold"
      style={{
        width: 36,
        height: 36,
        background: `${tech.color}16`,
        borderColor: `${tech.color}55`,
        color: tech.color,
        boxShadow: `0 0 18px ${tech.color}22`,
        animation: `orbit ${tech.speed}s linear infinite`,
        animationPlayState: paused ? 'paused' : 'running',
        animationDelay: `${-(tech.startAngle / 360) * tech.speed}s`,
        '--orbit-r': `${tech.radius}px`,
        top: '50%',
        left: '50%',
        marginTop: '-18px',
        marginLeft: '-18px',
      } as React.CSSProperties}
      title={tech.name}
    >
      {tech.icon}
    </div>
  );
}

export default function TechOrbit({ paused = false }: { paused?: boolean }) {
  return (
    <div className="relative flex h-[340px] w-[340px] items-center justify-center">
      {[84, 118, 148].map((radius) => (
        <div
          key={radius}
          className="absolute rounded-full border"
          style={{
            width: radius * 2,
            height: radius * 2,
            borderColor: 'rgba(189,147,249,0.13)',
            borderStyle: 'dashed',
            top: '50%',
            left: '50%',
            marginTop: -radius,
            marginLeft: -radius,
          }}
        />
      ))}

      <div
        className="absolute rounded-full"
        style={{
          width: 92,
          height: 92,
          top: '50%',
          left: '50%',
          marginTop: -46,
          marginLeft: -46,
          border: '1px solid rgba(189,147,249,0.5)',
          boxShadow: '0 0 34px rgba(189,147,249,0.24)',
        }}
      />

      <div className="relative z-10 h-20 w-20 overflow-hidden rounded-full border-2 border-dracula-purple/70 bg-dracula-card shadow-[0_0_34px_rgba(189,147,249,0.32)]">
        <Image
          src="https://github.com/emanuelVINI01.png"
          alt="emanuelVINI"
          width={80}
          height={80}
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>

      {TECHS.map((tech) => (
        <TechNode key={tech.name} tech={tech} paused={paused} />
      ))}
    </div>
  );
}
