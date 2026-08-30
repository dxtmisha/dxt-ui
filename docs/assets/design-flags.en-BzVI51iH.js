import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-flags - Flag Sprite Generator`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-flags`,children:`dxt-flags`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-flags`}),` command provides an automated utility to compile a directory of SVG flag icons into a single optimized WebP sprite image and generate a corresponding CSS position mapping stylesheet. It uses the `,(0,c.jsx)(t.code,{children:`DesignFlags`}),` class to handle canvas-based rendering and grid calculations.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note`}),`: This script is intended exclusively for internal use within the `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` project repository.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Sprite Composition`}),`: Merges multiple separate SVG files into a single, high-performance WebP sprite sheet.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Position Mapping`}),`: Automatically computes precise percentage-based coordinates and writes a CSS stylesheet with utility positioning classes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`High-DPI Scaling`}),`: Renders flags using high-performance canvas libraries at a 2x scaling factor for optimal crispness.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The flag generation workflow automates the assembly of the sprite and utility styles:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The script scans the default flag icons directory for all `,(0,c.jsx)(t.code,{children:`.svg`}),` files.`]}),`
`,(0,c.jsx)(t.li,{children:`It initializes a blank canvas using high-performance rendering tools, calculating the grid columns and rows based on the flag count.`}),`
`,(0,c.jsx)(t.li,{children:`It loops through the discovered SVG files, loading each into memory and drawing them into the calculated grid positions while preserving layout spacing and proportions.`}),`
`,(0,c.jsx)(t.li,{children:`It records the coordinates and names of every flag to build the position mapping records.`}),`
`,(0,c.jsxs)(t.li,{children:[`It exports the combined canvas buffer into a `,(0,c.jsx)(t.code,{children:`.webp`}),` sprite image file and writes the utility stylesheet containing the CSS background position mappings.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsxs)(t.p,{children:[`No complex setup is required to run the flag sprite generator. Simply place your SVG flag icons into the standard `,(0,c.jsx)(t.code,{children:`src/assets/flags`}),` directory.`]}),`
`,(0,c.jsx)(t.p,{children:`To trigger the sprite and stylesheet compilation, execute:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-flags
`})}),`
`,(0,c.jsx)(t.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsx)(t.p,{children:`Upon successful execution, the tool exports the compiled assets directly to the configured workspace paths:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/assets/flags.webp`}),`: The compiled, high-dpi combined sprite image containing all flag icons.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/styles/flags.css`}),`: The generated CSS stylesheet mapping each individual flag modifier class (e.g. `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--us`}),`) to its precise background position percentage.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};