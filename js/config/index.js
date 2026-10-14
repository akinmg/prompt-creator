// IMPORT NEW CATEGORIES HERE, then add them to the ordered array below.
import { quality, style, aspectRatio, shootStyle, device, lighting } from "./photography.js";
import { age, gender } from "./physical.js";  

export const photographyConfig = [
  quality,
  style,
  aspectRatio,
  shootStyle,
  device,
  lighting,
];

export const phisicalPropertyConfig = [
  age,
  gender
]