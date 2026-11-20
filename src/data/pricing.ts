export const plans = [
  {
    id: "starter",
    name: "Starter Kit",
    tagline: "Your first ClicBot adventure",
    price: 119,
    color: "#888880",
    highlight: false,
    badge: undefined as string | undefined,
    features: [
      "Core ClicBot unit",
      "Essential module set",
      "20+ guided build tutorials",
      "Free ClicBot app (iOS & Android)",
      "Access to coding platform",
      "Community access",
      "1-year warranty",
    ],
    notIncluded: [
      "Wheel & Suction Cup modules",
      "Advanced sensor pack",
      "Maker expansion parts",
    ],
  },
  {
    id: "standard",
    name: "Standard Kit",
    tagline: "The complete ClicBot experience",
    price: 189,
    color: "#0057ff",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter Kit",
      "Wheel & mobility modules",
      "Suction Cup module",
      "Distance sensor included",
      "35+ guided build tutorials",
      "Lucky (Puppy) pre-configured",
      "2-year warranty",
    ],
    notIncluded: [] as string[],
  },
  {
    id: "maker",
    name: "Maker Kit",
    tagline: "For the serious builder",
    price: 299,
    color: "#0057FF",
    highlight: false,
    badge: undefined as string | undefined,
    features: [
      "All 11 module types included",
      "50+ guided build tutorials",
      "Unlimited robot combinations",
      "Priority app support",
      "Exclusive Maker community badge",
      "Early access to new modules",
      "3-year warranty",
    ],
    notIncluded: [] as string[],
  },
];

export const trustBadges = [
  "Free worldwide shipping",
  "30-day returns",
  "No subscription needed",
  "Free ClicBot app forever",
];

export const kitInclusions = [
  {
    icon: "🧩",
    title: "Modules",
    desc: "Magnetically click together — no tools, no wires, no frustration.",
  },
  {
    icon: "📱",
    title: "Free App",
    desc: "iOS & Android app with tutorials, coding platform, and community hub.",
  },
  {
    icon: "📖",
    title: "Guided Builds",
    desc: "Step-by-step tutorials to build 20–50+ different robot forms.",
  },
  {
    icon: "🌐",
    title: "Community",
    desc: "Join 66,000+ creators. Share builds, join challenges, get inspired.",
  },
];

export const comparisonRows: [string, boolean, boolean, boolean][] = [
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
];

export const pricingFaqs = [
  {
    q: "What's the difference between the kits?",
    a: "The kits differ in how many module types are included. The Starter gives you the essentials, the Standard adds mobility and sensor modules (enabling builds like the Racing Car and Window Spider), and the Maker Kit includes all 11 module types for truly unlimited combinations.",
  },
  {
    q: "Can I buy extra modules separately?",
    a: "Yes — all 11 module types are available to buy individually through our online store and app. You can expand any kit at any time.",
  },
  {
    q: "Is there a subscription fee?",
    a: "No. The ClicBot app, all guided tutorials, and the community platform are completely free. You only pay for the kit — once.",
  },
  {
    q: "What age is ClicBot for?",
    a: "ClicBot is designed for ages 6 and up. The Lucky puppy form is accessible to younger children from age 3 with adult supervision. The coding platform grows with kids into their teens.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we ship to 104 countries worldwide. International shipping rates and times are calculated at checkout.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day no-questions-asked return policy. If you're not delighted with ClicBot, we'll refund you in full.",
  },
];
