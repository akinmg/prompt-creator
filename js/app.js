// Main functionality. New categories do not require changes in this file.
import { photographyConfig } from "./config/index.js";

const container = document.getElementById("categoriesContainer");
const promptElement = document.getElementById("generatedPrompt");
const copyButton = document.getElementById("copyButton");
const feedbackElement = document.getElementById("feedback");

// Keep selections independent from the DOM, using category IDs as keys.
const selectedValues = Object.fromEntries(
  photographyConfig.map(category => [category.id, category.defaultValue])
);

function validateConfig() {
  const ids = new Set();
  for (const category of photographyConfig) {
    if (!category.id || ids.has(category.id)) throw new Error(`Duplicate or missing category id: ${category.id}`);
    ids.add(category.id);
    if (!Array.isArray(category.options) || category.options.length === 0) throw new Error(`Missing options: ${category.id}`);
    if (!category.options.some(option => option.value === category.defaultValue)) throw new Error(`Invalid defaultValue: ${category.id}`);
    const optionValues = new Set();
    for (const option of category.options) {
      if (optionValues.has(option.value)) throw new Error(`Duplicate option value in ${category.id}: ${option.value}`);
      optionValues.add(option.value);
    }
  }
}

function renderCategories() {
  const fragment = document.createDocumentFragment();

  for (const category of photographyConfig) {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "category";

    const legend = document.createElement("legend");
    legend.className = "category-title";
    legend.textContent = category.title;
    fieldset.appendChild(legend);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "options";

    for (const option of category.options) {
      const label = document.createElement("label");
      label.className = "option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = category.id;
      radio.value = option.value;
      radio.checked = selectedValues[category.id] === option.value;
      radio.addEventListener("change", () => {
        if (!radio.checked) return;
        selectedValues[category.id] = option.value;
        updatePrompt();
      });

      const text = document.createElement("span");
      text.textContent = option.label;
      label.append(radio, text);
      optionsWrapper.appendChild(label);
    }

    fieldset.appendChild(optionsWrapper);
    fragment.appendChild(fieldset);
  }

  container.replaceChildren(fragment);
}

function buildPrompt() {
  const pieces = ["Edit the uploaded photograph according to the following instructions:"];

  for (const category of photographyConfig) {
    const selected = category.options.find(option => option.value === selectedValues[category.id]);
    if (selected?.prompt?.trim()) pieces.push(selected.prompt.trim());
  }

  return pieces.join("\n\n");
}

function updatePrompt() {
  promptElement.textContent = buildPrompt();
}

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(buildPrompt());
    feedbackElement.textContent = "Prompt copied.";
  } catch {
    feedbackElement.textContent = "Unable to copy automatically. Select and copy the prompt text.";
  }
});

validateConfig();
renderCategories();
updatePrompt();
