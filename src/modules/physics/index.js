import { optionMenus } from "./library/options.js";
import { generatePrompt } from "./library/prompt.js";

// Modülün seçili değerleri
const selectedOptions = Object.fromEntries(
  optionMenus.map(({ id, options, defaultValue }) => [
    id,
    defaultValue ?? options[0]?.value ?? "",
  ])
);

// Güncel prompt
export function getPrompt() {
  return generatePrompt(selectedOptions);
}

// Option menüleri
export function getOptionMenus() {
  return optionMenus;
}

// Seçili değerleri
export function getSelectedOptions() {
  return { ...selectedOptions };
}

// Seçenek güncelleme
export function updateOption(id, value) {
  const menu = optionMenus.find(menu => menu.id === id);

  if (!menu) {
    throw new Error(`Unknown option menu: ${id}`);
  }

  if (!menu.options.some(option => option.value === value)) {
    throw new Error(`Invalid option value: ${value}`);
  }

  selectedOptions[id] = value;

  document.dispatchEvent(
   new CustomEvent("physics:change",  {
      detail: {
        prompt: getPrompt(),
        selectedOptions: getSelectedOptions(),
      },
    })
  );
}
