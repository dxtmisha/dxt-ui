import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/PropertiesScss - SCSS Generation"}),`
`,e.jsx(s.h1,{id:"propertiesscss-class",children:"PropertiesScss Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"PropertiesScss"})," class is responsible for transforming design system tokens and properties into a structured SCSS format. The resulting code is used to integrate design variables into the library's stylesheets, ensuring synchronization between JSON definitions and Sass variables."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automated Code Generation"})," — creates a complete SCSS structure for integration into stylesheets."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mixin Integration"})," — generates calls to special mixins (",e.jsx(s.code,{children:"setDesignsDesigns"}),", ",e.jsx(s.code,{children:"setDesignsRoot"}),", etc.) for automatic configuration."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Media Query Support"})," — transforms device sizes into an SCSS map."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Palette Processing"})," — generates lists of utilized colors and saturation levels."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Smart Formatting"})," — correctly handles value types (colors, dimensions, links) to match SCSS syntax."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["To initialize the SCSS generator, pass a ",e.jsx(s.code,{children:"PropertiesItems"})," instance to the constructor."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"items: PropertiesItems"})," — the manager object for all property elements."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const manager = new PropertiesItems(tokenData)
const generator = new PropertiesScss(manager)
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"get",children:e.jsx(s.code,{children:"get"})}),`
`,e.jsx(s.p,{children:"Returns a complete, formatted SCSS string ready to be written to a file. This string includes imports of core style variables and sequential mixin calls to register designs, root properties, media queries, classes, and the palette."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"string"})," — the full text of the SCSS file."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const scssContent = generator.get();
// Result: "@use \\"@dxtmisha/styles\\" as variables; \\n @include variables.setDesignsDesigns(...)"
`})}),`
`,e.jsx(s.h3,{id:"getproperties",children:e.jsx(s.code,{children:"getProperties"})}),`
`,e.jsx(s.p,{children:"Generates a specialized SCSS map structure for all properties defined in the system. This method focuses on common tokens (variables) that should be available in the global CSS/SCSS scope."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"string"})," — an SCSS snippet with a call to the ",e.jsx(s.code,{children:"setDesignsProperties"})," mixin."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const propertyMap = generator.getProperties();
`})}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-scss-generation-process",children:"The SCSS Generation Process"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"PropertiesScss"})," performs a multi-stage data transformation:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Design Collection"}),": Identifies all active designs and forms a list for the ",e.jsx(s.code,{children:"setDesignsDesigns"})," mixin."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Category Analysis"}),": Distributes properties by category (root, class, theme) to generate the corresponding blocks."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Palette Resolution"}),": Uses ",e.jsx(s.code,{children:"PropertiesPalette"})," to obtain a list of actually used colors and saturation steps."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Value Parsing"}),": The ",e.jsx(s.code,{children:"getValueItem"})," method checks each value against SCSS types (strings are quoted, HEX codes and dimensions with units remain unquoted)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Structure Assembly"}),": Forms nested SCSS maps, observing correct indentation and delimiters to ensure valid Sass code."]}),`
`]}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"full-generation-cycle",children:"Full Generation Cycle"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const items = new PropertiesItems(data)
const scss = new PropertiesScss(items)

// Get the ready code for writing to variables.scss
const fileData = scss.get()
`})})]})}function p(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
