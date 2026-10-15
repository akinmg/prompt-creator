# Photography Prompt Builder

Build a photography prompt using native HTML select menus. No build step or dependencies are required.

## Files

- `index.html` — page structure and prompt output.
- `src/app.js` — renders menus and updates the prompt preview.
- `src/modules/photography/index.js` — selected values, validation, and change events.
- `src/modules/photography/library/options.js` — menu definitions, order, and default values.
- `src/modules/photography/library/types.js` — available labels and values.
- `src/modules/photography/library/prompt.js` — prompt sentence generation.

## Add a category

1. Export its option list from `types.js`.
2. Import the list into `options.js` and add a menu with `id`, `label`, `options`, and a valid `defaultValue`.
3. Update `generatePrompt` in `prompt.js` to include the new category's value.

Menus are rendered automatically from the definitions in `options.js`.

## Run locally

Serve the repository root over HTTP because the project uses ES modules:

```bash
python -m http.server 8000
```

Open http://localhost:8000. Changing a menu updates the prompt immediately.
