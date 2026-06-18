FIGMA PLUGIN LOGIC PACKAGE (BACKEND):
This library is intended for use on the main process side of a Figma plugin (Code side). It provides direct access to the Figma API and implements the logic for handling requests from the UI.

1. PURPOSE: Implementing the background logic of the plugin. It is responsible for manipulating Figma objects (frames, text, styles), managing storage (`FigmaStorage`), and sending data back to the UI via `FigmaPluginMessenger`.
2. INTERACTION: Works in conjunction with the `@dxtmisha/figma` package. It receives messages from the UI, performs operations via the Figma API, and sends results back.
3. KEY CLASSES:
   - `FigmaPluginMessenger`: A singleton for managing messages on the Backend side.
   - `FigmaFrame`, `FigmaItem`: Wrappers for convenient handling of Figma nodes.
   - `setup...` functions: Listeners that automatically process standard UI requests (e.g., `setupFrameSelection`).

Use this package only in code that executes in the main process of the Figma plugin (main thread).

