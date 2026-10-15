export function renderPrompt(prompt, output) {
  if (output && output.textContent !== prompt) {
    output.textContent = prompt;
  }
}
