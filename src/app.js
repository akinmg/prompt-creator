
import {
  getPrompt as getPhotographPrompt
} from "./photographmodule/index.js";

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

// Uygulamayı başlat
function initializeApp() {
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
