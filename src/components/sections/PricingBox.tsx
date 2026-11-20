import { icons } from "@/lib/icons";
import { FadeUp } from "../animations/AnimationComponents";
import Card from "../ui/Card";
import Typo from "../ui/Typo";

const items = [
  {
    icon: icons.puzzle,
    title: "Modules",
    desc: "Magnetically click together — no tools, no wires, no frustration.",
  },
  {
    icon: icons.phone,
    title: "Free App",
    desc: "iOS & Android app with tutorials, coding platform, and community hub.",
  },
  {
    icon: icons.graduationCap,
    title: "Guided Builds",
    desc: "Step-by-step tutorials to build 20–50+ different robot forms.",
  },
  {
    icon: icons.globe,
    title: "Community",
    desc: "Join 66,000+ creators. Share builds, join challenges, get inspired.",
  },
];

export default function PricingBox() {
  return (
    <section className="py-24">
      <div className="max-w-350 mx-auto px-6 lg: md:px-12">
        <FadeUp>
          <div className="mb-12">
            <Typo tag="span">What you get</Typo>
            <Typo tag="h1">
              Every kit comes with
              <br />
              more than you expect.
            </Typo>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item) => (
            <Card
              key={item.title}
              name={item.title}
              desc={item.desc}
              icon={item.icon}
              iconSize={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
