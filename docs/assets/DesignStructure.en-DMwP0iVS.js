import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignStructure - Component Data Resolution Engine"}),`
`,e.jsx(n.h1,{id:"designstructure-class",children:"DesignStructure Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignStructure"})," class is the foundational data resolver for design system components. It orchestrates the reading, caching, and processing of structured component data, including properties, CSS class hierarchies, and style tokens. It acts as an abstraction layer between raw configuration files and the template transformation engines."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Data Access"})," — Provides a centralized API to retrieve all metadata associated with a specific component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Intelligent Caching"})," — Utilizes ",e.jsx(n.code,{children:"PropertiesCache"})," to avoid redundant file system operations and speed up multi-component processing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Subclass Mapping"})," — Resolves complex CSS class hierarchies for recursive component structures."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Style Token Exposure"})," — Extracts and formats design tokens into a format ready for SCSS generation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming Convention Orchestration"})," — Standardizes component, design, and file naming across the entire building process."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"To initialize a structure resolver, provide the component's identifier. The class will automatically link it to the current project's design configuration."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"component?: string"})," — The identifier for the component (e.g., ",e.jsx(n.code,{children:"'button'"}),", ",e.jsx(n.code,{children:"'list'"}),"). Defaults to ",e.jsx(n.code,{children:"'component'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"data-acquisition",children:"Data Acquisition"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): DesignStructureList"})," — Retrieves the full list of component properties and metadata, with caching."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getClasses(): DesignStructureClassesList"})," — Resolves the hierarchy of CSS classes for the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getStyles(): string[]"})," — Returns the formatted style tokens derived from the component's structure."]}),`
`]}),`
`,e.jsx(n.h3,{id:"naming--identity",children:"Naming & Identity"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDesign(): string"})," — Returns the current design system identifier (e.g., ",e.jsx(n.code,{children:"'misha'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDesignFirst(): string"})," — Returns the design identifier formatted with an uppercase first letter."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getComponentName(): string"})," — Returns the raw component name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getComponentNameFirst(): string"})," — Returns the component name with an uppercase first letter."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFullComponentName(): string"})," — Combines design and component names (e.g., ",e.jsx(n.code,{children:"'MishaButton'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFileName(): string"})," — Returns the standardized filename for the component's implementation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getPathName(): string"})," — Returns the unique identifier for cache keys and system paths."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-resolution-pipeline",children:"The Resolution Pipeline"}),`
`,e.jsxs(n.p,{children:["When data is requested (e.g., via ",e.jsx(n.code,{children:"get()"})," or ",e.jsx(n.code,{children:"getClasses()"}),"), the class triggers a modular resolution process:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cache Validation"}),": It first checks if the processed data already exists in the ",e.jsx(n.code,{children:"PropertiesCache"})," under a key generated by ",e.jsx(n.code,{children:"getPathName()"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modular Delegation"}),': If data is missing from cache, it delegates the heavy lifting to specialized "Read" classes:',`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DesignStructureRead"}),": Handles the extraction of properties and values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DesignStructureClasses"}),": Manages the construction of class trees."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DesignStructureStyles"}),": Processes tokens into style strings."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistance"}),": The resolved data is stored back into the cache to enhance performance for subsequent calls during the same build cycle."]}),`
`]}),`
`,e.jsx(n.h3,{id:"integration-with-template-engines",children:"Integration with Template Engines"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DesignStructure"}),' provides the "Source of Truth" for classes like ',e.jsx(n.code,{children:"DesignReplace"}),". By standardizing how names and paths are resolved, it ensures that every generated file (Vue, TS, SCSS) uses consistent identifiers and maintains correct relative path references across the workspace."]})]})}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default};
