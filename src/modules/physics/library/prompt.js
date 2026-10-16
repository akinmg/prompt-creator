
export function generatePrompt({
  gender = "adult woman",
  framePosition = "center of the frame",
  shotType = "full-body shot",
  height = "petite, short-statured",
  bodyBuild = "softly rounded, slightly plump",
  armShape = "naturally full",
  thighShape = "naturally full",
  waistShape = "soft waistline",
  bodyProportions = "realistic proportions",
  bodyShape = "an exaggerated hourglass figure",
  waistWidth = "an unusually narrow waist",
  legLength = "elongated legs",
  skinTone = "naturally very fair, pale milky-white",
  tanLevel = "no visible tan",
  skinTexture = "realistic skin texture",
} = {}) {
  return `Position the ${gender} in the ${framePosition} in a ${shotType}, with a ${height}, ${bodyBuild} build, ${armShape} arms and ${thighShape} thighs, a ${waistShape}, ${bodyProportions} without ${bodyShape}, ${waistWidth} or ${legLength}, and ${skinTone} skin with ${tanLevel} and ${skinTexture}.`;
}
