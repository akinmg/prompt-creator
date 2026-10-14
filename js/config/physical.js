export const subjectAge = {
  id: "Subject Age",
  title: "Subject Age",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Young Adult", value: "Young Adult", prompt: "Depict the subject as a young adult woman, with age-appropriate facial features and physical characteristics." },
    { label: "Middle-Aged", value: "Middle-Aged", prompt: "Depict the subject as a middle-aged woman, with age-appropriate facial features and physical characteristics." },
    { label: "Elderly", value: "Elderly", prompt: "Depict the subject as an elderly woman, with age-appropriate facial features and physical characteristics." }
  ]
};

export const subjectGender = {
  id: "Subject Gender",
  title: "Subject Gender",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Woman", value: "Woman", prompt: "Portray the subject as a woman, maintaining natural and realistic physical characteristics." },
    { label: "Man", value: "Man", prompt: "Portray the subject as a man, maintaining natural and realistic physical characteristics." },
    { label: "Non-Binary Person", value: "Non-Binary Person", prompt: "Portray the subject as a non-binary person, maintaining natural and realistic physical characteristics." }
  ]
};

export const positionInFrame = {
  id: "Position In Frame",
  title: "Position In Frame",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "In The Center", value: "In The Center", prompt: "Position the subject in the center, maintaining a balanced and natural composition." },
    { label: "On The Left", value: "On The Left", prompt: "Position the subject on the left, maintaining a balanced and natural composition." },
    { label: "On The Right", value: "On The Right", prompt: "Position the subject on the right, maintaining a balanced and natural composition." }
  ]
};

export const shotType = {
  id: "Shot Type",
  title: "Shot Type",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Full-Body Shot", value: "Full-Body Shot", prompt: "Capture the subject in a full-body shot, ensuring natural framing and composition." },
    { label: "Medium Shot", value: "Medium Shot", prompt: "Capture the subject in a medium shot, ensuring natural framing and composition." },
    { label: "Close-Up Portrait", value: "Close-Up Portrait", prompt: "Capture the subject in a close-up portrait, ensuring natural framing and composition." }
  ]
};

export const bodyFrame = {
  id: "Body Frame",
  title: "Body Frame",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Petite", value: "Petite", prompt: "Give the subject a petite frame with natural anatomical proportions." },
    { label: "Medium", value: "Medium", prompt: "Give the subject a medium frame with natural anatomical proportions." },
    { label: "Large", value: "Large", prompt: "Give the subject a large frame with natural anatomical proportions." }
  ]
};

export const heightImpression = {
  id: "Height Impression",
  title: "Height Impression",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Short", value: "Short", prompt: "Depict the subject with a naturally short stature while maintaining realistic body proportions." },
    { label: "Average-Height", value: "Average-Height", prompt: "Depict the subject with a naturally average-height stature while maintaining realistic body proportions." },
    { label: "Tall", value: "Tall", prompt: "Depict the subject with a naturally tall stature while maintaining realistic body proportions." }
  ]
};

export const bodyBuild = {
  id: "Body Build",
  title: "Body Build",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Slim", value: "Slim", prompt: "Give the subject a slim physique with realistic body contours." },
    { label: "Athletic", value: "Athletic", prompt: "Give the subject an athletic physique with realistic body contours." },
    { label: "Slightly Plump", value: "Slightly Plump", prompt: "Give the subject a slightly plump physique with realistic body contours." },
    { label: "Curvy", value: "Curvy", prompt: "Give the subject a curvy physique with realistic body contours." },
    { label: "Plus-Size", value: "Plus-Size", prompt: "Give the subject a plus-size physique with realistic body contours." }
  ]
};

export const armShape = {
  id: "Arm Shape",
  title: "Arm Shape",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Slender", value: "Slender", prompt: "Depict the subject's arms as slender, maintaining natural anatomical details." },
    { label: "Naturally Full", value: "Naturally Full", prompt: "Depict the subject's arms as naturally full, maintaining natural anatomical details." },
    { label: "Muscular", value: "Muscular", prompt: "Depict the subject's arms as muscular, maintaining natural anatomical details." }
  ]
};

export const thighShape = {
  id: "Thigh Shape",
  title: "Thigh Shape",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Slim", value: "Slim", prompt: "Give the subject slim thighs with realistic anatomical proportions." },
    { label: "Naturally Full", value: "Naturally Full", prompt: "Give the subject naturally full thighs with realistic anatomical proportions." },
    { label: "Muscular", value: "Muscular", prompt: "Give the subject muscular thighs with realistic anatomical proportions." }
  ]
};

export const waistShape = {
  id: "Waist Shape",
  title: "Waist Shape",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Narrow", value: "Narrow", prompt: "Depict the subject with a narrow waistline, preserving natural body contours." },
    { label: "Softly Rounded", value: "Softly Rounded", prompt: "Depict the subject with a softly rounded waistline, preserving natural body contours." },
    { label: "Straight", value: "Straight", prompt: "Depict the subject with a straight waistline, preserving natural body contours." },
    { label: "Defined", value: "Defined", prompt: "Depict the subject with a defined waistline, preserving natural body contours." }
  ]
};

export const proportionStyle = {
  id: "Proportion Style",
  title: "Proportion Style",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Realistic", value: "Realistic", prompt: "Maintain realistic body proportions throughout the image." },
    { label: "Naturally Balanced", value: "Naturally Balanced", prompt: "Maintain naturally balanced body proportions throughout the image." },
    { label: "Stylized", value: "Stylized", prompt: "Maintain stylized body proportions throughout the image." }
  ]
};

export const avoidBodyShape = {
  id: "Avoid Body Shape",
  title: "Avoid Body Shape",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Exaggerated Hourglass", value: "Exaggerated Hourglass", prompt: "Avoid depicting the subject with exaggerated hourglass body proportions." },
    { label: "Excessively Muscular", value: "Excessively Muscular", prompt: "Avoid depicting the subject with excessively muscular body proportions." },
    { label: "Unnaturally Thin", value: "Unnaturally Thin", prompt: "Avoid depicting the subject with unnaturally thin body proportions." }
  ]
};

export const avoidWaist = {
  id: "Avoid Waist",
  title: "Avoid Waist",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Extremely Narrow", value: "Extremely Narrow", prompt: "Avoid creating an extremely narrow waistline that appears anatomically unnatural." },
    { label: "Exaggeratedly Defined", value: "Exaggeratedly Defined", prompt: "Avoid creating an exaggeratedly defined waistline that appears anatomically unnatural." },
    { label: "Artificially Sculpted", value: "Artificially Sculpted", prompt: "Avoid creating an artificially sculpted waistline that appears anatomically unnatural." }
  ]
};

export const avoidLegShape = {
  id: "Avoid Leg Shape",
  title: "Avoid Leg Shape",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Artificially Elongated", value: "Artificially Elongated", prompt: "Avoid depicting the subject with artificially elongated legs." },
    { label: "Disproportionately Short", value: "Disproportionately Short", prompt: "Avoid depicting the subject with disproportionately short legs." },
    { label: "Unnaturally Thin", value: "Unnaturally Thin", prompt: "Avoid depicting the subject with unnaturally thin legs." }
  ]
};

export const skinTone = {
  id: "Skin Tone",
  title: "Skin Tone",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Very Fair", value: "Very Fair", prompt: "Give the subject a natural very fair skin tone with realistic color variation." },
    { label: "Fair", value: "Fair", prompt: "Give the subject a natural fair skin tone with realistic color variation." },
    { label: "Medium", value: "Medium", prompt: "Give the subject a natural medium skin tone with realistic color variation." },
    { label: "Olive", value: "Olive", prompt: "Give the subject a natural olive skin tone with realistic color variation." },
    { label: "Dark", value: "Dark", prompt: "Give the subject a natural dark skin tone with realistic color variation." }
  ]
};

export const skinColorDetail = {
  id: "Skin Color Detail",
  title: "Skin Color Detail",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Pale Milky White", value: "Pale Milky White", prompt: "Render the subject's complexion with a pale milky white appearance." },
    { label: "Warm Beige", value: "Warm Beige", prompt: "Render the subject's complexion with a warm beige appearance." },
    { label: "Golden Brown", value: "Golden Brown", prompt: "Render the subject's complexion with a golden brown appearance." },
    { label: "Deep Brown", value: "Deep Brown", prompt: "Render the subject's complexion with a deep brown appearance." }
  ]
};

export const tanLevel = {
  id: "Tan Level",
  title: "Tan Level",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "No Visible Tan", value: "No Visible Tan", prompt: "Depict the subject's skin with no visible tan, maintaining a natural appearance." },
    { label: "Light Tan", value: "Light Tan", prompt: "Depict the subject's skin with a light tan, maintaining a natural appearance." },
    { label: "Moderate Tan", value: "Moderate Tan", prompt: "Depict the subject's skin with a moderate tan, maintaining a natural appearance." },
    { label: "Deep Tan", value: "Deep Tan", prompt: "Depict the subject's skin with a deep tan, maintaining a natural appearance." }
  ]
};

export const skinTexture = {
  id: "Skin Texture",
  title: "Skin Texture",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Natural Skin Texture", value: "Natural Skin Texture", prompt: "Preserve natural skin texture across the subject's skin for an authentic photographic appearance." },
    { label: "Visible Pores", value: "Visible Pores", prompt: "Preserve visible pores across the subject's skin for an authentic photographic appearance." },
    { label: "Smooth Realistic Texture", value: "Smooth Realistic Texture", prompt: "Preserve smooth realistic texture across the subject's skin for an authentic photographic appearance." }
  ]
};
