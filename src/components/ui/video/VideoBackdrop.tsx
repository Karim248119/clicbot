interface VideoBackdropProps {
  visible: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export default function VideoBackdrop({ visible, onClick }: VideoBackdropProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-500 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    />
  );
}
