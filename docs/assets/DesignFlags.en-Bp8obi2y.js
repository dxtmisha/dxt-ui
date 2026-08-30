import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignFlags - Flag Sprite Generator`}),`
`,(0,c.jsx)(t.h1,{id:`designflags-class`,children:`DesignFlags Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignFlags`}),` class provides an automated solution for generating optimized image sprites from a collection of SVG flag icons. It handles the canvas-based rendering, grid layout calculation, and the generation of CSS mapping files for efficient icon display using background positioning.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),`: This class is intended exclusively for internal use within the `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` project repository.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Sprite Assembly`}),` — Combines multiple individual SVG files into a single optimized `,(0,c.jsx)(t.code,{children:`.webp`}),` sprite.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic CSS Generation`}),` — Automatically produces utility classes with precise `,(0,c.jsx)(t.code,{children:`background-position`}),` values for every flag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Configurable Grid Layout`}),` — Allows customization of flag dimensions and the number of columns in the resulting image.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Canvas-Powered Rendering`}),` — Uses high-performance image processing for smooth conversion and scaling.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Aspect Ratio Maintenance`}),` — Ensures flags are centered within their grid tiles while maintaining their original design proportions.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`To initialize the generator, specify the source directory and desired output proportions.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — The directory path where the source `,(0,c.jsx)(t.code,{children:`.svg`}),` flag icons are located.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: number`}),` — The target width of a single flag in the generated sprite (default: 96).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height: number`}),` — The target height of a single flag in the generated sprite (default: 72).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns: number`}),` — The number of icon columns to arrange in the sprite grid (default: 12).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignFlags } from '@dxtmisha/scripts'

const generator = new DesignFlags('assets/flags', 64, 48)
generator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Orchestrates the entire process: reading files, drawing to canvas, saving the image, and writing the CSS file.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLines(): number`}),` — Calculates the total number of rows required in the sprite grid based on the file count and column limit.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`generation-workflow`,children:`Generation Workflow`}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`make()`}),` is executed, the class performs the following steps:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Discovery`}),`: Scans the source directory for `,(0,c.jsx)(t.code,{children:`.svg`}),` files and initializes the grid dimensions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Layout Calculation`}),`: Determines tiling offsets and centering margins for the specified flag sizes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Canvas Drawing`}),`: Iteratively loads each image and draws it onto the sprite canvas at the calculated grid coordinate.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Data Collection`}),`: Records the name and coordinates of each flag to build the mapping data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Asset Export`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Saves the canvas content as a `,(0,c.jsx)(t.code,{children:`webp`}),` image in the `,(0,c.jsx)(t.code,{children:`assets`}),` directory.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Generates a `,(0,c.jsx)(t.code,{children:`flags.css`}),` file with root variable definitions and individual `,(0,c.jsx)(t.code,{children:`--[name]`}),` modifier classes.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`style-implementation`,children:`Style Implementation`}),`
`,(0,c.jsxs)(t.p,{children:[`The generated CSS uses a centralized class `,(0,c.jsx)(t.code,{children:`.ui-sys-flags`}),` that stores dimension variables and the background image link. Individual modifiers (e.g., `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--us`}),`) then update the `,(0,c.jsx)(t.code,{children:`background-position`}),` to isolate specific icons, minimizing browser paint calls and HTTP requests.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};