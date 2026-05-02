import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/DesignStructure - Component Data Resolution Engine`}),`
`,(0,c.jsx)(n.h1,{id:`designstructure-class`,children:`DesignStructure Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` class is the foundational data resolver for design system components. It orchestrates the reading, caching, and processing of structured component data, including properties, CSS class hierarchies, and style tokens. It acts as an abstraction layer between raw configuration files and the template transformation engines.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Data Access`}),` — Provides a centralized API to retrieve all metadata associated with a specific component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Caching`}),` — Utilizes `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` to avoid redundant file system operations and speed up multi-component processing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Subclass Mapping`}),` — Resolves complex CSS class hierarchies for recursive component structures.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Style Token Exposure`}),` — Extracts and formats design tokens into a format ready for SCSS generation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Naming Convention Orchestration`}),` — Standardizes component, design, and file naming across the entire building process.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`To initialize a structure resolver, provide the component's identifier. The class will automatically link it to the current project's design configuration.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component?: string`}),` — The identifier for the component (e.g., `,(0,c.jsx)(n.code,{children:`'button'`}),`, `,(0,c.jsx)(n.code,{children:`'list'`}),`). Defaults to `,(0,c.jsx)(n.code,{children:`'component'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-acquisition`,children:`Data Acquisition`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureList`}),` — Retrieves the full list of component properties and metadata, with caching.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getClasses(): DesignStructureClassesList`}),` — Resolves the hierarchy of CSS classes for the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyles(): string[]`}),` — Returns the formatted style tokens derived from the component's structure.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`naming--identity`,children:`Naming & Identity`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesign(): string`}),` — Returns the current design system identifier (e.g., `,(0,c.jsx)(n.code,{children:`'misha'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignFirst(): string`}),` — Returns the design identifier formatted with an uppercase first letter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentName(): string`}),` — Returns the raw component name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentNameFirst(): string`}),` — Returns the component name with an uppercase first letter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFullComponentName(): string`}),` — Combines design and component names (e.g., `,(0,c.jsx)(n.code,{children:`'MishaButton'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFileName(): string`}),` — Returns the standardized filename for the component's implementation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathName(): string`}),` — Returns the unique identifier for cache keys and system paths.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-resolution-pipeline`,children:`The Resolution Pipeline`}),`
`,(0,c.jsxs)(n.p,{children:[`When data is requested (e.g., via `,(0,c.jsx)(n.code,{children:`get()`}),` or `,(0,c.jsx)(n.code,{children:`getClasses()`}),`), the class triggers a modular resolution process:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Validation`}),`: It first checks if the processed data already exists in the `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` under a key generated by `,(0,c.jsx)(n.code,{children:`getPathName()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Modular Delegation`}),`: If data is missing from cache, it delegates the heavy lifting to specialized "Read" classes:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DesignStructureRead`}),`: Handles the extraction of properties and values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DesignStructureClasses`}),`: Manages the construction of class trees.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DesignStructureStyles`}),`: Processes tokens into style strings.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Persistance`}),`: The resolved data is stored back into the cache to enhance performance for subsequent calls during the same build cycle.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`integration-with-template-engines`,children:`Integration with Template Engines`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignStructure`}),` provides the "Source of Truth" for classes like `,(0,c.jsx)(n.code,{children:`DesignReplace`}),`. By standardizing how names and paths are resolved, it ensures that every generated file (Vue, TS, SCSS) uses consistent identifiers and maintains correct relative path references across the workspace.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};