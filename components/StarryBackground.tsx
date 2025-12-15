"use client";

export default function StarryBackground() {
  return (
    <div className="absolute inset-0">
      {/* Layer 1 - Tiny dim stars (150) */}
      {[...Array(150)].map((_, i) => (
        <div
          key={`s1-${i}`}
          className="absolute w-[1px] h-[1px] bg-white rounded-full animate-twinkle"
          style={{
            left: `${(i * 13 + 7) % 100}%`,
            top: `${(i * 17 + 3) % 100}%`,
            opacity: 0.4 + (i % 5) * 0.1,
            animationDelay: `${(i * 0.2) % 5}s`
          }}
        />
      ))}
      {/* Layer 2 - Small stars (100) */}
      {[...Array(100)].map((_, i) => (
        <div
          key={`s2-${i}`}
          className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle"
          style={{
            left: `${(i * 19 + 11) % 100}%`,
            top: `${(i * 23 + 13) % 100}%`,
            opacity: 0.5 + (i % 4) * 0.12,
            animationDelay: `${(i * 0.25) % 6}s`
          }}
        />
      ))}
      {/* Layer 3 - Medium stars (50) */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`s3-${i}`}
          className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
          style={{
            left: `${(i * 29 + 5) % 100}%`,
            top: `${(i * 31 + 7) % 100}%`,
            opacity: 0.6 + (i % 3) * 0.13,
            animationDelay: `${(i * 0.3) % 4}s`
          }}
        />
      ))}
      {/* Layer 4 - Slightly larger stars (20) */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`s4-${i}`}
          className="absolute w-[2.5px] h-[2.5px] bg-white rounded-full animate-twinkle"
          style={{
            left: `${(i * 37 + 17) % 100}%`,
            top: `${(i * 41 + 19) % 100}%`,
            opacity: 0.8,
            animationDelay: `${(i * 0.35) % 4}s`
          }}
        />
      ))}
      
      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)'
        }}
      />
    </div>
  );
}

