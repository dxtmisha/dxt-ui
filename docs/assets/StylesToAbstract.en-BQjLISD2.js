import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/StylesToAbstract - Base Class for Style Conversion"}),`
`,e.jsx(n.h1,{id:"stylestoabstract-class",children:"StylesToAbstract Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StylesToAbstract"})," class serves as the foundation for all style conversion mechanisms. It provides a standardized interface and a set of helper methods for translating design properties into CSS-compatible structures."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standardized Processing Pipeline"})," — Ensures all sub-classes follow the same ",e.jsx(n.code,{children:"make"})," → ",e.jsx(n.code,{children:"treatment"})," → ",e.jsx(n.code,{children:"addSpace"})," workflow."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Property Context Management"})," — Automatically manages the current design property, indentation levels, and tree position."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Content Delegation"})," — Supports recursive property processing via callables."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path and Name Resolution"})," — Built-in helpers to extract and normalize property names and CSS values."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["As an abstract class, ",e.jsx(n.code,{children:"StylesToAbstract"})," cannot be instantiated directly. It serves as a base for specific style converters."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — the indentation string (e.g., ",e.jsx(n.code,{children:'"  "'})," or ",e.jsx(n.code,{children:'"\\t"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — a callable function used to process sub-properties (optional)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — indicates if this is the first element in the current list/tree level (optional, default: ",e.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToAbstract } from '@dxtmisha/scripts'

// Example: Creating a concrete implementation
class StylesToCustom extends StylesToAbstract {
  protected treatment(): string[] {
    // Defines the specific conversion logic
    return [
      \`\${this.getName()} {\`,
      \`  content: \${this.getValue()};\`,
      '}'
    ]
  }
}
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the transformation and adds the required indentation to each line."]}),`
`]}),`
`,e.jsx(n.h3,{id:"abstract",children:"Abstract"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"treatment(): string[]"})," — Defines the specific conversion logic for translating property data into a style structure. Subclasses must implement this method."]}),`
`]})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
