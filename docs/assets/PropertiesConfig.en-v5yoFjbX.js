import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/PropertiesConfig - Global Configuration Orchestrator"}),`
`,e.jsx(n.h1,{id:"propertiesconfig-class",children:"PropertiesConfig Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PropertiesConfig"})," class is a centralized static utility responsible for managing the design system's operational parameters. It handles the discovery and recursive merging of ",e.jsx(n.code,{children:"design-ui.json"})," configuration files, providing a consistent API for accessing naming conventions, AI integration keys, and documentation routing rules across the entire library."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Recursive Extension"})," — Supports an ",e.jsx(n.code,{children:"extends"})," mechanism, allowing configurations to inherit and override settings from parent directories."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-Discovery"})," — Searches up the directory tree to find the nearest ",e.jsx(n.code,{children:"design-ui.json"})," entry point."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Centralized Settings"})," — Provides unified access to project identifiers, design names, and path separators."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI Integration"})," — Manages credentials and model parameters for AI-driven documentation and code generation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation Routing"})," — Configures target directories and Storybook paths for the automated wiki system."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["As a static class, ",e.jsx(n.code,{children:"PropertiesConfig"})," initializes itself automatically upon the first import. You don't need to call a constructor."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Access global settings
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"general-configuration",children:"General Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getProjectName(): string"})," — Retrieves the project's root identifier."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDesignName(): string"})," — Returns the primary design system identifier."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDesignAlternativeName(): string[]"})," — Returns alternative aliases for the design."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSeparator(): string"})," — Returns the path separator used in token definitions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getWikiLanguage(): string"})," — Returns the target language code for documentation."]}),`
`]}),`
`,e.jsx(n.h3,{id:"ai--documentation",children:"AI & Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAiType(): AiType"})," — Returns the configured AI provider (e.g., 'gemini')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAiModel(): string"})," — Returns the specific AI model name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAiDocDirectory(): string[]"})," — Returns directories targeted for doc generation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAiDocStorybookPath(): string"})," — Returns the export destination for Storybook MDX files."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-configuration-resolution-flow",children:"The Configuration Resolution Flow"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesConfig"})," uses a robust strategy to resolve system settings:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Discovery"}),": Upon loading, it attempts to find ",e.jsx(n.code,{children:"design-ui.json"})," by traversing upwards from the current working directory (up to 32 levels)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Recursive Merging"}),": If the discovered file contains an ",e.jsx(n.code,{children:"extends"})," property:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It recursively loads the referenced parent configuration."}),`
`,e.jsx(n.li,{children:"It intelligently merges settings, where local properties override inherited ones."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static Availability"}),": The final merged configuration is stored in a private static field, making all settings immediately available through public getters."]}),`
`]})]})}function g(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};
