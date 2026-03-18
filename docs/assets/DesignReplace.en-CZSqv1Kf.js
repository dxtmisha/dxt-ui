import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/DesignReplace - Template Transformation Engine"}),`
`,e.jsx(n.h1,{id:"designreplace-class",children:"DesignReplace Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignReplace"})," class is the core engine for transforming raw file templates into project-ready source code. It uses a specialized marking system to identify sections of text that should be dynamically replaced with component names, property definitions, types, or styling logic derived from the component's ",e.jsx(n.code,{children:"DesignStructure"}),"."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Label Resolution"})," — Identifies and replaces text blocks bounded by specific comments (e.g., ",e.jsx(n.code,{children:"// :type"})," or ",e.jsx(n.code,{children:"<!-- :props -->"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context-Aware Naming"})," — Automatically transforms generic placeholders like ",e.jsx(n.code,{children:"[project]"}),", ",e.jsx(n.code,{children:"[design]"}),", and ",e.jsx(n.code,{children:"[component]"})," based on configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Injection"})," — Generates complex TypeScript type unions and interfaces directly from property metadata."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default Value Mapping"})," — Resolves and injects default values for properties into object literals or constructor arguments."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Conditional Class Generation"})," — Produces optimized Vue/TS class binding objects and CSS selector mappings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Normalization"})," — Automatically resolves relative import paths based on the target file's location in the project tree."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"To initialize a replacement engine, pass the component's data structure, the target mark identifier, and the template string."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"structure: DesignStructure"})," — The source of truth for component metadata and structural rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mark: string"})," — The primary label used in templates to identify components (e.g., ",e.jsx(n.code,{children:"'button'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sample: string"})," — The text content of the template to be modified."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignReplace } from '@dxtmisha/scripts'

const engine = new DesignReplace(structure, 'button', templateContent)
engine.replaceName().replaceType()
const output = engine.get()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): string"})," — Returns the final version of the template after all transformations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getNameFile(name: string): string"})," — Processes a filename or string to replace project-level placeholders."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceName(): this"})," — Replaces the primary component name marks throughout the template."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacePath(): this"})," — Fixes relative paths (",e.jsx(n.code,{children:"../../../"}),") to point to the correct project root location."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceMark(name: string, data: string[], end = ''): this"})," — Performs block replacement for a specific label by injecting an array of strings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceOnce(name?: string, removeReplacement?: boolean | Function): this"})," — Handles single-use replacement markers (",e.jsx(n.code,{children:".once"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"property--type-automation",children:"Property & Type Automation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceType(constructor?: string): this"})," — Generates and injects TypeScript types for all component properties."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceDefault(): this"})," — Injects default values for properties into the template."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceProps(): this"})," — Generates Vue-style property definition objects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacePropsValues(): this"})," — Creates arrays of allowed values for properties (enums/unions)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"styling--classes",children:"Styling & Classes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceClasses(template?: Function, end = ''): this"})," — Generates a list of available CSS classes based on the structure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceClassesValues(): this"})," — Produces dynamic class binding logic for logic implementation files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceStylesValues(): this"})," — Maps component properties to CSS custom variables (CSS Variables)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceConstructorClasses(): this"})," — Specialized class generator for component constructors."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-marking-system",children:"The Marking System"}),`
`,e.jsx(n.p,{children:"The engine scans for specific comment patterns to identify where to inject code. It supports multiple comment styles:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inline Logic"}),": ",e.jsx(n.code,{children:"// :label data"})," or ",e.jsx(n.code,{children:"/* :label */ content /* :label.end */"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Template Comments"}),": ",e.jsx(n.code,{children:"<!-- :label --> content <!-- :label.end -->"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Property Specificity"}),": ",e.jsx(n.code,{children:":label.propertyName.none"})," (used to exclude specific properties from a block)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"transformation-flow",children:"Transformation Flow"}),`
`,e.jsxs(n.p,{children:["When a replacement method like ",e.jsx(n.code,{children:"replaceType()"})," is called, the class:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scans"}),": Locates the start and end markers for the ",e.jsx(n.code,{children:"type"})," label."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consults Structure"}),": Iterates over the properties in the provided ",e.jsx(n.code,{children:"DesignStructure"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resolves Logic"}),": Determines the correct TypeScript syntax for each property based on its value type (boolean, string, or union)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Injects"}),": Replaces the content between the markers with the new generated code, maintaining original indentation."]}),`
`]})]})}function p(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
