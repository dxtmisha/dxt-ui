# `design.config.json` Configuration Guide

Configuration specification for DXT UI packages and monorepo root.

---

## 1. Overview & Inheritance Mechanism

`design.config.json` configures design system parameters, type scanning, AI generation, and wiki generation.

- **Inheritance via `extends`**: Packages extend parent configs using relative paths (`"extends": "../../design.config.json"`).
- **Merging Strategy**: Recursive shallow merge. Properties in child configs override inherited parent values.
- **Search Order**: Tools look for `design.config.json` in the current working directory, then scan up the directory tree up to 32 levels.

---

## 2. Property Reference

- `extends` (`string`): Relative path to parent configuration file to inherit from (e.g. `"../../design.config.json"`).
- `project` (`string`, default: `'ui'`): Project / namespace identifier (e.g. `"Ui"`, `"Basic"`), used in component prefixes and story paths.
- `name` (`string`, default: `'ui'`): Design system package name (e.g. `"d1"`, `"functional-basic"`).
- `alternativeName` (`string[]`): Array of alternative aliases or abbreviations for the design system.
- `typesPaths` (`string[]`, default: `['src']`): Whitelist of directory paths to scan for TypeScript declarations during `dxt-types`.
- `typesMatch` (`string | string[]`): Regex or substring patterns to include in declaration scanning.
- `typesExclude` (`string | string[]`): Regex or substring patterns to exclude from declaration scanning (e.g. `["\\.wiki\\.d\\.ts$", "wiki/", "library/"]`).
- `typesWithoutVue` (`boolean`, default: `false`): When `true`, skips Vue SFC scanning and forces standard `tsc` compilation instead of `vue-tsc`.
- `typesDir` (`string`, default: `'ai-types-temp'`): Directory path for temporary TypeScript declarations compilation.
- `distDir` (`string`, default: `'dist'`): Output directory path for compiled JavaScript files.
- `aiResourcesDir` (`string`, default: `'ai-resources'`): Directory path containing AI resource and prompt files.
- `promptScanDepth` (`number`, default: `6`): Maximum directory scan depth for collecting AI prompt packages.
- `promptExclude` (`string | string[]`): List of library names to exclude from the `ai-prompt.md` file (e.g. `["@dxtmisha/styles"]`).
- `separator` (`string`, default: `'/'`): Token path delimiter used when splitting design tokens into sub-branches.
- `separatorBasicName` (`string`): Base token name stripped during branch segmentation.
- `separatorLimit` (`number`): Maximum recursion depth for token key splitting.
- `wikiLanguage` (`string`, default: `'en'`): Target localization language code for wiki and Storybook docs (e.g. `'ru'`, `'en'`).
- `packagePrefix` (`string`): Monorepo scope prefix for package imports (e.g. `'@dxtmisha'`).
- `aiType` (`AiType`): AI backend provider (`'claude'`, `'claude-cli'`, `'claude-agent'`, `'gemini'`, `'gemini-cli'`, `'openai'`, `'zai'`).
- `aiModel` (`string`): Specific model identifier (e.g. `'gemini-3.7-flash'`, `'gpt-4o'`).
- `aiKey` (`string`): API key or token for AI provider.
- `aiConfig` (`Record<string, any>`, default: `{}`): Provider-specific options (temperature, tokens, headers).
- `aiTypesConcurrency` (`number`, default: `8`): Maximum number of type definition files processed by AI concurrently.
- `figmaToken` (`string`): Personal access token for Figma REST API integration.

---

## 3. Full Configuration Example

Complete `design.config.json` incorporating all available configuration properties:

```json
{
  "extends": "../../design.config.json",
  "project": "Ui",
  "name": "d1",
  "alternativeName": [
    "dd"
  ],
  "typesPaths": [
    "src/components"
  ],
  "typesMatch": [
    "Button",
    "Input"
  ],
  "typesExclude": [
    "\\.wiki\\.(d\\.)?ts$",
    "wiki\\.(d\\.)?ts$",
    "wikiData\\.(d\\.)?ts$",
    "wiki/",
    "library/"
  ],
  "typesWithoutVue": true,
  "typesDir": "ai-types-temp",
  "distDir": "dist",
  "aiResourcesDir": "ai-resources",
  "promptScanDepth": 6,
  "promptExclude": [
    "@dxtmisha/styles"
  ],
  "separator": "/",
  "separatorBasicName": "basic",
  "separatorLimit": 3,
  "wikiLanguage": "ru",
  "packagePrefix": "@dxtmisha",
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  },
  "aiTypesConcurrency": 8,
  "figmaToken": "figd_..."
}
```

---

## 4. Operational Guidelines for AI Assistants

1. **Always extend root**: Child package configs must define `"extends": "../../design.config.json"` unless creating a standalone root.
2. **Pure TS packages**: Always set `"typesWithoutVue": true` in non-Vue packages to prevent unnecessary `vue-tsc` invocations.
3. **Filtering declarations**: Use `typesExclude` with regex patterns (`"\\.wiki\\.d\\.ts$"`, `"wiki/"`) to keep `ai-types.md` clean of internal build artifacts.
4. **Accessing in code**: In scripts, read configuration through the static accessor `PropertiesConfig`:
   ```typescript
   import { PropertiesConfig } from '../Properties/PropertiesConfig'
   const isExcluded = PropertiesConfig.getTypesExclude()
   const skipVue = PropertiesConfig.isTypesWithoutVue()
   const promptExcluded = PropertiesConfig.getPromptExclude()
   ```
