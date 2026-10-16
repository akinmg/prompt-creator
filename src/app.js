import { modules } from "./registry.js";

const promptSections = new Map();

function renderPrompt() {
  const output = document.getElementById("promptOutput");
  if (!output) return;

  output.textContent = [...promptSections.values()]
    .filter(Boolean)
    .join("\n\n");
}

function renderModuleMenus(module) {
  const container = document.getElementById(
    `${module.id}Options`
  );

  if (!container) return;

  const selected = module.api.getSelectedOptions();

  container.replaceChildren();

  for (const menu of module.api.getOptionMenus()) {
    const field = document.createElement("div");
    const label = document.createElement("label");
    const select = document.createElement("select");

    select.id = `${module.id}-${menu.id}`;
    label.htmlFor = select.id;
    label.textContent = menu.label;

    for (const option of menu.options) {
      const element = document.createElement("option");
      element.value = option.value;
      element.textContent = option.label;
      select.append(element);
    }

    select.value = selected[menu.id];

    select.addEventListener("change", () => {
  console.log("Seçilen:", menu.id, select.value);

  module.api.updateOption(menu.id, select.value);

  console.log("Yeni prompt:", module.api.getPrompt());
});

    field.append(label, select);
    container.append(field);
  }
}

function initializeApp() {
  for (const module of modules) {
    renderModuleMenus(module);

    promptSections.set(
      module.id,
      module.api.getPrompt()
    );

    document.addEventListener(
      `${module.id}:change`,
      (event) => {
        promptSections.set(
          module.id,
          event.detail.prompt
        );

        renderPrompt();
      }
    );
  }

  renderPrompt();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp, {
    once: true,
  });
} else {
  initializeApp();
}