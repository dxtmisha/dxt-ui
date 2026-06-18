FIGMA UI COMMUNICATION PACKAGE:
This library is designed to simplify the interaction between the UI part of a Figma plugin (Frontend) and its background process (Backend). It provides abstractions for messaging and retrieving data from Figma.

1. PURPOSE: The library is used exclusively in the Figma plugin's UI code. It implements `FigmaUiMessenger` for sending (`post`) and receiving messages from the plugin, along with functions for requesting frames, styles, and storage data.
2. SECURITY: All messaging is tied to a secure code (`FigmaPostCode`), which must match on both sides (UI and Code).
3. KEY TOOLS:
   - `FigmaUiMessenger`: A singleton for managing messages on the UI side.
   - `fetch...` functions: Wrappers over messages for asynchronously retrieving data from Figma (e.g., `fetchFramesSelected`).

Use this package when developing the visual part of a plugin to communicate with the Figma API via the `figma-code` layer.

