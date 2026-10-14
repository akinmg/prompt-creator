# Photography Prompt Builder

Compact card UI with category comboboxes (native HTML `<select>`). No Tailwind dependency needed.

## Files

- `index.html` — compact page structure with Photography card and prompt preview.
- `css/style.css` — responsive card and dropdown styling.
- `js/app.js` — stable core: creates selects automatically and generates prompts.
- `js/config/index.js` — import and order categories here.
- `js/config/*.js` — independent values and prompt sentences for each category.

## Add a new category (no app.js change)

1. Add `js/config/outfit.js`:

```js
export const outfit = {
  id: "outfit",
  title: "Outfit",
  defaultValue: "casual",
  options: [
    { label: "Casual", value: "casual", prompt: "Dress the subject in an authentic casual outfit." },
    { label: "Elegant", value: "elegant", prompt: "Style the subject with elegant clothing and natural fabric folds." }
  ]
};
```

2. In `js/config/index.js`, add `import { outfit } from "./outfit.js";` and add `outfit` to `photographyConfig` at your desired position.
3. Reload the page. The combobox appears automatically, and the chosen prompt text is added as a separate paragraph.

## Run locally

Since the project uses ES modules, serve its folder over HTTP:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Clipboard copying works on localhost or HTTPS.
