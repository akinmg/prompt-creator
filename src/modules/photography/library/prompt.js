
function getArticle(word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

export function generatePrompt({
  sourceImage = "uploaded photo",
  realismLevel = "highly realistic",
  orientation = "vertical",
  aspectRatio = "9:16",
  photographyStyle = "fashion photograph",
  shootingStyle = "naturally",
  cameraModel = "iPhone 17 Pro Max",
} = {}) {
  const realismArticle = getArticle(realismLevel);
  const cameraArticle = getArticle(cameraModel);

  return `Edit the ${sourceImage} into ${realismArticle} ${realismLevel} ${orientation} ${aspectRatio} ${photographyStyle}, captured as if shot ${shootingStyle} with ${cameraArticle} ${cameraModel}.`;
}
