// Main engine. To add categories or prompt sentences, edit only js/config/*.js and js/config/index.js.
import { photographyConfig } from "./config/index.js";

const container = document.getElementById("categoriesContainer");
const promptElement = document.getElementById("generatedPrompt");
const copyButton = document.getElementById("copyButton");
const feedbackElement = document.getElementById("feedback");

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
    const values = new Set();
    for (const option of category.options) {
      if (values.has(option.value)) throw new Error(`Duplicate option value in ${category.id}: ${option.value}`);
      values.add(option.value);
    }
  }
}

function renderCategories() {
  const fragment = document.createDocumentFragment();

  for (const category of photographyConfig) {
    const group = document.createElement("div");
    group.className = "category";

    const label = document.createElement("label");
    label.className = "category-label";
    label.htmlFor = `category-${category.id}`;
    label.textContent = category.title;

    const wrapper = document.createElement("div");
    wrapper.className = "select-wrap";
    const select = document.createElement("select");
    select.className = "category-select";
    select.id = `category-${category.id}`;
    select.name = category.id;

    for (const option of category.options) {
      const item = document.createElement("option");
      item.value = option.value;
      item.textContent = option.label;
      select.appendChild(item);
    }
    select.value = selectedValues[category.id];
    select.addEventListener("change", () => {
      selectedValues[category.id] = select.value;
      updatePrompt();
    });

    wrapper.appendChild(select);
    group.append(label, wrapper);
    fragment.appendChild(group);
  }
  container.replaceChildren(fragment);
}

function buildPrompt() {
  const pieces = ["Edit the uploaded photograph according to the following instructions:"];
  for (const category of photographyConfig) {
    const choice = category.options.find(option => option.value === selectedValues[category.id]);
    if (typeof choice?.prompt === "string" && choice.prompt.trim()) pieces.push(choice.prompt.trim());
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
    feedbackElement.textContent = "Copy unavailable. Select the prompt text to copy manually.";
  }
});

validateConfig();
renderCategories();
updatePrompt();
