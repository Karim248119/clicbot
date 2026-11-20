import { useEffect, useRef } from "react";
import gsap from "gsap";
import Typo from "../ui/Typo";

interface CountUpProps {
  number: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function CountUp({
  number,
  prefix = "",
  suffix = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    const animate = () => {
      gsap.to(obj, {
        val: number,
        duration,
        ease: "power2.out",
        onUpdate() {
          el.textContent =
            prefix + Math.round(obj.val).toLocaleString() + suffix;
        },
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number, prefix, suffix, duration]);

  return (
    <Typo font="f0" ref={ref}>
      {prefix}0{suffix}
    </Typo>
  );
}
