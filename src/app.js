
import {
  getPrompt as getPhotographPrompt,
  getOptionMenus,
  getSelectedOptions,
  updateOption
} from "./modules/photography/index.js";

// Tüm modüllerin cümleleri
const promptSections = new Map();

// HTML render
function renderPrompt() {
  const output = document.getElementById("promptOutput");

  if (!output) return;

  output.textContent = [...promptSections.values()]
    .filter(Boolean)
    .join("\n\n");
}

// Modül cümlesi ekle / güncelle
function setPromptSection(id, prompt) {
  promptSections.set(id, prompt);
  renderPrompt();
}

// Seçim menülerini oluştur
function renderOptionMenus() {
  const container = document.getElementById("photographOptions");
  if (!container) return;

  const selectedOptions = getSelectedOptions();
  container.replaceChildren();

  for (const menu of getOptionMenus()) {
    const field = document.createElement("div");
    const label = document.createElement("label");
    const select = document.createElement("select");
    select.id = `photograph-${menu.id}`;
    label.htmlFor = select.id;
    label.textContent = menu.label;

    for (const option of menu.options) {
      const element = document.createElement("option");
      element.value = option.value;
      element.textContent = option.label;
      select.append(element);
    }

    select.value = selectedOptions[menu.id];
    select.addEventListener("change", () => updateOption(menu.id, select.value));
    field.append(label, select);
    container.append(field);
  }
}

// Uygulamayı başlat
function initializeApp() {
  renderOptionMenus();
  // Photograph modülünün başlangıç cümlesi
  setPromptSection("photograph", getPhotographPrompt());

  // Photograph değişikliklerini dinle
  document.addEventListener("photograph:change", (event) => {
    setPromptSection("photograph", event.detail.prompt);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
