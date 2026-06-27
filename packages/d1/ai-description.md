Core Purpose:
This library provides a comprehensive suite of Vue 3 components (prefixed with D1) built upon the @dxtmisha/constructor design system. It handles UI rendering, property definition types, and build-time integration via a dedicated Vite plugin.

Key Expositions:
- UI Components: A wide array of functional components including D1Button, D1Input, D1Modal, D1Checkbox, D1Tabs, D1Grid, D1Alert, D1Icon, D1List, etc.
- Component Type Definitions: Each component exposes its unique Props interface (e.g., AccordionProps, ActionSheetProps), constructed by merging base interface definitions from the core constructor with specific local tokens.
- Vite Plugin (uiD1VitePlugin): An integration utility to configure build-time processes for the component library.
- Media Utilities: d1MakeIcons for managing icon assets.
- Registration Registry: componentsList and regex patterns (componentsReg, styleVarsReg) for discovery and processing of library assets.

Triggers for Studying ai-types.md:
- Mandatory analysis is required when:
  - Implementing, extending, or wrapping any D1-prefixed component to ensure strict adherence to internal props composition (merging Base + Token types).
  - Configuring the build pipeline or using the uiD1VitePlugin, as custom options and plugin behavior are defined therein.
  - Encountering type-safety errors related to component slot structures (SlotsType) or event emitters (ShortEmitsToObject).
  - Attempting to customize theme/style variables via the registered regex patterns.

Integration Context:
- Stack: Built on Vue 3, using Vue's DefineSetupFnComponent for type-safe setup functions.
- Core Foundation: Relies on the @dxtmisha/constructor architecture for baseline functional logic.
- Build Tooling: Uses Vite for module resolution and plugin-based system initialization.
- Type System: Leverages TypeScript with specific generics (SlotsType, ShortEmitsToObject) for rigid component-API contract enforcement.