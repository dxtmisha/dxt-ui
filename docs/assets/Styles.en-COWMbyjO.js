import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/Styles - Style Orchestrator"}),`
`,e.jsx(s.h1,{id:"styles-class",children:"Styles Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Styles"})," class is the central orchestrator for generating all style-related systemic files within the design system. it manages the initialization of root variables, base classes, SCSS properties, and design-specific style setups."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Systemic Generation"})," — Coordinates the creation of ",e.jsx(s.code,{children:"vars"}),", ",e.jsx(s.code,{children:"classes"}),", ",e.jsx(s.code,{children:"properties"}),", and ",e.jsx(s.code,{children:"list"})," files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Root Variable Initialization"})," — Uses ",e.jsx(s.code,{children:"StylesRoot"})," to generate global CSS variables."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Base Class Management"})," — Uses ",e.jsx(s.code,{children:"StylesClasses"})," to generate standard utility classes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Design-Aware Setup"})," — Automatically creates ",e.jsx(s.code,{children:"main"}),", ",e.jsx(s.code,{children:"basic"}),", and ",e.jsx(s.code,{children:"style"})," files tailored to specific designs."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SCSS Integration"})," — Transforms property data into SCSS-compatible structures using ",e.jsx(s.code,{children:"PropertiesScss"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automatic Cleanup"})," — Filters out redundant data to keep the generated list files clean."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["Initialize the ",e.jsx(s.code,{children:"Styles"})," orchestrator. It internally manages a ",e.jsx(s.code,{children:"Properties"})," instance to retrieve design data."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { Styles } from '@dxtmisha/scripts'

const orchestrator = new Styles()
orchestrator.make()
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"control",children:"Control"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"make(): this"})," — The main entry point. Triggers the full generation cycle for all designs."]}),`
`]}),`
`,e.jsx(s.h3,{id:"internal-initialization",children:"Internal Initialization"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"initRoot(items: PropertiesItems): this"})," — Generates global variables and writes them to the ",e.jsx(s.code,{children:"vars"})," file."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"initClasses(items: PropertiesItems): this"})," — Generates base classes and individual class files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"initProperties(items: PropertiesItems): this"})," — Generates SCSS property structures."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"initList(items: PropertiesItems): this"})," — Generates a cleaned-up property list for references."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"initBasic(design: string): this"})," — Generates the basic connection files and design-specific style anchors."]}),`
`]})]})}function x(i={}){const{wrapper:s}={...t(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{x as default};
