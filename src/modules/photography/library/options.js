import {
  sourceImageOptions,
  realismLevelOptions,
  orientationOptions,
  aspectRatioOptions,
  photographyStyleOptions,
  shootingStyleOptions,
  cameraModelOptions,
} from "./types.js";

export const optionMenus = [
  {
    id: "sourceImage",
    label: "Source Image",
    options: sourceImageOptions,
    defaultValue: "uploaded photo",
  },
  {
    id: "realismLevel",
    label: "Realism Level",
    options: realismLevelOptions,
    defaultValue: "highly realistic",
  },
  {
    id: "orientation",
    label: "Orientation",
    options: orientationOptions,
    defaultValue: "vertical",
  },
  {
    id: "aspectRatio",
    label: "Aspect Ratio",
    options: aspectRatioOptions,
    defaultValue: "9:16",
  },
  {
    id: "photographyStyle",
    label: "Photography Style",
    options: photographyStyleOptions,
    defaultValue: "fashion photograph",
  },
  {
    id: "shootingStyle",
    label: "Shooting Style",
    options: shootingStyleOptions,
    defaultValue: "naturally",
  },
  {
    id: "cameraModel",
    label: "Camera Model",
    options: cameraModelOptions,
    defaultValue: "iPhone 17 Pro Max",
  },
];