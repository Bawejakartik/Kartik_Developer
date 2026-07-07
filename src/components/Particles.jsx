import { useMemo } from "react";

export default function Particles() {
  const count = typeof window !== "undefined" && window.innerWidth < 640 ? 12 : 22;

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        size: 2 + Math.random() * 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 8 + Math.random() * 12,
      })),
    [count]
  );

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
