
import * as photography from "./modules/photography/index.js";
import * as physics from "./modules/physics/index.js";

export const modules = [
  {
    id: "photography",
    label: "Photography",
    api: photography,
  },
  {
    id: "physics",
    label: "Physics",
    api: physics,
  },
];
