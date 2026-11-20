import { CiPlay1 } from "react-icons/ci";

interface VideoThumbnailProps {
  onClick: () => void;
}

export default function VideoThumbnail({ onClick }: VideoThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className="absolute inset-0 flex items-center justify-center group"
    >
      <span className="w-14 h-14 rounded-full bg-clicbot-accent flex items-center justify-center text-3xl text-white pl-1 shadow-lg transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
        <CiPlay1 />
      </span>
    </button>
  );
}
