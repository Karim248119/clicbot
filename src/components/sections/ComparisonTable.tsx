import { FadeUp } from "../animations/AnimationComponents";
import Typo from "../ui/Typo";

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-clicbot-white">
      <div className="max-w-350 mx-auto px-6 lg: md:px-12">
        <FadeUp>
          <div className="mb-12">
            <Typo tag="span">Kit comparison</Typo>
            <Typo tag="h1">
              Find your <br /> perfect kit.
            </Typo>
          </div>
        </FadeUp>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-clicbot-gray-200">
                <th className="text-left py-4 font-mono text-xs uppercase tracking-widest text-clicbot-gray-400 pr-8">
                  Included
                </th>
                <th className="py-4 px-6 text-clicbot-gray-500 font-normal">
                  Starter
                </th>
                <th className="py-4 px-6 bg-clicbot-black text-white font-medium">
                  Standard
                </th>
                <th className="py-4 px-6 text-clicbot-gray-500 font-normal">
                  Maker
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Core ClicBot unit", true, true, true],
                ["Free ClicBot app", true, true, true],
                ["20+ guided tutorials", true, true, true],
                ["Wheel module", false, true, true],
                ["Suction Cup module", false, true, true],
                ["Distance Sensor", false, true, true],
                ["All 11 module types", false, false, true],
                ["50+ guided tutorials", false, false, true],
                ["Maker community badge", false, false, true],
                ["Early access to new modules", false, false, true],
              ].map(([feature, starter, standard, maker]) => (
                <tr
                  key={String(feature)}
                  className="border-b border-clicbot-gray-100"
                >
                  <td className="py-4 pr-8 text-clicbot-gray-700">{feature}</td>
                  <td className="py-4 px-6 text-center">
                    {starter ? (
                      <span className="text-clicbot-gray-500">✓</span>
                    ) : (
                      <span className="text-clicbot-gray-200">—</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-clicbot-black/5">
                    {standard ? (
                      <span className="text-clicbot-accent font-bold">✓</span>
                    ) : (
                      <span className="text-clicbot-gray-300">—</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {maker ? (
                      <span className="text-clicbot-gray-500">✓</span>
                    ) : (
                      <span className="text-clicbot-gray-200">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
