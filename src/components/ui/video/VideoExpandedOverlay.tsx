import { RefObject } from "react";
import { CiPlay1 } from "react-icons/ci";
import VideoTopBar from "./VideoTopBar";
import VideoSeekBar from "./VideoSeekBar";
import VideoControls from "./VideoControls";

interface VideoExpandedOverlayProps {
  showControls: boolean;
  playing: boolean;
  progress: number;
  buffered: number;
  muted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  isFullscreen: boolean;
  progressRef: RefObject<HTMLDivElement | null>;
  onCollapse: (e: React.MouseEvent) => void;
  onTogglePlay: () => void;
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
  onToggleMute: () => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleFullscreen: () => void;
}

export default function VideoExpandedOverlay({
  showControls,
  playing,
  progress,
  buffered,
  muted,
  volume,
  currentTime,
  duration,
  isFullscreen,
  progressRef,
  onCollapse,
  onTogglePlay,
  onSeek,
  onToggleMute,
  onVolumeChange,
  onToggleFullscreen,
}: VideoExpandedOverlayProps) {
  return (
    <>
      {/* top bar */}
      <VideoTopBar visible={showControls} onCollapse={onCollapse} />

      {/* full-area click-to-toggle */}
      <div className="absolute inset-0" onClick={onTogglePlay} />

      {/* centre pause icon */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: showControls ? 1 : 0 }}
      >
        {!playing && (
          <span className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-4xl text-white pl-1 border border-white/20">
            <CiPlay1 />
          </span>
        )}
      </div>

      {/* bottom controls */}
      <div
        className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent px-4 pt-8 pb-3 flex flex-col gap-2 transition-opacity duration-300"
        style={{
          opacity: showControls ? 1 : 0,
          pointerEvents: showControls ? "auto" : "none",
        }}
      >
        <VideoSeekBar
          progressRef={progressRef}
          progress={progress}
          buffered={buffered}
          onSeek={onSeek}
        />
        <VideoControls
          playing={playing}
          muted={muted}
          volume={volume}
          currentTime={currentTime}
          duration={duration}
          isFullscreen={isFullscreen}
          onTogglePlay={onTogglePlay}
          onToggleMute={onToggleMute}
          onVolumeChange={onVolumeChange}
          onToggleFullscreen={onToggleFullscreen}
        />
      </div>
    </>
  );
}
