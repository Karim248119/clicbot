import React from "react";
import Typo from "./Typo";
import { CgArrowTopRight } from "react-icons/cg";

export default function Button({
  text,
  icon = <CgArrowTopRight />,
  className,
  onClick,
  variant,
}: {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "1" | "2";
}) {
  return (
    <>
      {variant === "1" ? (
        <Button1
          text={text}
          icon={icon}
          className={className}
          onClick={onClick}
        />
      ) : (
        <Button2
          text={text}
          icon={icon}
          className={className}
          onClick={onClick}
        />
      )}
    </>
  );
}
function Button1({
  text,
  icon,
  className,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`relative group h-12 w-36 rounded-full flex items-center gap-2 text-clicbot-white bg-clicbot-accent shadow-[2px_2px_12px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
      onClick={onClick}
    >
      <Typo
        font="f2"
        className="uppercase text-lg font-extralight absolute right-14 z-10"
      >
        {text}
      </Typo>
      <div className="w-10 aspect-square rounded-full text-lg bg-black flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 group-hover:scale-[10] duration-500" />

      <div className="w-10 aspect-square rounded-full text-lg  group-hover:text-clicbot-white flex justify-center items-center absolute duration-300 right-2 z-20">
        {icon}
      </div>
      <div className="w-10 aspect-square rounded-full text-lg bg-black flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      <div className="w-10 aspect-square rounded-full text-lg bg-clicbot-accent flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 duration-300 z-10" />
    </button>
  );
}

function Button2({
  text,
  icon,
  className,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`relative group h-12 w-36 rounded-full flex items-center gap-2 text-clicbot-white bg-black shadow-[2px_2px_12px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
      onClick={onClick}
    >
      <Typo font="f2" className="uppercase  text-lg absolute right-14 z-10">
        {text}
      </Typo>
      <div className="w-10 aspect-square rounded-full text-lg bg-clicbot-accent flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 group-hover:scale-[10] duration-500" />

      <div className="w-10 aspect-square rounded-full text-lg  group-hover:text-clicbot-white flex justify-center items-center absolute duration-300 right-2 z-20">
        {icon}
      </div>
      <div className="w-10 aspect-square rounded-full text-lg bg-clicbot-accent flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      <div className="w-10 aspect-square rounded-full text-lg bg-black flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 duration-300 z-10" />
    </button>
  );
}
