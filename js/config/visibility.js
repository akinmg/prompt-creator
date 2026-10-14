
export const outfitVisibility = {
  id: "Outfit Visibility",
  title: "Outfit Visibility",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Entire Outfit", value: "Entire Outfit", prompt: "Ensure the entire outfit is fully visible." },
    { label: "Clothing Details", value: "Clothing Details", prompt: "Ensure all clothing details are clearly visible." },
    { label: "Upper and Lower Garments", value: "Upper and Lower Garments", prompt: "Ensure both upper and lower garments are fully visible." },
    { label: "Every Clothing Layer", value: "Every Clothing Layer", prompt: "Ensure every clothing layer is clearly visible." }
  ]
};

export const legVisibility = {
  id: "Leg Visibility",
  title: "Leg Visibility",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Both Legs", value: "Both Legs", prompt: "Keep both legs completely visible." },
    { label: "Entire Lower Body", value: "Entire Lower Body", prompt: "Keep the entire lower body completely visible." },
    { label: "Knees and Ankles", value: "Knees and Ankles", prompt: "Keep both knees and ankles clearly visible." },
    { label: "Legs and Feet", value: "Legs and Feet", prompt: "Keep both legs and feet completely visible." }
  ]
};

export const shoeVisibility = {
  id: "Shoe Visibility",
  title: "Shoe Visibility",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Both Shoes", value: "Both Shoes", prompt: "Make sure both shoes are fully visible." },
    { label: "Entire Footwear", value: "Entire Footwear", prompt: "Make sure the entire footwear is fully visible." },
    { label: "Shoes and Soles", value: "Shoes and Soles", prompt: "Make sure both shoes and their soles are fully visible." },
    { label: "Feet and Shoes", value: "Feet and Shoes", prompt: "Make sure both feet and shoes are fully visible." }
  ]
};

export const obstructionControl = {
  id: "Obstruction Control",
  title: "Obstruction Control",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Fully Unobstructed", value: "Fully Unobstructed", prompt: "Ensure the entire body remains completely unobstructed." },
    { label: "Outfit Unobstructed", value: "Outfit Unobstructed", prompt: "Ensure the entire outfit remains completely unobstructed." },
    { label: "Legs Unobstructed", value: "Legs Unobstructed", prompt: "Ensure both legs remain completely unobstructed." },
    { label: "Footwear Unobstructed", value: "Footwear Unobstructed", prompt: "Ensure both shoes remain completely unobstructed." }
  ]
};

export const subjectSpacing = {
  id: "Subject Spacing",
  title: "Subject Spacing",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "Comfortable Spacing", value: "Comfortable Spacing", prompt: "Leave comfortable space above the head, below the feet, and on both sides." },
    { label: "Generous Spacing", value: "Generous Spacing", prompt: "Leave generous space above the head, below the feet, and on both sides." },
    { label: "Minimal Spacing", value: "Minimal Spacing", prompt: "Leave minimal but sufficient space around the entire body." },
    { label: "Balanced Spacing", value: "Balanced Spacing", prompt: "Maintain balanced spacing above, below, and on both sides of the body." },
    { label: "Ample Spacing", value: "Ample Spacing", prompt: "Leave ample space around the entire body on all sides." }
  ]
};

export const cropProtection = {
  id: "Crop Protection",
  title: "Crop Protection",
  defaultValue: "",
  options: [
    { label: "None", value: "", prompt: "" },
    { label: "No Body Cropping", value: "No Body Cropping", prompt: "Do not crop any part of the body." },
    { label: "No Clothing Cropping", value: "No Clothing Cropping", prompt: "Do not crop any part of the clothing." },
    { label: "No Shoe Cropping", value: "No Shoe Cropping", prompt: "Do not crop any part of the shoes." },
    { label: "No Outfit Cropping", value: "No Outfit Cropping", prompt: "Do not crop any part of the entire outfit." },
    { label: "No Leg or Footwear Cropping", value: "No Leg or Footwear Cropping", prompt: "Do not crop any part of the legs or footwear." },
    { label: "No Cropping at All", value: "No Cropping at All", prompt: "Do not crop any part of the body, clothing, or shoes." }
  ]
};
