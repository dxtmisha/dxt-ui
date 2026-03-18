import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignStructureStyles - Component Style Compiler"}),`
`,e.jsx(t.h1,{id:"designstructurestyles-class",children:"DesignStructureStyles Class"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DesignStructureStyles"})," class is responsible for converting a component's structural design tokens into a standardized array of CSS property strings. By leveraging the ",e.jsx(t.code,{children:"StylesProperties"})," engine, it ensures that every component inherits its base visual identity directly from the design system's central theme configuration."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Token-to-CSS Transformation"})," — Automatically maps abstract design tokens to concrete CSS properties."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"BEM Selector Scoping"})," — Wraps generated styles in a component-level selector (",e.jsx(t.code,{children:"& { ... }"}),") to ensure style isolation."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Hierarchical Inheritance"})," — Utilizes parent structural metadata to resolve nested property variables accurately."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Standardized Formatting"})," — Applies consistent indentation and line breaks, ensuring generated style files remain readable."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(t.p,{children:"To initialize the style compiler, provide the identifier of the component whose styles needs to be generated. The class will automatically load the relevant structural metadata."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"component: string"})," — The identifier of the component (e.g., ",e.jsx(t.code,{children:"'button'"}),")."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { DesignStructureStyles } from '@dxtmisha/scripts'

const compiler = new DesignStructureStyles('button')
const stylesArray = compiler.get()
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"control",children:"Control"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"make(): string[]"})," — Triggers the transformation process and returns the array of CSS property strings."]}),`
`]}),`
`,e.jsx(t.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(t.h3,{id:"the-style-compilation-flow",children:"The Style Compilation Flow"}),`
`,e.jsx(t.p,{children:"When the compiler is initialized, it follows a structured pipeline:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Metadata Loading"}),": It uses the parent ",e.jsx(t.code,{children:"DesignStructureItemAbstract"})," logic to fetch the specific ",e.jsx(t.code,{children:"PropertyItemsItem"})," associated with the component."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Contextual Selection"}),": The engine wraps all output properties within a self-referencing CSS selector (",e.jsx(t.code,{children:"& { ... }"}),") to maintain compatibility with CSS-in-JS and preprocessors."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Property Resolution"}),": It instantiates ",e.jsx(t.code,{children:"StylesProperties"}),", passing the collected metadata. This sub-engine then traverses every token, resolving theme variables, units, and fallbacks."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Output Buffering"}),": The final list of properties is joined into a flat array of strings, ready for injection into a CSS file or a style tag."]}),`
`]}),`
`,e.jsx(t.h3,{id:"integration-with-theme-engine",children:"Integration with Theme Engine"}),`
`,e.jsx(t.p,{children:"This class acts as the bridge between raw design data and the final visual representation. By centralizing the style compilation logic, the system ensures that changes to the theme's core architecture (such as variable naming conventions or unit logic) are automatically propagated to all components during the next build cycle."})]})}function p(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
