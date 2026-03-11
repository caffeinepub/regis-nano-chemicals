export interface Step {
  icon: string;
  text: string;
}

export interface ProductInstruction {
  id: string;
  name: string;
  steps: Step[];
  color: string;
}

export const instructions: ProductInstruction[] = [
  {
    id: "dashboard-shiner",
    name: "Dashboard Shiner",
    color: "blue",
    steps: [
      {
        icon: "trash-2",
        text: "Remove dust and debris from the dashboard and interior surfaces using a dry cloth.",
      },
      {
        icon: "spray-can",
        text: "Spray Dashboard Shiner lightly onto a clean microfiber applicator cloth.",
      },
      {
        icon: "move",
        text: "Apply evenly across the dashboard, door panels, and all interior trim surfaces.",
      },
      {
        icon: "clock",
        text: "Allow 1\u20132 minutes for the formula to bond and restore shine.",
      },
      {
        icon: "sparkles",
        text: "Buff lightly for a glossy finish that protects and leaves a fresh fragrance.",
      },
    ],
  },
  {
    id: "stain-remover",
    name: "Stain Remover",
    color: "yellow",
    steps: [
      {
        icon: "search",
        text: "Identify the stained area on the car interior, fabric, or surface.",
      },
      {
        icon: "spray-can",
        text: "Spray Stain Remover directly onto the stained area generously.",
      },
      {
        icon: "clock",
        text: "Let it sit for 1\u20132 minutes to break down and loosen the stain.",
      },
      {
        icon: "rotate-cw",
        text: "Scrub gently with a microfiber cloth or soft brush in circular motions.",
      },
      {
        icon: "sparkles",
        text: "Wipe clean with a dry cloth to reveal a stain-free, fresh surface.",
      },
    ],
  },
  {
    id: "waterless-spray-cleaner",
    name: "Waterless Spray Cleaner",
    color: "blue",
    steps: [
      {
        icon: "car",
        text: "No pre-wash needed — use directly on the car body or glass surface.",
      },
      {
        icon: "spray-can",
        text: "Spray Waterless Spray Cleaner evenly across one panel or section at a time.",
      },
      {
        icon: "move",
        text: "Gently wipe with a clean microfiber cloth to lift and remove dirt particles.",
      },
      {
        icon: "rotate-cw",
        text: "Flip the cloth to a clean side and buff the surface to activate the coating.",
      },
      {
        icon: "sparkles",
        text: "Enjoy a spotless finish with body coating and glass lamination protection.",
      },
    ],
  },
];
