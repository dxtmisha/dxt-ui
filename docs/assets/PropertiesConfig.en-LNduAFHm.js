import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesConfig - Global Configuration Orchestrator`}),`
`,(0,c.jsx)(t.h1,{id:`propertiesconfig-class`,children:`PropertiesConfig Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` class is a centralized static utility responsible for managing the design system's operational parameters. It handles the discovery and recursive merging of `,(0,c.jsx)(t.code,{children:`design-ui.json`}),` configuration files, providing a consistent API for accessing naming conventions, AI integration keys, and documentation routing rules across the entire library.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Extension`}),` — Supports an `,(0,c.jsx)(t.code,{children:`extends`}),` mechanism, allowing configurations to inherit and override settings from parent directories.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Auto-Discovery`}),` — Searches up the directory tree to find the nearest `,(0,c.jsx)(t.code,{children:`design-ui.json`}),` entry point.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Centralized Settings`}),` — Provides unified access to project identifiers, design names, and path separators.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Integration`}),` — Manages credentials and model parameters for AI-driven documentation and code generation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Documentation Routing`}),` — Configures target directories and Storybook paths for the automated wiki system.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`As a static class, `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` initializes itself automatically upon the first import. You don't need to call a constructor.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Access global settings
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`general-configuration`,children:`General Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getProjectName(): string`}),` — retrieves the root project identifier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignName(): string`}),` — returns the primary design system identifier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignAlternativeName(): string[]`}),` — returns alternative aliases for the design system.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPackagePrefix(): string | undefined`}),` — returns the workspace npm package prefix.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparator(): string`}),` — returns token path separator character.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparatorBasicName(): string`}),` — returns the basic token separator name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparatorLimit(): number`}),` — returns maximum depth limit for token separation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getWikiLanguage(): string`}),` — returns the target documentation language code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDistDir(): string`}),` — returns the build output directory path (dist).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFigmaToken(): string`}),` — returns the Figma API access token.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`type-compilation--ai-configuration`,children:`Type Compilation & AI Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesTemporaryDirectory(): string`}),` — returns the temporary directory path for compiling type declarations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesPaths(): string[] | undefined`}),` — returns the list of source paths for type scanning.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesMatch(): string | string[] | undefined`}),` — returns match patterns for type scanning.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesExclude(): string | string[] | undefined`}),` — returns exclusion patterns for type scanning.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesWithoutVue(): boolean | undefined`}),` — returns the flag disabling Vue compilation for types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTypesWithoutVue(): boolean`}),` — checks if Vue file compilation is disabled for types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiResourcesDir(): string`}),` — returns the AI resources and prompts directory path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiType(): AiType`}),` — returns the configured AI provider.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiModel(): string`}),` — returns the specific AI model name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiKey(): string`}),` — returns the API key for AI services.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiConfig(): Record<string, any>`}),` — returns the AI client configuration object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiTypesConcurrency(): number`}),` — returns the concurrency limit for processing type definition files via AI.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ai--documentation`,children:`AI & Documentation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiType(): AiType`}),` — Returns the configured AI provider (e.g., 'gemini').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiModel(): string`}),` — Returns the specific AI model name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiTypesConcurrency(): number`}),` — Returns the maximum number of type definition files processed by AI concurrently.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-configuration-resolution-flow`,children:`The Configuration Resolution Flow`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` uses a robust strategy to resolve system settings:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`File Discovery`}),`: Upon loading, it attempts to find `,(0,c.jsx)(t.code,{children:`design-ui.json`}),` by traversing upwards from the current working directory (up to 32 levels).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Merging`}),`: If the discovered file contains an `,(0,c.jsx)(t.code,{children:`extends`}),` property:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`It recursively loads the referenced parent configuration.`}),`
`,(0,c.jsx)(t.li,{children:`It intelligently merges settings, where local properties override inherited ones.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static Availability`}),`: The final merged configuration is stored in a private static field, making all settings immediately available through public getters.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};