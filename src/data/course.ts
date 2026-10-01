export interface Module {
  number: string;
  title: string;
  description: string;
  lessons: string[];
}

export const modules: Module[] = [
  {
    number: "01",
    title: "Find the sharp edge",
    description:
      "Turn broad experience into a precise promise people can immediately understand.",
    lessons: ["Audience tension map", "Offer thesis", "Positioning teardown"],
  },
  {
    number: "02",
    title: "Build the offer",
    description:
      "Shape the transformation, delivery model, and price into one coherent product.",
    lessons: ["Outcome architecture", "Scope boundaries", "Pricing logic"],
  },
  {
    number: "03",
    title: "Create the campaign",
    description:
      "Write a launch narrative that earns attention without manufacturing urgency.",
    lessons: ["Message hierarchy", "Launch assets", "Email sequence"],
  },
  {
    number: "04",
    title: "Ship and learn",
    description:
      "Launch with a useful measurement plan, then improve the next cycle.",
    lessons: ["Live launch room", "Signal dashboard", "Post-launch review"],
  },
];

export const testimonials = [
  {
    quote:
      "I stopped selling a collection of services and started selling a clear result. My first cohort filled in nine days.",
    name: "Nina Patel",
    role: "Brand strategist",
  },
  {
    quote:
      "The campaign system gave us structure without making the work sound generic. We doubled our previous launch revenue.",
    name: "Marcus Lee",
    role: "Creative educator",
  },
  {
    quote:
      "Every lesson produced something we used immediately. I finished with a real offer, not another folder of notes.",
    name: "Elena Ruiz",
    role: "Independent designer",
  },
];
