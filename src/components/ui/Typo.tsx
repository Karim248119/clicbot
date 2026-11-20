"use client";
import { fonts } from "@/lib/fonts";
import React from "react";

export default function Typo({
  className,
  children,
  ref,
  font,
  tag,
  active = true,
}: {
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
  font?: "f0" | "f1" | "f2" | "f3";
  tag?: "h1" | "span" | "p";
  active?: boolean;
}) {
  const fontClass =
    font === "f1"
      ? fonts.f1.className
      : font === "f2"
        ? fonts.f2.className
        : font === "f3"
          ? fonts.f3.className
          : fonts.jetBrains.className;

  const tagClass =
    tag === "h1"
      ? `text-5xl ${fonts.f2.className}`
      : tag === "span"
        ? `text-xs uppercase mb-3 ${fonts.f0.className}`
        : `text-base ${fonts.poppins.className}`;

  return (
    <div
      ref={ref}
      className={`
        ${tag ? tagClass : fontClass}
        ${className} 
      `}
    >
      {tag == "span" ? (
        <div className={`tag inline-flex items-center ${className}`}>
          <span
            className={`w-2 h-2 rounded-full inline-block mb-0.5 ${active ? "bg-clicbot-accent" : "bg-clicbot-gray-300"}`}
          />
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
