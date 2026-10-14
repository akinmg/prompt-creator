export const aspectRatio = {
  id: "aspect_ratio",
  title: "Aspect Ratio",
  defaultValue: "9:16",
  options: [
    { label: "9:16", value: "9:16", prompt: "Use a vertical 9:16 composition, carefully framing the subject for a full-screen portrait." },
    { label: "4:5", value: "4:5", prompt: "Use a 4:5 portrait composition with balanced framing and natural proportions." },
    { label: "1:1", value: "1:1", prompt: "Use a square 1:1 composition with carefully balanced subject placement." }
  ]
};

export const device = {
  id: "device",
  title: "Device",
  defaultValue: "iPhone 17 Pro Max",
  options: [
    { label: "iPhone 17 Pro Max", value: "iPhone 17 Pro Max", prompt: "Simulate the photographic characteristics of an iPhone 17 Pro Max, with natural HDR and realistic smartphone image processing." },
    { label: "Smartphone", value: "smartphone", prompt: "Create an authentic smartphone photograph with natural exposure, believable sharpness, and subtle computational processing." },
    { label: "Professional Camera", value: "professional camera", prompt: "Simulate a professional camera photograph with realistic optical depth, refined detail, and natural tonal transitions." }
  ]
};

export const lighting = {
  id: "lighting",
  title: "Lighting",
  defaultValue: "natural light",
  options: [
    { label: "Natural Light", value: "natural light", prompt: "Illuminate the scene with natural daylight, producing realistic shadows, balanced highlights, and authentic skin tones." },
    { label: "Golden Hour", value: "golden hour", prompt: "Use warm golden-hour sunlight, creating soft highlights, gentle shadows, and atmospheric warmth." },
    { label: "Studio Lighting", value: "studio lighting", prompt: "Use controlled studio lighting with soft diffusion, precise highlights, and professional shadow definition." }
  ]
};

export const quality = {
  id: "quality",
  title: "Quality",
  defaultValue: "ultra-realistic",
  options: [
    { label: "Highly Realistic", value: "highly realistic", prompt: "Create a highly realistic photograph with authentic visual details and lifelike textures." },
    { label: "Ultra-Realistic", value: "ultra-realistic", prompt: "Transform the uploaded photo into an ultra-realistic photograph. Preserve natural skin texture, accurate details, and lifelike proportions." },
    { label: "Professional", value: "professional", prompt: "Create a professional-quality photograph with refined composition, balanced exposure, and exceptional clarity." }
  ]
};

export const shootStyle = {
  id: "shoot_style",
  title: "Shoot Style",
  defaultValue: "naturally",
  options: [
    { label: "Naturally", value: "naturally", prompt: "Capture the subject naturally, with an authentic expression and relaxed body language." },
    { label: "Casually", value: "casually", prompt: "Give the photograph a spontaneous, casual lifestyle appearance, avoiding overly staged poses." },
    { label: "Professionally", value: "professionally", prompt: "Apply professional photography techniques with intentional composition and refined visual balance." }
  ]
};

export const style = {
  id: "style",
  title: "Style",
  defaultValue: "fashion",
  options: [
    { label: "Fashion", value: "fashion", prompt: "Apply a contemporary fashion photography aesthetic with elegant styling and natural poses." },
    { label: "Editorial Fashion", value: "editorial fashion", prompt: "Use a high-end editorial fashion photography aesthetic inspired by luxury magazine campaigns." },
    { label: "Street Fashion", value: "street fashion", prompt: "Create an authentic street fashion photograph with an urban atmosphere, spontaneous posing, and modern styling." }
  ]
};

