# Photography Prompt Builder

## Structure

- `index.html`: Small static HTML shell.
- `css/style.css`: All styling.
- `js/app.js`: Main application; generates radio fields, tracks state and builds multi-paragraph prompts.
- `js/config/index.js`: Imports categories and defines category ordering.
- `js/config/*.js`: One independent category file per heading, including its values and prompt sentences.

## How to add a heading

1. Copy `js/config/lighting.js` to e.g. `js/config/location.js`.
2. Change the exported variable name to `location`, set a **unique** `id`, choose `title`, `defaultValue`, and edit `options`.
3. Every option has `label`, `value`, and `prompt`. The `prompt` may contain several sentences.
4. Open `js/config/index.js`; add `import { location } from "./location.js";` and add `location` to the `photographyConfig` array in the desired order.
5. Do not change `index.html` or `js/app.js`.

## Run locally

This project uses browser JavaScript ES modules. Start a local server from the project folder (opening the file via `file://` may block ES module loading):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Example new category

```js
export const location = {
  id: "location",
  title: "Location",
  defaultValue: "city street",
  options: [
    {
      label: "City Street",
      value: "city street",
      prompt: "Place the subject on a believable city street. Preserve natural perspective and architectural details."
    },
    {
      label: "Studio",
      value: "studio",
      prompt: "Use a clean studio environment with an uncluttered backdrop."
    }
  ]
};
```

## Notes

- `value` is a machine-readable choice; `prompt` is the text inserted into the generated result.
- Each category currently allows one choice (radio buttons). The app adds selected `prompt` text in the order of `photographyConfig`.
- Copy uses the Clipboard API, which normally works on `localhost` and HTTPS.
