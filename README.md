# Photography Prompt Builder

A dependency-free, modular prompt builder powered by native JavaScript ES modules.

## Architecture

- `src/app.js` — application bootstrap only.
- `src/modules/index.js` — the single module registration list.
- `src/core/moduleRegistry.js` — validates and registers modules.
- `src/core/store.js` — stores selected values, validates updates and notifies subscribers.
- `src/core/promptEngine.js` — combines module prompts in registration order.
- `src/ui/menuRenderer.js` — renders native select controls for all modules.
- `src/ui/promptRenderer.js` — displays the combined prompt.
- `src/modules/photography/library/` — Photography option definitions and pure prompt generation.

## Add a module

Create `src/modules/my-module/index.js` exporting a default object:

```js
export default {
  id: "lighting",
  title: "Lighting",
  menus: [
    { id: "light", label: "Light", defaultValue: "soft", options: [
      { label: "Soft", value: "soft" },
      { label: "Hard", value: "hard" },
    ] },
  ],
  generatePrompt: state => `Lighting: ${state.light}.`,
};
```

Import the module into `src/modules/index.js` and append it to the `modules` array.
No changes to `app.js`, core logic, or HTML are needed. Module IDs and menu IDs must be unique within their respective scopes. Default values must be among the menu options.

## Run

Serve the repository root over HTTP (ES modules cannot be used via `file://`):

```sh
python -m http.server 8000
```

Open http://localhost:8000.

## Tests

Requires Node.js 18 or newer:

```sh
npm test
```
