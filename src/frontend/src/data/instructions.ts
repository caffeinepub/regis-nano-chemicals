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
    id: "dbs-car-shine",
    name: "DBS Car Shine Solution",
    color: "blue",
    steps: [
      {
        icon: "droplets",
        text: "Wash the car surface thoroughly with clean water and car shampoo.",
      },
      {
        icon: "wind",
        text: "Dry the surface completely using a clean microfiber towel.",
      },
      {
        icon: "spray-can",
        text: "Apply a small amount of DBS Car Shine Solution onto a microfiber cloth.",
      },
      {
        icon: "rotate-cw",
        text: "Spread evenly across the surface in smooth circular motions.",
      },
      {
        icon: "sparkles",
        text: "Buff gently with a clean dry cloth for a brilliant glossy finish.",
      },
    ],
  },
  {
    id: "scratch-remover-pro",
    name: "Scratch Remover Pro",
    color: "yellow",
    steps: [
      {
        icon: "search",
        text: "Clean the scratched area with soap and water, then dry completely.",
      },
      {
        icon: "pipette",
        text: "Apply a pea-sized amount of Scratch Remover Pro to an applicator pad.",
      },
      {
        icon: "move",
        text: "Work the compound into the scratch using firm back-and-forth strokes.",
      },
      {
        icon: "rotate-cw",
        text: "Switch to circular motions to blend the compound into the surrounding paint.",
      },
      {
        icon: "sparkles",
        text: "Wipe off residue with a clean microfiber cloth and inspect the result.",
      },
    ],
  },
  {
    id: "nano-gloss-polish",
    name: "Nano Gloss Polish",
    color: "blue",
    steps: [
      {
        icon: "car",
        text: "Ensure the car is clean and dry before application.",
      },
      {
        icon: "pipette",
        text: "Apply 2–3 drops of Nano Gloss Polish onto a foam applicator pad.",
      },
      {
        icon: "rotate-cw",
        text: "Work in small sections using overlapping circular motions.",
      },
      {
        icon: "clock",
        text: "Allow the polish to haze for 3–5 minutes before buffing.",
      },
      {
        icon: "sparkles",
        text: "Buff off with a premium microfiber cloth for a showroom-quality shine.",
      },
    ],
  },
  {
    id: "interior-shield",
    name: "Interior Shield Protectant",
    color: "yellow",
    steps: [
      {
        icon: "trash-2",
        text: "Remove dust and debris from interior surfaces with a dry cloth.",
      },
      {
        icon: "spray-can",
        text: "Spray Interior Shield Protectant lightly onto a microfiber applicator.",
      },
      {
        icon: "move",
        text: "Apply evenly across dashboard, door panels, and trim surfaces.",
      },
      {
        icon: "clock",
        text: "Allow 2–3 minutes for the formula to bond with the surface.",
      },
      {
        icon: "check-circle",
        text: "Buff lightly for a clean, satin finish that repels dust and UV rays.",
      },
    ],
  },
];
