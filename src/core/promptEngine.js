export function generateFullPrompt(modules, state) {
  return modules
    .map(module => module.generatePrompt(state[module.id] ?? {}))
    .filter(prompt => typeof prompt === "string" && prompt.trim())
    .join("\n\n");
}
