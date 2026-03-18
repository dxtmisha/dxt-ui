import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/StylesRoot - Root Variable Generator"}),`
`,e.jsx(s.h1,{id:"stylesroot-class",children:"StylesRoot Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"StylesRoot"})," class is responsible for generating the global ",e.jsx(s.code,{children:":root"})," CSS block from design tokens. It converts tokens into CSS variables and intelligently resolves complex ",e.jsx(s.code,{children:"calc()"})," expressions to ensure browser compatibility."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Root Block Generation"})," — Creates a standard ",e.jsx(s.code,{children:":root { ... }"})," structure containing all design tokens."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Variable Conversion"})," — Uses ",e.jsx(s.code,{children:"StylesToVar"})," to transform property items into valid CSS variables."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dynamic Calculation Resolution"})," — Recursively resolves ",e.jsx(s.code,{children:"calc()"})," expressions that reference other variables, ensuring that final values are pre-calculated where possible."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SCSS Integration"})," — Automatically includes the necessary SCSS ",e.jsx(s.code,{children:"@use"})," directives for property definitions."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["To initialize the object, call the ",e.jsx(s.code,{children:"StylesRoot(items)"})," constructor."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"items: PropertiesItems"})," — an object for working with the list of design properties."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { StylesRoot, PropertiesItems } from '@dxtmisha/scripts'

// 1. Initialize PropertiesItems
const items = new PropertiesItems(designData)

// 2. Initialize StylesRoot
const generator = new StylesRoot(items)
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"control",children:"Control"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"init(): string[]"})," — The main entry point. Processes the property list, resolves calculations, and returns an array of strings representing the complete ",e.jsx(s.code,{children:":root"})," block with its imports."]}),`
`]})]})}function x(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
