// IMPORT NEW CATEGORIES HERE, then add them to the ordered array below.
import { quality, style, aspectRatio, shootStyle, device, lighting } from "./photography.js";
import {
  subjectAge,
  subjectGender,
  positionInFrame,
  shotType,
  bodyFrame,
  heightImpression,
  bodyBuild,
  armShape,
  thighShape,
  waistShape,
  proportionStyle,
  avoidBodyShape,
  avoidWaist,
  avoidLegShape,
  skinTone,
  skinColorDetail,
  tanLevel,
  skinTexture
} from "./physical.js";

import { outfitVisibility, legVisibility, shoeVisibility, obstructionControl, subjectSpacing, cropProtection } from "./visibility.js";

export const photographyConfig = [
  quality,
  style,
  aspectRatio,
  shootStyle,
  device,
  lighting,
];


export const phisicalPropertyConfig = [
  subjectAge,
  subjectGender,
  positionInFrame,
  shotType,
  bodyFrame,
  heightImpression,
  bodyBuild,
  armShape,
  thighShape,
  waistShape,
  proportionStyle,
  avoidBodyShape,
  avoidWaist,
  avoidLegShape,
  skinTone,
  skinColorDetail,
  tanLevel,
  skinTexture
];


export const visibilityConfig = [
  outfitVisibility,
  legVisibility,
  shoeVisibility,
  obstructionControl,
  subjectSpacing,
  cropProtection,
];