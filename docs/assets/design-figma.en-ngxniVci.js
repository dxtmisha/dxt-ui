import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-figma-layout - Figma Layout Integrator`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-figma-layout`,children:`dxt-figma-layout`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-figma-layout`}),` command provides CLI access for fetching components layout and image structures directly from Figma. It utilizes the `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` orchestrator and `,(0,c.jsx)(t.code,{children:`FigmaApi`}),` client internally to extract SVG image assets based on target Figma keys and node IDs.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Warning`}),`: A corporate Figma subscription (Figma Enterprise or Organization) is strictly required to execute this command and fetch target layout assets.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Image Fetching`}),`: Retrieves target vector and raster layouts from Figma files in clean SVG format.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Config-Driven Authentication`}),`: Automatically extracts the Figma API access token from the system configurations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Options Support`}),`: Allows targeting specific files and specific nodes dynamically through CLI options.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The layout integration workflow automates asset retrieval:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`The script reads the target Figma file key and optional node identifier passed via command line options.`}),`
`,(0,c.jsxs)(t.li,{children:[`It instantiates the `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` controller, passing the target parameters along with the automatically resolved system Figma token.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The underlying `,(0,c.jsx)(t.code,{children:`FigmaApi`}),` client issues a secure HTTP request to Figma's `,(0,c.jsx)(t.code,{children:`fileImages`}),` endpoint, requesting the nodes in SVG format with specific ID preservation parameters.`]}),`
`,(0,c.jsx)(t.li,{children:`It receives the image mapping containing URLs for the compiled assets and prints the resulting JSON map directly to the console.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsx)(t.p,{children:`No complex setup is required to run the layout integrator. Ensure that your Figma API token is configured in the environment or properties configuration before execution.`}),`
`,(0,c.jsx)(t.p,{children:`To retrieve layout images, execute the command passing your Figma file key and specific node ID via options:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-figma-layout --file abc123xyz456 --node 1-24
`})}),`
`,(0,c.jsx)(t.h2,{id:`cli-options`,children:`CLI Options`}),`
`,(0,c.jsx)(t.p,{children:`The command accepts two named options:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--file`}),` (`,(0,c.jsx)(t.code,{children:`-f`}),`): The unique identifier of the Figma file (typically found in the Figma file URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--node`}),` (`,(0,c.jsx)(t.code,{children:`-n`}),`): The specific node ID inside the file (e.g. `,(0,c.jsx)(t.code,{children:`1-24`}),` or `,(0,c.jsx)(t.code,{children:`1:24`}),`) to fetch.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Run `,(0,c.jsx)(t.code,{children:`npx dxt-figma-layout --help`}),` to print the full list of available options.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};