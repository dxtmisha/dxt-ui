import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignStructure - Component Data Resolution Engine`}),`
`,(0,c.jsx)(t.h1,{id:`designstructure-class`,children:`DesignStructure Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignStructure`}),` class is the foundational data resolver for design system components. It orchestrates the reading, caching, and processing of structured component data, including properties, CSS class hierarchies, and style tokens. It acts as an abstraction layer between raw configuration files and the template transformation engines.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Data Access`}),` — Provides a centralized API to retrieve all metadata associated with a specific component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Caching`}),` — Utilizes `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` to avoid redundant file system operations and speed up multi-component processing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Subclass Mapping`}),` — Resolves complex CSS class hierarchies for recursive component structures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Style Token Exposure`}),` — Extracts and formats design tokens into a format ready for SCSS generation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Naming Convention Orchestration`}),` — Standardizes component, design, and file naming across the entire building process.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`To initialize a structure resolver, provide the component's identifier. The class will automatically link it to the current project's design configuration.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component?: string`}),` — The identifier for the component (e.g., `,(0,c.jsx)(t.code,{children:`'button'`}),`, `,(0,c.jsx)(t.code,{children:`'list'`}),`). Defaults to `,(0,c.jsx)(t.code,{children:`'component'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`data-acquisition`,children:`Data Acquisition`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): DesignStructureList`}),` — Retrieves the full list of component properties and metadata, with caching.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClasses(): DesignStructureClassesList`}),` — Resolves the hierarchy of CSS classes for the component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStyles(): string[]`}),` — Returns the formatted style tokens derived from the component's structure.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`naming--identity`,children:`Naming & Identity`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesign(): string`}),` — Returns the current design system identifier (e.g., `,(0,c.jsx)(t.code,{children:`'misha'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignFirst(): string`}),` — Returns the design identifier formatted with an uppercase first letter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentName(): string`}),` — Returns the raw component name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentNameFirst(): string`}),` — Returns the component name with an uppercase first letter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFullComponentName(): string`}),` — Combines design and component names (e.g., `,(0,c.jsx)(t.code,{children:`'MishaButton'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFileName(): string`}),` — Returns the standardized filename for the component's implementation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathName(): string`}),` — Returns the unique identifier for cache keys and system paths.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-resolution-pipeline`,children:`The Resolution Pipeline`}),`
`,(0,c.jsxs)(t.p,{children:[`When data is requested (e.g., via `,(0,c.jsx)(t.code,{children:`get()`}),` or `,(0,c.jsx)(t.code,{children:`getClasses()`}),`), the class triggers a modular resolution process:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Validation`}),`: It first checks if the processed data already exists in the `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` under a key generated by `,(0,c.jsx)(t.code,{children:`getPathName()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Modular Delegation`}),`: If data is missing from cache, it delegates the heavy lifting to specialized "Read" classes:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureRead`}),`: Handles the extraction of properties and values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureClasses`}),`: Manages the construction of class trees.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DesignStructureStyles`}),`: Processes tokens into style strings.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Persistance`}),`: The resolved data is stored back into the cache to enhance performance for subsequent calls during the same build cycle.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`integration-with-template-engines`,children:`Integration with Template Engines`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignStructure`}),` provides the "Source of Truth" for classes like `,(0,c.jsx)(t.code,{children:`DesignReplace`}),`. By standardizing how names and paths are resolved, it ensures that every generated file (Vue, TS, SCSS) uses consistent identifiers and maintains correct relative path references across the workspace.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};