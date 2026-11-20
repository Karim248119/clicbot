import { CgClose } from "react-icons/cg";
import { FaX } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface VideoTopBarProps {
  visible: boolean;
  onCollapse: (e: React.MouseEvent) => void;
}

export default function VideoTopBar({ visible, onCollapse }: VideoTopBarProps) {
  return (
    <div
      className="absolute top-0 inset-x-0 h-16 bg-linear-to-b from-black/70 to-transparent flex justify-end items-center px-4 gap-3 transition-opacity duration-300 z-[100]"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <button
        onClick={onCollapse}
        className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-1.5"
      >
        <CgClose className="text-lg mt-1" />
        CLOSE
      </button>
    </div>
  );
}
