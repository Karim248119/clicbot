"use client";

import { useVideoPlayer } from "./useVideoPlayer";
import VideoBackdrop from "./VideoBackdrop";
import VideoThumbnail from "./VideoThumbnail";
import VideoExpandedOverlay from "./VideoExpandedOverlay";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className }: VideoPlayerProps) {
  const {
    videoRef,
    containerRef,
    progressRef,
    expanded,
    playing,
    currentTime,
    duration,
    volume,
    muted,
    showControls,
    buffered,
    isFullscreen,
    progress,
    togglePlay,
    collapse,
    resetHideTimer,
    onTimeUpdate,
    onLoadedMetadata,
    onEnded,
    seek,
    handleVolume,
    toggleMute,
    toggleFullscreen,
  } = useVideoPlayer();

  return (
    <>
      <VideoBackdrop visible={expanded} onClick={collapse} />

      <div className={className}>
        <div
          ref={containerRef}
          onMouseMove={resetHideTimer}
          onMouseEnter={resetHideTimer}
          className={[
            "transition-all  duration-500 ease-[cubic-bezier(.32,0,.17,1)] overflow-hidden rounded shadow-2xl",
            expanded
              ? "fixed bottom-0 right-0 w-screen h-screen z-50"
              : "relative w-52 h-28",
          ].join(" ")}
        >
          {/* 16:9 aspect wrapper */}
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={src}
              className={`absolute inset-0 w-full h-full object-cover bg-black ${expanded ? "" : "grayscale brightness-75"}`}
              onTimeUpdate={onTimeUpdate}
              onLoadedMetadata={onLoadedMetadata}
              onEnded={onEnded}
              onClick={togglePlay}
            />

            {!expanded && <VideoThumbnail onClick={togglePlay} />}

            {expanded && (
              <VideoExpandedOverlay
                showControls={showControls}
                playing={playing}
                progress={progress}
                buffered={buffered}
                muted={muted}
                volume={volume}
                currentTime={currentTime}
                duration={duration}
                isFullscreen={isFullscreen}
                progressRef={progressRef}
                onCollapse={collapse}
                onTogglePlay={togglePlay}
                onSeek={seek}
                onToggleMute={toggleMute}
                onVolumeChange={handleVolume}
                onToggleFullscreen={toggleFullscreen}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
