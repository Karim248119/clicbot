import { FadeUp } from "../animations/AnimationComponents";
import { modules } from "@/data/features";
import Typo from "../ui/Typo";
import Card from "../ui/Card";

export default function ModulesGrid() {
  return (
    <section className="py-24">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <FadeUp>
          <div className="mb-12">
            <Typo tag="span">The building blocks</Typo>
            <Typo tag="h1">
              11 modules. Each one
              <br />
              changes everything.
            </Typo>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modules.map((mod) => (
            <Card
              key={mod.name}
              name={mod.name}
              desc={mod.desc}
              icon={mod.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
