import { builds } from "@/data/features";
import Link from "next/link";
import { FadeUp } from "../animations/AnimationComponents";
import Typo from "../ui/Typo";

export default function BuildsTicker() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="marquee-inner">
          {[...builds, ...builds].map((build, i) => (
            <div
              key={i}
              className="inline-flex items-center py-28 text-9xl uppercase"
            >
              <Typo font="f3"> {build}</Typo>
              <span className="w-5 aspect-square rounded-full bg-clicbot-accent mx-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
