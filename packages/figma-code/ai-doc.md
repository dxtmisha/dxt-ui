Figma plugin main thread (backend) library. Works with `@dxtmisha/figma` to handle UI requests, Figma API operations, node manipulation, and storage.

Key elements:
- `FigmaPluginMessenger`: Backend messaging singleton.
- `FigmaFrame`, `FigmaItem`: Figma node wrappers.
- `FigmaStorage`: Persistent storage management.
- `setup...`: Standard UI request listeners (e.g., `setupFrameSelection`).

Use only in the Figma main process (backend).


