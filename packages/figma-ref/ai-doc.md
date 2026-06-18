REACTIVE WRAPPERS FOR FIGMA (VUE 3):
This package provides Vue composables for convenient and reactive handling of Figma data within the plugin interface.

1. PURPOSE: Transforming asynchronous Figma requests into reactive Vue variables. This allows the interface to update instantly upon selection changes or data updates in Figma.
2. DEPENDENCIES: The library is built upon `@dxtmisha/figma` for data exchange and utilizes Vue 3 reactivity.
3. KEY COMPOSABLES:
   - `useFigmaFrameSelection`: Reactive tracking of selected objects.
   - `useFigmaStorage`, `useFigmaClientStorage`: Working with persistent plugin storage.
   - `useFigmaUiFrames`: A list of available frames to display in the UI.

Use this package when developing Vue interfaces for Figma plugins to ensure seamless state synchronization between Figma and the UI.

