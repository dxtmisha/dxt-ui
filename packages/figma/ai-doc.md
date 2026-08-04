Figma plugin UI (frontend) communication library. Interacts with the backend (`figma-code`) for messaging, frames, styles, and storage requests.

Key elements:
- `FigmaUiMessenger`: UI messaging singleton.
- `fetch...`: Async wrappers for retrieving Figma data (e.g., `fetchFramesSelected`).
- `FigmaPostCode`: Security token for message verification.

Use only in the Figma plugin UI (frontend).


