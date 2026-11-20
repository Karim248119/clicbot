import { icons } from "@/lib/icons";

export const tabs = [
  "Modularity",
  "Intelligence",
  "Education",
  "Community",
] as const;
export type Tab = (typeof tabs)[number];

export const tabContent: Record<
  Tab,
  {
    headline: string;
    description: string;
    src: string;
    points: string[];
    stat: { value: string; label: string };
  }
> = {
  Modularity: {
    headline: "Click. Connect. Transform.",
    description:
      "ClicBot's body is made of 11 distinct module types that snap together magnetically with a satisfying click. No screws, no wires, no tools. Just pure, tactile creativity in your hands.",
    src: "https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_pinjie.mp4?mp=1",
    points: [
      "11 module types: Wheel, Suction Cup, Grasper, Smart Foot, Distance Sensor & more",
      "Thousands of possible robot combinations",
      "Tool-free click connections — safe for all ages",
      "Internal wiring built into every module",
      "Mix and match with community-designed builds",
    ],
    stat: { value: "1000+", label: "Possible robot forms" },
  },
  Intelligence: {
    headline: "A robot that reacts to its world",
    description:
      "ClicBot is packed with sensors and smart AI that lets it respond to touch, distance, sound, and movement. Every configuration has its own unique behaviours and reactions — making each robot feel genuinely alive.",
    src: "https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_suction.mp4?mp=1",

    points: [
      "Touch-sensitive head and body interactions",
      "Distance sensor for obstacle awareness",
      "Voice and sound response",
      "Emotion-driven movement & expressions",
      "App-connected for deeper customisation",
    ],
    stat: { value: "20K+", label: "Program updates shipped" },
  },
  Education: {
    headline: "Learn to code by building your robot",
    description:
      "ClicBot Coding Academy turns programming into play. Kids start with visual drag-and-drop blocks and progress to real code — all using their own robot as the live testing ground.",
    src: "https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_suc_cup.mp4?mp=1",
    points: [
      "Visual block programming for beginners",
      "Progressive path to real coding languages",
      "Step-by-step guided tutorials for 50+ builds",
      "Weekly competitions and coding challenges",
      "Free ClicBot app on iOS and Android",
    ],
    stat: { value: "50+", label: "Guided tutorial builds" },
  },
  Community: {
    headline: "Build, Share & Inspire others.",
    description:
      "ClicBot's built-in community is where builders show off their wildest creations. The most stunning designs get turned into official tutorials — so your invention could teach thousands of kids around the world.",
    src: "https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_wheel.mp4?mp=1",

    points: [
      "66,000+ user creations and counting",
      "Share photos, videos, and build guides",
      "Weekly challenges with prizes",
      "Top builds become official guided tutorials",
      "Connect with ClicBot builders in 104 countries",
    ],
    stat: { value: "66K+", label: "Community creations" },
  },
};

export const modules = [
  {
    name: "Servo Motor",
    icon: icons.gear,
    desc: "The muscle. Powers articulated arm, leg, and tail movements.",
  },
  {
    name: "Wheel",
    icon: icons.wheel,
    desc: "Transform ClicBot into a remote-control racing car instantly.",
  },
  {
    name: "Suction Cup",
    icon: icons.cylinder,
    desc: "Defies gravity. ClicBot walks on walls and glass surfaces.",
  },

  {
    name: "Distance Sensor",
    icon: icons.eye,
    desc: "Detects obstacles, people, and triggers reactive behaviours.",
  },
  {
    name: "Speaker",
    icon: icons.speaker,
    desc: "ClicBot's voice — sounds, music, and spoken responses.",
  },

  {
    name: "Camera Module",
    icon: icons.camera,
    desc: "Enables selfie mode, video recording, and face tracking.",
  },
  {
    name: "Gyroscope",
    icon: icons.sensor,
    desc: "Balance sensor for acrobatics and tilt-reactive behaviour.",
  },
  {
    name: "Touch Sensor",
    icon: icons.hand,
    desc: "Responds to pats, taps, and strokes like a real pet would.",
  },
  // {
  //   name: "Smart Foot",
  //   emoji: "🦶",
  //   desc: "Stabilises ClicBot for acrobatic standing and balance poses.",
  // },
  //   {
  //   name: "Face Display",
  //   emoji: "😄",
  //   icon: icons.robot,
  //   desc: "An expressive screen that shows emotions and animations.",
  // },
  {
    name: "Grasper",
    icon: icons.arm,
    desc: "A functional claw that picks up and holds small objects.",
  },
];

export const builds = [
  "Lucky the Puppy",
  "Bac",
  "Bic",
  "Scorpion",
  "Rambler",
  "King Crab",
  "Planet Rover",
  "Window Spider",
  "Racing Car",
  "Tail-Bot",
  "Crab-Bot",
  "Dancing-Bot",
  "Shooting-Bot",
  "Train-Bot",
  "Skiing-Bot",
  "Moto-Bot",
  "Tricycle-Bot",
  "Quadruped-Bot",
  "Suction Truck",
  "Little Grasper",
];

export const featuresFaqs = [
  {
    q: "What are the 11 module types?",
    a: "Servo Motor, Wheel, Suction Cup, Smart Foot, Grasper, Distance Sensor, Speaker, Face Display, Camera, Gyroscope, and Touch Sensor. Each has unique capabilities that change how ClicBot moves, looks, and behaves.",
  },
  {
    q: "Do I need any tools to build ClicBot?",
    a: "None at all. Every module connects via magnetic click-lock connectors. The internal wiring is pre-built into every piece — just snap them together and start playing.",
  },
  {
    q: "How many robots can I build from one kit?",
    a: "The Starter Kit lets you build 20+ configurations. The Standard and Full Kits expand that to 50+ guided builds, and with the Maker Kit the possibilities are effectively endless.",
  },
  {
    q: "What age is ClicBot for?",
    a: "ClicBot is designed for ages 6 and up, though kids as young as 3 enjoy interacting with the pre-built Lucky puppy form. The coding features grow with older kids all the way into their teens.",
  },
  {
    q: "Is the ClicBot app free?",
    a: "Yes — the ClicBot app is completely free on iOS and Android. It includes guided tutorials, the coding platform, games, and access to the community hub.",
  },
];
