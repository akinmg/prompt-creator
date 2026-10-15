import { modules } from "./modules/index.js";
import { createModuleRegistry } from "./core/moduleRegistry.js";
import { createStore } from "./core/store.js";
import { generateFullPrompt } from "./core/promptEngine.js";
import { renderMenus } from "./ui/menuRenderer.js";
import { renderPrompt } from "./ui/promptRenderer.js";

function initializeApp() {
  const container = document.getElementById("moduleOptions");
  const output = document.getElementById("promptOutput");
  if (!container || !output) return;

  const registry = createModuleRegistry();
  modules.forEach(module => registry.register(module));
  const activeModules = registry.getAll();
  const store = createStore(activeModules);

  renderMenus(activeModules, store, container);
  const updatePrompt = state => {
    renderPrompt(generateFullPrompt(activeModules, state), output);
  };
  store.subscribe(updatePrompt);
  updatePrompt(store.getState());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp, { once: true });
} else {
  initializeApp();
}
