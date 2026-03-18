import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/StylesToClass - CSS Class Generator"}),`
`,e.jsx(n.h1,{id:"stylestoclass-class",children:"StylesToClass Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StylesToClass"})," class is used to generate standard CSS rules (selectors and their content) from design properties. It ensures that blocks are only generated if they contain nested rules."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selective Generation"})," — Only produces output if the ",e.jsx(n.code,{children:"content()"})," callable returns a non-empty array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selector Resolution"})," — Uses the design property name as the CSS selector."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Block Wrapping"})," — Correctly wraps properties within standard CSS braces ",e.jsx(n.code,{children:"{}"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"StylesToClass"})," converter with the required property and a content callable for the nested style rules."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — the indentation string (e.g., ",e.jsx(n.code,{children:'"  "'})," or ",e.jsx(n.code,{children:'"\\t"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — a callable function that returns an array of strings representing the internal styles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — indicates if this is the first element in the current level (optional, default: ",e.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToClass } from '@dxtmisha/scripts'

// Usage in conversion logic
const converter = new StylesToClass(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the transformation and adds the required indentation to each line."]}),`
`]})]})}function p(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
