import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/StylesToMedia - Media Query Generator"}),`
`,e.jsx(n.h1,{id:"stylestomedia-class",children:"StylesToMedia Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StylesToMedia"})," class is responsible for generating CSS ",e.jsx(n.code,{children:"@media"})," queries from design properties. It implements the logic to wrap nested style rules within a media query block."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Media Query Wrapping"})," — Automatically wraps the generated style content within a ",e.jsx(n.code,{children:"@media screen and ..."})," rule."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Query Resolution"})," — Uses the design property name to define the media query condition."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Indentation Management"})," — Correctly handles block indentation and optional leading empty lines."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"StylesToMedia"})," converter with the required property and a content callable for the nested rules."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — the indentation string (e.g., ",e.jsx(n.code,{children:'"  "'})," or ",e.jsx(n.code,{children:'"\\t"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — a callable function that returns an array of strings representing the internal style rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — indicates if this is the first element in the current level (optional, default: ",e.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToMedia } from '@dxtmisha/scripts'

// Usage in conversion logic
const converter = new StylesToMedia(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the transformation and adds the required indentation to each line."]}),`
`]})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
