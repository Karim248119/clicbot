import loadFont from "next/font/local";
import { Poppins, JetBrains_Mono } from "next/font/google";

const f0 = loadFont({ src: "./Protofo-Regular.otf" });
const f1 = loadFont({ src: "./Copdro.otf" });
const f2 = loadFont({ src: "./Aero.otf" });
const f3 = loadFont({ src: "./AUTOMATA-DISPLAY.ttf" });

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const fonts = {
  f0,
  f1,
  f2,
  f3,
  poppins,
  jetBrains,
};
