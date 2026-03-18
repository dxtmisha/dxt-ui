import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/DesignFlags - Flag Sprite Generator"}),`
`,e.jsx(n.h1,{id:"designflags-class",children:"DesignFlags Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DesignFlags"})," class provides an automated solution for generating optimized image sprites from a collection of SVG flag icons. It handles the canvas-based rendering, grid layout calculation, and the generation of CSS mapping files for efficient icon display using background positioning."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Sprite Assembly"})," — Combines multiple individual SVG files into a single optimized ",e.jsx(n.code,{children:".webp"})," sprite."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic CSS Generation"})," — Automatically produces utility classes with precise ",e.jsx(n.code,{children:"background-position"})," values for every flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configurable Grid Layout"})," — Allows customization of flag dimensions and the number of columns in the resulting image."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canvas-Powered Rendering"})," — Uses high-performance image processing for smooth conversion and scaling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Aspect Ratio Maintenance"})," — Ensures flags are centered within their grid tiles while maintaining their original design proportions."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"To initialize the generator, specify the source directory and desired output proportions."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dir: string"})," — The directory path where the source ",e.jsx(n.code,{children:".svg"})," flag icons are located."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"width: number"})," — The target width of a single flag in the generated sprite (default: 96)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"height: number"})," — The target height of a single flag in the generated sprite (default: 72)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns: number"})," — The number of icon columns to arrange in the sprite grid (default: 12)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignFlags } from '@dxtmisha/scripts'

const generator = new DesignFlags('assets/flags', 64, 48)
generator.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): Promise<void>"})," — Orchestrates the entire process: reading files, drawing to canvas, saving the image, and writing the CSS file."]}),`
`]}),`
`,e.jsx(n.h3,{id:"information",children:"Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLines(): number"})," — Calculates the total number of rows required in the sprite grid based on the file count and column limit."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"generation-workflow",children:"Generation Workflow"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"make()"})," is executed, the class performs the following steps:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Discovery"}),": Scans the source directory for ",e.jsx(n.code,{children:".svg"})," files and initializes the grid dimensions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout Calculation"}),": Determines tiling offsets and centering margins for the specified flag sizes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Canvas Drawing"}),": Iteratively loads each image and draws it onto the sprite canvas at the calculated grid coordinate."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data Collection"}),": Records the name and coordinates of each flag to build the mapping data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Asset Export"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Saves the canvas content as a ",e.jsx(n.code,{children:"webp"})," image in the ",e.jsx(n.code,{children:"assets"})," directory."]}),`
`,e.jsxs(n.li,{children:["Generates a ",e.jsx(n.code,{children:"flags.css"})," file with root variable definitions and individual ",e.jsx(n.code,{children:"--[name]"})," modifier classes."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"style-implementation",children:"Style Implementation"}),`
`,e.jsxs(n.p,{children:["The generated CSS uses a centralized class ",e.jsx(n.code,{children:".ui-sys-flags"})," that stores dimension variables and the background image link. Individual modifiers (e.g., ",e.jsx(n.code,{children:".ui-sys-flags--us"}),") then update the ",e.jsx(n.code,{children:"background-position"})," to isolate specific icons, minimizing browser paint calls and HTTP requests."]})]})}function g(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};
