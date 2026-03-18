import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/StylesToAnimate - Animation Generator"}),`
`,e.jsx(n.h1,{id:"stylestoanimate-class",children:"StylesToAnimate Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StylesToAnimate"})," class is responsible for generating CSS ",e.jsx(n.code,{children:"@keyframes"})," animations from design properties. It implements the necessary logic to wrap nested keyframe rules within a named animation block."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyframes Wrapping"})," — Automatically wraps the generated style content within a ",e.jsx(n.code,{children:"@keyframes"})," block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Naming"})," — Uses the design property name to define the animation identifier."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Indentation Management"})," — Correctly handles block indentation and optional leading empty lines."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"StylesToAnimate"})," converter with the required property and a content callable for the keyframe steps."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — the indentation string (e.g., ",e.jsx(n.code,{children:'"  "'})," or ",e.jsx(n.code,{children:'"\\t"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — a callable function that returns an array of strings representing the keyframes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — indicates if this is the first element in the current level (optional, default: ",e.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToAnimate } from '@dxtmisha/scripts'

// Usage in conversion logic
const converter = new StylesToAnimate(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the transformation and adds the required indentation to each line."]}),`
`]})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
