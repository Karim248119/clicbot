import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-5 pb-10 opacity-0">
      {/* Icon with pulsing rings */}
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Rings */}
        {[0, 0.6, 1.2].map((delay, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${64 + i * 24}px`,
              height: `${64 + i * 24}px`,
              animation: `pulse-ring 2.4s ease-out ${delay}s infinite`,
            }}
          />
        ))}

        {/* Core icon */}
        <div className="relative z-10 w-14 h-14 bg-[#0057ff] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            {/* Robot head */}
            <rect x="6" y="5" width="20" height="14" rx="2" fill="white" />
            {/* Eyes */}
            <circle cx="11.5" cy="12" r="2.5" fill="#0057ff" />
            <circle cx="20.5" cy="12" r="2.5" fill="#0057ff" />
            {/* Eye shine */}
            <circle cx="12.5" cy="11" r="0.8" fill="white" />
            <circle cx="21.5" cy="11" r="0.8" fill="white" />
            {/* Neck */}
            <rect x="14" y="19" width="4" height="3" rx="0.5" fill="white" />
            {/* Body */}
            <rect x="10" y="22" width="12" height="7" rx="1" fill="white" />
            {/* Arms */}
            <rect x="4" y="22" width="5" height="5" rx="1" fill="white" />
            <rect x="23" y="22" width="5" height="5" rx="1" fill="white" />
            {/* Antenna */}
            <line
              x1="16"
              y1="5"
              x2="16"
              y2="2"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="16" cy="1.2" r="1.2" fill="#0057ff" />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div
        className="text-white"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.8rem",
          lineHeight: 1,
          letterSpacing: "-0.045em",
        }}
      >
        Clic<span style={{ color: "#0057ff" }}>Bot</span>
      </div>
    </div>
  );
}
