import { RefObject } from "react";

interface VideoSeekBarProps {
  progressRef: RefObject<HTMLDivElement | null>;
  progress: number;
  buffered: number;
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function VideoSeekBar({
  progressRef,
  progress,
  buffered,
  onSeek,
}: VideoSeekBarProps) {
  return (
    <div
      ref={progressRef}
      onClick={onSeek}
      className="relative h-1 rounded-full bg-white/20 cursor-pointer group"
    >
      {/* buffered */}
      <div
        className="absolute inset-y-0 left-0 bg-white/30 rounded-full"
        style={{ width: `${buffered}%` }}
      />
      {/* played */}
      <div
        className="absolute inset-y-0 left-0 bg-clicbot-accent rounded-full transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
      {/* thumb */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ left: `calc(${progress}% - 6px)` }}
      />
    </div>
  );
}
