# UI Fetch — Style & Spec Exporter

This plugin performs only one task: exports the selected design as **SVG** and **JSON** with all computed styles as **CSS**, specifically tailored for **AI agents** (AI assistants, LLMs, and code generators).

---

### What is Exported

1. **SVG (`{id}__preview.svg`)**:
   - Every layer and element retains its corresponding Figma node `id`.

2. **JSON (`{id}__style.json`)**:
   - A document object tree that mirrors the exact structure and hierarchy of the SVG elements.
   - Each node is mapped by its `id` to all of its computed CSS styles (dimensions, padding, typography, colors, border radii, shadows, flex/grid properties).
   - Contains styles for both the parent container (`styles`) and all nested child elements (`childrenStyles`).

Thanks to matching `id`s across SVG and JSON, you get a 1:1 pairing: accurate vector visuals + full CSS specification for every element.

---

### How It Works

1. **Select design**: Select any card, frame, section, or fragment on the Figma canvas (one or multiple elements).
2. **Review selection**: The plugin automatically displays the preview, names, and IDs of selected items.
3. **Click "Download"**: The plugin bundles the data and downloads a ZIP archive (`layout-*.zip`), containing for each selected element:
   - `{id}__preview.svg`
   - `{id}__style.json`

---

### Use Cases

- **For AI Agents (Claude, ChatGPT, Cursor, Antigravity)**: Pass the SVG and JSON to the model — AI gets the exact structure and all actual CSS styles without hallucinations for pixel-perfect code generation in Vue, React, Svelte, or HTML/CSS.
- **Plugin for Frontend Developers**: The exported data is designed specifically for frontend workflows — vector SVG with element IDs and computed CSS styles in JSON, immediately ready for UI component authoring and layout.
