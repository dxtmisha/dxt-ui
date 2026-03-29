import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesConfig - Global Configuration Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesconfig-class`,children:`PropertiesConfig Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` class is a centralized static utility responsible for managing the design system's operational parameters. It handles the discovery and recursive merging of `,(0,c.jsx)(n.code,{children:`design-ui.json`}),` configuration files, providing a consistent API for accessing naming conventions, AI integration keys, and documentation routing rules across the entire library.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Extension`}),` — Supports an `,(0,c.jsx)(n.code,{children:`extends`}),` mechanism, allowing configurations to inherit and override settings from parent directories.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Auto-Discovery`}),` — Searches up the directory tree to find the nearest `,(0,c.jsx)(n.code,{children:`design-ui.json`}),` entry point.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Settings`}),` — Provides unified access to project identifiers, design names, and path separators.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AI Integration`}),` — Manages credentials and model parameters for AI-driven documentation and code generation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Documentation Routing`}),` — Configures target directories and Storybook paths for the automated wiki system.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As a static class, `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` initializes itself automatically upon the first import. You don't need to call a constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Access global settings
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`general-configuration`,children:`General Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName(): string`}),` — Retrieves the project's root identifier.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignName(): string`}),` — Returns the primary design system identifier.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignAlternativeName(): string[]`}),` — Returns alternative aliases for the design.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSeparator(): string`}),` — Returns the path separator used in token definitions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getWikiLanguage(): string`}),` — Returns the target language code for documentation.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`ai--documentation`,children:`AI & Documentation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiType(): AiType`}),` — Returns the configured AI provider (e.g., 'gemini').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiModel(): string`}),` — Returns the specific AI model name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiDocDirectory(): string[]`}),` — Returns directories targeted for doc generation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiDocStorybookPath(): string`}),` — Returns the export destination for Storybook MDX files.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-configuration-resolution-flow`,children:`The Configuration Resolution Flow`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` uses a robust strategy to resolve system settings:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`File Discovery`}),`: Upon loading, it attempts to find `,(0,c.jsx)(n.code,{children:`design-ui.json`}),` by traversing upwards from the current working directory (up to 32 levels).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Merging`}),`: If the discovered file contains an `,(0,c.jsx)(n.code,{children:`extends`}),` property:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`It recursively loads the referenced parent configuration.`}),`
`,(0,c.jsx)(n.li,{children:`It intelligently merges settings, where local properties override inherited ones.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Availability`}),`: The final merged configuration is stored in a private static field, making all settings immediately available through public getters.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};