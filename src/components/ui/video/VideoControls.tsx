import { CiPlay1, CiPause1, CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { formatTime } from "./useVideoPlayer";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

interface VideoControlsProps {
  playing: boolean;
  muted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  isFullscreen: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleFullscreen: () => void;
}

export default function VideoControls({
  playing,
  muted,
  volume,
  currentTime,
  duration,
  isFullscreen,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
  onToggleFullscreen,
}: VideoControlsProps) {
  return (
    <div className="flex items-center gap-3 text-white">
      {/* play / pause */}
      <button
        onClick={onTogglePlay}
        className="text-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        {playing ? <CiPause1 /> : <CiPlay1 className="pl-0.5" />}
      </button>

      {/* mute toggle */}
      <button
        onClick={onToggleMute}
        className="text-2xl hover:scale-110 transition-transform"
      >
        {muted || volume === 0 ? <CiVolumeMute /> : <CiVolumeHigh />}
      </button>

      {/* volume slider */}
      <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={muted ? 0 : volume}
        onChange={onVolumeChange}
        className="w-20 accent-clicbot-accent h-0.5 cursor-pointer"
      />

      {/* timestamp */}
      <span className="text-xs text-white/70 tabular-nums ml-1">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      <div className="flex-1" />

      {/* fullscreen toggle */}
      <button
        onClick={onToggleFullscreen}
        className="text-lg hover:scale-110 transition-transform"
      >
        {isFullscreen ? <BsFullscreenExit /> : <BsFullscreen />}
      </button>
    </div>
  );
}
